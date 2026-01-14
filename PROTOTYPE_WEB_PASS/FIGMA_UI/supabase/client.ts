import { createClient } from "@supabase/supabase-js";
import { projectId, publicAnonKey } from "../supabase/info";

const env = ((import.meta as any)?.env ?? {}) as Record<string, any>;

const envUrl = typeof env.VITE_SUPABASE_URL === "string" ? env.VITE_SUPABASE_URL : undefined;
const envProjectId = typeof env.VITE_SUPABASE_PROJECT_ID === "string" ? env.VITE_SUPABASE_PROJECT_ID : undefined;
const envAnonKey = typeof env.VITE_SUPABASE_ANON_KEY === "string" ? env.VITE_SUPABASE_ANON_KEY : undefined;

const resolvedUrl = envUrl || `https://${envProjectId || projectId}.supabase.co`;
const resolvedAnonKey = envAnonKey || publicAnonKey;

export const COMPLIANCE_BUCKET =
  (typeof env.VITE_COMPLIANCE_BUCKET === "string" && env.VITE_COMPLIANCE_BUCKET.trim())
    ? env.VITE_COMPLIANCE_BUCKET.trim()
    : "compliance";

export const supabase = createClient(resolvedUrl, resolvedAnonKey, {
  global: {
    headers: {
      apikey: resolvedAnonKey,
    },
    fetch: (input, init) => {
      const nextInit = init ? { ...init } : {};
      const inputHeaders = input instanceof Request ? input.headers : undefined;
      const headers = new Headers(inputHeaders || undefined);
      const initHeaders = new Headers((nextInit as any).headers || undefined);
      initHeaders.forEach((value, key) => headers.set(key, value));
      headers.set("apikey", resolvedAnonKey);
      (nextInit as any).headers = headers;
      return fetch(input as any, nextInit as any);
    },
  },
});
