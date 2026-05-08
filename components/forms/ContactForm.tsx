"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import { Send, CheckCircle } from "lucide-react";

const inputClass =
  "w-full bg-transparent border border-charcoal/15 px-4 py-3.5 font-body text-[16px] text-primary placeholder:text-muted/45 focus:outline-none focus:border-bronze transition-colors duration-200";
const labelClass =
  "font-body text-[14px] text-muted/65 mb-2 block";

interface FormData {
  name: string;
  email: string;
  studio: string;
  city: string;
  website: string;
  type: string;
  budget: string;
  timeline: string;
  message: string;
}

const budgetOptions = [
  "€1,500 website",
  "€1,500 + hosting",
  "€1,500 + monthly updates",
  "Not sure yet",
];

const timelineOptions = [
  "As soon as possible",
  "This month",
  "1 to 3 months",
  "Just exploring",
];

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    studio: "",
    city: "",
    website: "",
    type: "",
    budget: "",
    timeline: "",
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
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSuccess(true);
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
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Row 1: name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            placeholder="Nicolas Alonso"
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

      {/* Row 2: studio + city */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            placeholder="Studio Alonso"
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

      {/* Row 3: website URL (full width) */}
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
          placeholder="https://studio-alonso.com"
        />
      </div>

      {/* Row 4: type + budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-type" className={labelClass}>
            What do you need?
          </label>
          <select
            id="contact-type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={clsx(inputClass, "cursor-pointer")}
          >
            <option value="">—</option>
            {["New website", "Website redesign", "Website review", "Ongoing updates"].map((opt) => (
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
            className={clsx(inputClass, "cursor-pointer")}
          >
            <option value="">—</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-timeline" className={labelClass}>
          Timeline
        </label>
        <select
          id="contact-timeline"
          name="timeline"
          value={form.timeline}
          onChange={handleChange}
          className={clsx(inputClass, "cursor-pointer")}
        >
          <option value="">—</option>
          {timelineOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
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
          placeholder="Tell us what you need, what feels outdated, or what you want the new website to do."
        />
      </div>

      <div className="pt-2">
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
      </div>
    </form>
  );
}
