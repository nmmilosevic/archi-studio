"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import { Send, CheckCircle } from "lucide-react";

// TODO: Connect to Resend or Supabase for email delivery

const inputClass = "w-full min-h-12 bg-transparent border-b border-charcoal/15 px-0 py-3.5 font-body text-[16px] leading-[1.5] text-primary placeholder:text-muted/42 focus:outline-none focus:border-bronze transition-colors duration-300";
const labelClass = "font-body text-[14px] text-muted/65 mb-2 block";

interface FormData {
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

export function AuditForm() {
  const t = useTranslations("audit.form");
  const [form, setForm] = useState<FormData>({
    name: "",
    studio: "",
    url: "",
    email: "",
    city: "",
    type: "",
    improve: "",
    language: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [target.name]: target.checked }));
    } else {
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="h-10 w-10 text-bronze mb-4" aria-hidden="true" />
        <p className="font-heading text-[24px] text-primary mb-2 max-w-sm">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 md:space-y-7">
      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="audit-name" className={labelClass}>
            {t("name")} *
          </label>
          <input
            id="audit-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="audit-studio" className={labelClass}>
            {t("studio")}
          </label>
          <input
            id="audit-studio"
            name="studio"
            type="text"
            autoComplete="organization"
            value={form.studio}
            onChange={handleChange}
            className={inputClass}
            placeholder="Studio name"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div>
        <label htmlFor="audit-url" className={labelClass}>
          {t("url")} *
        </label>
        <input
          id="audit-url"
          name="url"
          type="url"
          required
          value={form.url}
          onChange={handleChange}
          className={inputClass}
          placeholder="https://your-studio-website.com"
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="audit-email" className={labelClass}>
            {t("email")} *
          </label>
          <input
            id="audit-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="hello@studio.com"
          />
        </div>
        <div>
          <label htmlFor="audit-city" className={labelClass}>
            {t("city")}
          </label>
          <input
            id="audit-city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            className={inputClass}
            placeholder="Marbella"
          />
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="audit-type" className={labelClass}>
            {t("type")}
          </label>
          <select
            id="audit-type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={clsx(inputClass, "cursor-pointer bg-offwhite")}
          >
            <option value="">Select type</option>
            {(t.raw("typeOptions") as string[]).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="audit-language" className={labelClass}>
            {t("language")}
          </label>
          <select
            id="audit-language"
            name="language"
            value={form.language}
            onChange={handleChange}
            className={clsx(inputClass, "cursor-pointer bg-offwhite")}
          >
            <option value="">Select language</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>

      {/* Improve */}
      <div>
        <label htmlFor="audit-improve" className={labelClass}>
          {t("improve")}
        </label>
        <textarea
          id="audit-improve"
          name="improve"
          rows={4}
          value={form.improve}
          onChange={handleChange}
          className={clsx(inputClass, "resize-none")}
          placeholder="Describe the main issues or goals..."
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3 border-t border-charcoal/10 pt-5">
        <input
          id="audit-consent"
          name="consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={handleChange}
          className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer border border-charcoal/20 accent-bronze"
        />
        <label
          htmlFor="audit-consent"
          className="font-body text-[14px] text-muted leading-relaxed cursor-pointer"
        >
          {t("consent")}
        </label>
      </div>

      <Button
        type="submit"
        disabled={loading || !form.consent}
        size="lg"
        className="w-full justify-center gap-2 rounded-full"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            {t("cta")}
            <Send className="h-3.5 w-3.5" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
