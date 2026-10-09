import mixpanel from "mixpanel-browser";

let initialized = false;

export function initAnalytics() {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  if (initialized || !token) return;

  mixpanel.init(token, {
    autocapture: true,
    record_sessions_percent: 100,
    api_host: "https://api-eu.mixpanel.com",
  });
  initialized = true;
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (initialized) mixpanel.track(event, properties);
}
