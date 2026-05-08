import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/email";

interface AuditPayload {
  name: string;
  studio: string;
  url: string;
  email: string;
  city: string;
  type: string;
  improve: string;
  language: string;
  consent: boolean;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<AuditPayload>;

    if (!body.name || !body.email || !body.url || !body.consent) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    const payload: AuditPayload = {
      name: body.name.trim(),
      studio: (body.studio ?? "").trim(),
      url: body.url.trim(),
      email: body.email.trim(),
      city: (body.city ?? "").trim(),
      type: (body.type ?? "").trim(),
      improve: (body.improve ?? "").trim(),
      language: (body.language ?? "").trim(),
      consent: Boolean(body.consent),
    };

    const subject = `New audit request - ${payload.name}`;
    const text = [
      "New website audit request",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Studio: ${payload.studio || "-"}`,
      `Website URL: ${payload.url}`,
      `City: ${payload.city || "-"}`,
      `Studio type: ${payload.type || "-"}`,
      `Preferred language: ${payload.language || "-"}`,
      `Needs improvement: ${payload.improve || "-"}`,
      `Consent: ${payload.consent ? "Yes" : "No"}`,
    ].join("\n");

    const html = `
      <h2>New website audit request</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Studio:</strong> ${escapeHtml(payload.studio || "-")}</p>
      <p><strong>Website URL:</strong> ${escapeHtml(payload.url)}</p>
      <p><strong>City:</strong> ${escapeHtml(payload.city || "-")}</p>
      <p><strong>Studio type:</strong> ${escapeHtml(payload.type || "-")}</p>
      <p><strong>Preferred language:</strong> ${escapeHtml(payload.language || "-")}</p>
      <p><strong>Needs improvement:</strong><br/>${escapeHtml(payload.improve || "-")}</p>
      <p><strong>Consent:</strong> ${payload.consent ? "Yes" : "No"}</p>
    `;

    await sendFormEmail(subject, text, html);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Audit form email failed:", error);
    return NextResponse.json(
      { ok: false, message: "Email delivery failed." },
      { status: 500 },
    );
  }
}
