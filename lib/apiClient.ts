type ApiResponse = {
  ok: boolean;
  message?: string;
};

const WAITLIST_ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "";
const ZONE_INTEREST_ENDPOINT = process.env.NEXT_PUBLIC_ZONE_INTEREST_ENDPOINT ?? "";
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

// Google Forms (free) fallback for contact submissions.
// Use the "formResponse" URL + entry ids from the prefilled link.
const GOOGLE_FORMS_ACTION = process.env.NEXT_PUBLIC_GOOGLE_FORMS_ACTION ?? "";
const GOOGLE_FORMS_ENTRY_NAME = process.env.NEXT_PUBLIC_GOOGLE_FORMS_ENTRY_NAME ?? "";
const GOOGLE_FORMS_ENTRY_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_FORMS_ENTRY_EMAIL ?? "";
const GOOGLE_FORMS_ENTRY_MESSAGE =
  process.env.NEXT_PUBLIC_GOOGLE_FORMS_ENTRY_MESSAGE ?? "";

const simulateResponse = (success = true, delay = 900): Promise<ApiResponse> =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ ok: success }), delay)
  );

const postJson = async (url: string, payload: Record<string, unknown>) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    return { ok: false };
  }
  return { ok: true };
};

export const submitWaitlist = async (payload: Record<string, unknown>) => {
  if (!WAITLIST_ENDPOINT) {
    return simulateResponse(true);
  }
  return postJson(WAITLIST_ENDPOINT, payload);
};

export const submitZoneInterest = async (payload: Record<string, unknown>) => {
  if (!ZONE_INTEREST_ENDPOINT) {
    return simulateResponse(true);
  }
  return postJson(ZONE_INTEREST_ENDPOINT, payload);
};

export const submitContact = async (payload: Record<string, unknown>) => {
  if (CONTACT_ENDPOINT) {
    return postJson(CONTACT_ENDPOINT, payload);
  }

  if (
    GOOGLE_FORMS_ACTION &&
    GOOGLE_FORMS_ENTRY_NAME &&
    GOOGLE_FORMS_ENTRY_EMAIL &&
    GOOGLE_FORMS_ENTRY_MESSAGE
  ) {
    const name = String(payload.name ?? "");
    const email = String(payload.email ?? "");
    const message = String(payload.message ?? "");

    // Google Forms does not send CORS headers. `no-cors` will be opaque even on success.
    // We treat "request sent" as success to keep UX smooth.
    try {
      const params = new URLSearchParams();
      params.set(`entry.${GOOGLE_FORMS_ENTRY_NAME}`, name);
      params.set(`entry.${GOOGLE_FORMS_ENTRY_EMAIL}`, email);
      params.set(`entry.${GOOGLE_FORMS_ENTRY_MESSAGE}`, message);

      await fetch(GOOGLE_FORMS_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      });

      return { ok: true };
    } catch {
      return { ok: false };
    }
  }

  // No backend configured yet.
  return simulateResponse(true);
};
