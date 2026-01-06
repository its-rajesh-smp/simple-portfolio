import mixpanel from "mixpanel-browser";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export const MixpanelProvider = () => {
  if (!token) {
    console.warn("Missing mixpanel token");
    return null;
  }

  mixpanel.init(token, {
    autocapture: true,
    record_sessions_percent: 100,
    api_host: "https://api-eu.mixpanel.com",
    autotrack: true,
  });
  return null;
};
