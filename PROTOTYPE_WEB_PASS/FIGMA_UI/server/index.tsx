import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-5910385d/health", (c) => {
  return c.json({ status: "ok" });
});

app.get("/geo/reverse", async (c) => {
  const lat = Number(c.req.query("lat") || "");
  const lon = Number(c.req.query("lon") || "");
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return c.json({ error: "INVALID_COORDS" }, 400);
  }
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;
  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": "haemolink-app/1.0 (+contact@haemolink)" },
    });
    if (!resp.ok) {
      return c.json({ error: "REVERSE_FAILED" }, resp.status);
    }
    const data = await resp.json();
    const address = data?.address || {};
    const city =
      address.city ||
      address.town ||
      address.village ||
      address.hamlet ||
      "";
    const state = address.state || address.state_district || "";
    const postcode = address.postcode || "";
    return c.json({ city, state, postcode });
  } catch {
    return c.json({ error: "REVERSE_ERROR" }, 500);
  }
});

const serviceClient = () => createClient(
  Deno.env.get("SUPABASE_URL") || "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",
);

app.post("/notify/process", async (c) => {
  const supabase = serviceClient();
  const payload = await c.req.json().catch(() => ({} as any));
  const limit = Math.max(1, Math.min(50, Number((payload as any)?.limit ?? 20) || 20));
  const webhookUrl = (Deno.env.get("NOTIFY_WEBHOOK_URL") || "").trim();

  const { data: rows, error } = await supabase
    .from("outbound_messages")
    .select("id, channel, to_phone, body, metadata")
    .eq("status", "queued")
    .order("created_at", { ascending: true })
    .limit(limit);

  if (error) {
    return c.json({ ok: false, error: error.message }, 500);
  }

  let processed = 0;
  let sent = 0;
  let failed = 0;
  let skipped = 0;

  for (const row of (rows || []) as any[]) {
    processed += 1;
    const id = row?.id;
    if (typeof id !== "string" || !id) continue;

    if (!webhookUrl) {
      skipped += 1;
      await supabase
        .from("outbound_messages")
        .update({ status: "skipped", error: "NOTIFY_WEBHOOK_URL_NOT_SET" })
        .eq("id", id);
      continue;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          channel: row?.channel,
          to: row?.to_phone,
          body: row?.body,
          metadata: row?.metadata ?? {},
        }),
      });

      if (res.ok) {
        sent += 1;
        await supabase
          .from("outbound_messages")
          .update({ status: "sent", sent_at: new Date().toISOString(), error: null })
          .eq("id", id);
      } else {
        failed += 1;
        const text = await res.text().catch(() => "");
        await supabase
          .from("outbound_messages")
          .update({ status: "failed", error: `WEBHOOK_${res.status}${text ? `:${text.slice(0, 500)}` : ""}` })
          .eq("id", id);
      }
    } catch (e) {
      failed += 1;
      const message = (e as any)?.message;
      await supabase
        .from("outbound_messages")
        .update({ status: "failed", error: typeof message === "string" ? message.slice(0, 500) : "SEND_FAILED" })
        .eq("id", id);
    }
  }

  return c.json({ ok: true, processed, sent, failed, skipped });
});

app.post("/notify/queue-reminders", async (c) => {
  const supabase = serviceClient();
  const payload = await c.req.json().catch(() => ({} as any));
  const hours = Math.max(1, Math.min(168, Number((payload as any)?.hours ?? 24) || 24));
  const windowMinutes = Math.max(1, Math.min(720, Number((payload as any)?.windowMinutes ?? 30) || 30));

  const { data, error } = await supabase.rpc("queue_upcoming_transfusion_reminders", {
    p_hours: hours,
    p_window_minutes: windowMinutes,
  } as any);
  if (error) {
    return c.json({ ok: false, error: error.message }, 500);
  }
  return c.json({ ok: true, queuedSchedules: data ?? 0 });
});

Deno.serve(app.fetch);
