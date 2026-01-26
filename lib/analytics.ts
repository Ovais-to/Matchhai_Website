export const shouldTrack = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    return false;
  }
  return true;
};

export const trackPage = (_path: string) => {
  if (!shouldTrack()) {
    return;
  }
};

export const trackEvent = (_name: string, _payload?: Record<string, unknown>) => {
  if (!shouldTrack()) {
    return;
  }
};
