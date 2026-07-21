// Relay for the maintenance report form. The tenant's browser posts here
// (same-origin, so no third-party DNS lookup is ever required on their
// end) and this function forwards the request to Make.com server-side.
//
// Why this exists: some routers/ISPs run "advanced security" DNS filters
// that block webhook-style domains (hook.eu1.make.com, hooks.zapier.com,
// webhook.site, etc.) outright, causing net::ERR_NAME_NOT_RESOLVED in the
// tenant's browser even though the webhook itself is fine. Routing through
// this same-origin relay sidesteps that entirely, since only Vercel's own
// servers ever need to resolve make.com.
//
// Set the real endpoint as a Vercel environment variable named
// MAKE_WEBHOOK_URL (Project Settings -> Environment Variables) — keep the
// actual webhook URL out of client-side code.

export const config = { runtime: "edge" };

export default async function handler(request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const webhookUrl = process.env.MAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    return new Response("Server misconfigured: MAKE_WEBHOOK_URL is not set", { status: 500 });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      body: request.body,
      headers: { "content-type": request.headers.get("content-type") || "" },
      // Edge runtime requires this when streaming a ReadableStream body through.
      duplex: "half",
    });

    return new Response(upstream.ok ? "ok" : "upstream error", {
      status: upstream.ok ? 200 : 502,
    });
  } catch (_err) {
    return new Response("relay failed", { status: 502 });
  }
}
