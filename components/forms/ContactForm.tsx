"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import { Send, CheckCircle } from "lucide-react";

const inputClass =
  "w-full min-h-12 bg-transparent border border-charcoal/28 px-4 py-3.5 font-body text-[16px] leading-[1.5] text-primary placeholder:text-muted/36 focus:outline-none focus:border-bronze/90 focus:ring-2 focus:ring-bronze/18 transition-all duration-200";
const labelClass =
  "mb-2 block font-body text-[13px] tracking-[0.01em] text-muted/72";

interface FormData {
  name: string;
  email: string;
  studio: string;
  website: string;
  review: boolean;
  message: string;
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    studio: "",
    website: "",
    review: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [target.name]: target.checked }));
      return;
    }
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send form.");
      }

      setSuccess(true);
    } catch {
      setError("Something went wrong. Please email us directly at reframe.stud@gmail.com.");
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
    <form onSubmit={handleSubmit} noValidate className="space-y-5 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

      <label htmlFor="contact-review" className="flex items-start gap-3 border border-charcoal/16 bg-stone/52 p-4 text-[15px] leading-relaxed text-muted md:p-5">
        <input
          id="contact-review"
          name="review"
          type="checkbox"
          checked={form.review}
          onChange={handleChange}
          className="peer sr-only"
        />
        <span
          className={clsx(
            "mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[3px] border border-charcoal/38 bg-offwhite transition-all duration-200",
            "peer-checked:border-bronze peer-checked:bg-bronze/12"
          )}
          aria-hidden="true"
        >
          <span className="h-2.5 w-2.5 scale-0 bg-bronze transition-transform duration-200 peer-checked:scale-100" />
        </span>
        I would like a review of my current website.
      </label>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          What feels wrong with your current website?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          value={form.message}
          onChange={handleChange}
          className={clsx(inputClass, "resize-none")}
          placeholder="What feels outdated, unclear, or difficult to use?"
        />
      </div>

      <div className="pt-2">
        {error && (
          <p className="mb-4 border border-red-300/40 bg-red-50 px-4 py-3 text-[14px] text-red-700">
            {error}
          </p>
        )}
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="w-full min-h-14 justify-center gap-2"
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
      </div>
    </form>
  );
}
