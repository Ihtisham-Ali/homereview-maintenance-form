// Relay for the maintenance report form. The tenant's browser posts here
// (same-origin, so no third-party DNS lookup is ever required on their
// end) and this function forwards the request to Make.com server-side.
//
// Why this exists: some routers/ISPs run "advanced security" DNS filters
// that block webhook-style domains (hook.eu1.make.com, hooks.zapier.com,
// webhook.site, etc.) outright, causing net::ERR_NAME_NOT_RESOLVED in the
// tenant's browser even though the webhook itself is fine. Routing through
// this same-origin relay sidesteps that entirely, since only Netlify's own
// servers ever need to resolve make.com.
//
// Configure the real endpoint as a Netlify environment variable named
// MAKE_WEBHOOK_URL (Site settings -> Environment variables) — keep the
// actual webhook URL out of client-side code.

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const webhookUrl = Deno.env.get("MAKE_WEBHOOK_URL");
  if (!webhookUrl) {
    return new Response("Server misconfigured: MAKE_WEBHOOK_URL is not set", { status: 500 });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      body: request.body,
      headers: { "content-type": request.headers.get("content-type") || "" },
      // Deno requires this when streaming a ReadableStream body through.
      duplex: "half",
    } as RequestInit);

    return new Response(upstream.ok ? "ok" : "upstream error", {
      status: upstream.ok ? 200 : 502,
    });
  } catch (_err) {
    return new Response("relay failed", { status: 502 });
  }
};

export const config = { path: "/api/submit-report" };
