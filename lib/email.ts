import nodemailer from "nodemailer";

const DEFAULT_TO = "hello@reframestudio.es";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : true;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user ?? DEFAULT_TO;
  const to = process.env.FORMS_TO_EMAIL ?? DEFAULT_TO;

  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS are required.");
  }

  return { host, port, secure, user, pass, from, to };
}

export async function sendFormEmail(subject: string, text: string, html: string) {
  const config = getSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    subject,
    text,
    html,
  });
}
