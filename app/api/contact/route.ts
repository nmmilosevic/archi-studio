import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/email";

interface ContactPayload {
  name: string;
  email: string;
  studio: string;
  website: string;
  type: string;
  budget: string;
  timeline: string;
  message: string;
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
    const body = (await request.json()) as Partial<ContactPayload>;

    if (!body.name || !body.email || !body.website) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    const payload: ContactPayload = {
      name: body.name.trim(),
      email: body.email.trim(),
      studio: (body.studio ?? "").trim(),
      website: body.website.trim(),
      type: (body.type ?? "").trim(),
      budget: (body.budget ?? "").trim(),
      timeline: (body.timeline ?? "").trim(),
      message: (body.message ?? "").trim(),
    };

    const subject = `New contact form - ${payload.name}`;
    const text = [
      "New contact form submission",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Studio: ${payload.studio || "-"}`,
      `Website: ${payload.website}`,
      `Type: ${payload.type || "-"}`,
      `Budget: ${payload.budget || "-"}`,
      `Timeline: ${payload.timeline || "-"}`,
      `Message: ${payload.message || "-"}`,
    ].join("\n");

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Studio:</strong> ${escapeHtml(payload.studio || "-")}</p>
      <p><strong>Website:</strong> ${escapeHtml(payload.website)}</p>
      <p><strong>Type:</strong> ${escapeHtml(payload.type || "-")}</p>
      <p><strong>Budget:</strong> ${escapeHtml(payload.budget || "-")}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(payload.timeline || "-")}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(payload.message || "-")}</p>
    `;

    await sendFormEmail(subject, text, html);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { ok: false, message: "Email delivery failed." },
      { status: 500 },
    );
  }
}
