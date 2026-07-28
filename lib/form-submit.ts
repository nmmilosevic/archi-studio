const FORM_ENDPOINT = "https://formsubmit.co/ajax/hello@reframestudio.es";

type FormValue = string | boolean;

interface SubmitFormOptions {
  subject: string;
  fields: Record<string, FormValue>;
}

export async function submitForm({ subject, fields }: SubmitFormOptions) {
  const data = new FormData();

  data.append("_subject", subject);
  data.append("_template", "table");

  const replyTo = fields.Email;
  if (typeof replyTo === "string") {
    data.append("_replyto", replyTo);
  }

  Object.entries(fields).forEach(([name, value]) => {
    data.append(name, typeof value === "boolean" ? (value ? "Yes" : "No") : value || "-");
  });

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error("Form delivery failed.");
  }

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean | string }
    | null;

  if (result?.success === false || result?.success === "false") {
    throw new Error("Form delivery failed.");
  }
}
