"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import { Send, CheckCircle } from "lucide-react";

// TODO: Connect to Resend or Supabase for email delivery

const inputClass = "w-full bg-transparent border border-charcoal/15 px-4 py-3.5 font-body text-[14px] text-primary placeholder:text-muted/50 focus:outline-none focus:border-bronze transition-colors duration-200";
const labelClass = "font-mono-label text-[14px] tracking-widest uppercase text-muted/70 mb-1.5 block";

interface FormData {
  name: string;
  email: string;
  studio: string;
  city: string;
  type: string;
  budget: string;
  message: string;
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    studio: "",
    city: "",
    type: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate delay — replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="h-10 w-10 text-bronze mb-4" aria-hidden="true" />
        <p className="font-heading text-[24px] text-primary mb-2">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            placeholder="Nicolas Milosevic"
          />
        </div>
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
            placeholder="hello@studio.com"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            placeholder="Studio Name"
          />
        </div>
        <div>
          <label htmlFor="contact-city" className={labelClass}>
            {t("city")}
          </label>
          <input
            id="contact-city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            className={inputClass}
            placeholder="Marbella"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-type" className={labelClass}>
            {t("type")}
          </label>
          <select
            id="contact-type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={clsx(inputClass, "cursor-pointer bg-offwhite")}
          >
            <option value="">Select type</option>
            {(t.raw("typeOptions") as string[]).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-budget" className={labelClass}>
            {t("budget")}
          </label>
          <select
            id="contact-budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={clsx(inputClass, "cursor-pointer bg-offwhite")}
          >
            <option value="">Select budget</option>
            {(t.raw("budgetOptions") as string[]).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={clsx(inputClass, "resize-none")}
          placeholder="Tell us about your studio, the project, and any timeline..."
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full justify-center gap-2"
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
