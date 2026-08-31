import { profile } from "@/data/profile";

const INBOX = profile.email;
const SITE = "https://abdulsamadsaleem.vercel.app";

type FormSubmitResult = {
  success?: string | boolean;
  message?: string;
};

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

  const origin = request.headers.get("origin") || SITE;

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(INBOX)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/`,
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Portfolio message from ${name}`,
      _replyto: email,
      _template: "table",
    }),
  });

  const result = (await response.json().catch(() => null)) as FormSubmitResult | null;
  const text = String(result?.message ?? "");
  const succeeded = result?.success === true || result?.success === "true";
  const needsActivation = /activat/i.test(text);

  if (needsActivation) {
    return Response.json({ ok: true, needsActivation: true, inbox: INBOX });
  }

  if (!response.ok || !succeeded) {
    return Response.json({ ok: false, error: text || "Delivery failed" }, { status: 502 });
  }

  return Response.json({ ok: true, inbox: INBOX });
}
