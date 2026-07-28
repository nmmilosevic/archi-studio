"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import { Send, CheckCircle } from "lucide-react";
import { getPageCopy } from "@/lib/page-copy";
import { submitForm } from "@/lib/form-submit";

const inputClass =
  "w-full min-h-12 border border-charcoal/16 bg-offwhite/92 px-4 py-3.5 font-body text-[16px] leading-[1.5] text-primary placeholder:text-muted/36 focus:border-bronze/55 focus:outline-none transition-colors duration-250";
const labelClass =
  "mb-2 block font-body text-[12px] tracking-[0.01em] text-primary/52";

interface FormData {
  name: string;
  email: string;
  studio: string;
  website: string;
  message: string;
}

export function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("contact.form");
  const pageCopy = getPageCopy(locale).contact;
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    studio: "",
    website: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await submitForm({
        subject: `New contact form - ${form.name}`,
        fields: {
          Name: form.name,
          Email: form.email,
          Studio: form.studio,
          Website: form.website,
          Message: form.message,
        },
      });

      setSuccess(true);
    } catch {
      setError(pageCopy.error);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle className="h-8 w-8 text-bronze mb-5" aria-hidden="true" />
        <p className="font-heading text-[22px] font-medium text-primary mb-2">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 md:space-y-7">
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {t("name")} *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="contact-studio" className={labelClass}>
            {t("studio")}
          </label>
          <input
            id="contact-studio"
            name="studio"
            type="text"
            autoComplete="organization"
            value={form.studio}
            onChange={handleChange}
            className={inputClass}
            placeholder=""
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {t("email")} *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="contact-website" className={labelClass}>
            {t("url")} *
          </label>
          <input
            id="contact-website"
            name="website"
            type="url"
            required
            autoComplete="url"
            value={form.website}
            onChange={handleChange}
            className={inputClass}
            placeholder=""
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={8}
          value={form.message}
          onChange={handleChange}
          className={clsx(
            inputClass,
            "min-h-[210px] resize-none py-4 leading-[1.7]"
          )}
          placeholder={t("messagePlaceholder")}
        />
      </div>

      <div className="pt-3">
        {error && (
          <p className="mb-4 border border-red-300/32 bg-red-50/65 px-4 py-3 text-[14px] text-red-700">
            {error}
          </p>
        )}
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          variant="primary"
          className="group w-full min-h-14 justify-center gap-2 sm:w-auto sm:px-9"
        >
          {loading ? (
            pageCopy.sending
          ) : (
            <>
              {t("cta")}
              <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
