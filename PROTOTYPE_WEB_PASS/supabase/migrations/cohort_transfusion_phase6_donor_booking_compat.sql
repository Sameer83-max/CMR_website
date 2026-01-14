create or replace function public.donor_get_cohort_details(p_patient_id uuid default null)
returns table (
  cohort_id uuid,
  cohort_name text,
  patient_id uuid,
  patient_name text,
  sequence_order integer,
  next_scheduled_for timestamptz,
  last_donation_date timestamptz,
  days_until_eligible integer,
  donor_available boolean
)
language sql
security definer
set search_path = public
as $$
  select
    a.cohort_id,
    a.cohort_name,
    a.patient_id,
    a.patient_name,
    a.sequence_order,
    a.next_scheduled_for,
    a.last_donation_date,
    a.days_until_eligible,
    a.donor_available
  from public.donor_list_cohort_assignments() a
  where p_patient_id is null or a.patient_id = p_patient_id
  order by a.cohort_id, a.sequence_order;
$$;

grant execute on function public.donor_get_cohort_details(uuid) to authenticated;

create or replace function public.donor_list_hospitals(p_query text default null)
returns table (
  hospital_id uuid,
  name text,
  address text,
  contact text,
  verified boolean
)
language sql
security definer
set search_path = public
as $$
  select
    hp.user_id as hospital_id,
    coalesce(hp.organization_name, 'Hospital') as name,
    coalesce(hp.address, '') as address,
    coalesce(hp.admin_contact, '') as contact,
    (hp.verification_status = 'approved') as verified
  from public.hospital_profiles hp
  where exists (
    select 1 from public.users u where u.id = auth.uid() and u.role = 'donor'
  )
    and coalesce(hp.is_active, true) = true
    and (
      p_query is null
      or p_query = ''
      or hp.organization_name ilike ('%' || p_query || '%')
      or hp.address ilike ('%' || p_query || '%')
    )
  order by verified desc, name asc
  limit 100;
$$;

grant execute on function public.donor_list_hospitals(text) to authenticated;

create or replace function public.donor_book_donation(
  p_schedule_id uuid,
  p_hospital_id uuid,
  p_scheduled_for timestamptz default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  s record;
begin
  if uid is null then
    raise exception 'not_authenticated';
  end if;
  if not exists (select 1 from public.users u where u.id = uid and u.role = 'donor') then
    raise exception 'not_donor';
  end if;

  select * into s
  from public.cohort_transfusion_schedule
  where id = p_schedule_id
  for update;

  if not found then
    raise exception 'schedule_not_found';
  end if;

  if coalesce(s.assigned_donor_id, s.emergency_donor_id) is distinct from uid then
    raise exception 'not_authorized';
  end if;

  update public.cohort_transfusion_schedule
  set assigned_hospital_id = p_hospital_id,
      scheduled_for = coalesce(p_scheduled_for, scheduled_for),
      status = case when status = 'completed' then status else 'booked' end
  where id = p_schedule_id;
end;
$$;

grant execute on function public.donor_book_donation(uuid, uuid, timestamptz) to authenticated;

