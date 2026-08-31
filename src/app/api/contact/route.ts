import { profile } from "@/data/profile";

const INBOX = profile.email;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string; company?: string };

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "").trim();

  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message || !email.includes("@")) {
    return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const response = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Portfolio message from ${name}`,
      _replyto: email,
      _template: "table",
      _captcha: "false",
      _honey: "",
    }),
  });

  if (!response.ok) {
    return Response.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }

  return Response.json({ ok: true, inbox: INBOX });
}
