"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ReframeLogo } from "@/components/ui/ReframeLogo";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const locale = useLocale();

  return (
    <footer className="bg-charcoal py-16 text-inverted md:py-20" aria-label="Site footer">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href={`/${locale}`}
              className="inline-block text-inverted transition-colors hover:text-bronze"
              aria-label={`${BRAND.name} — Home`}
            >
              <ReframeLogo className="h-10 w-[140px] md:h-12 md:w-[168px]" />
            </Link>
            <p className="mt-6 max-w-[360px] text-[16px] leading-relaxed text-inverted/58">
              Premium websites for architecture studios.
            </p>
          </div>

          <div className="grid gap-6 md:min-w-[300px]">
            <nav aria-label="Footer navigation">
              <ul className="flex gap-8">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-[15px] text-inverted/62 transition-colors hover:text-inverted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={`mailto:${BRAND.email}`}
              className="text-[15px] text-inverted/62 transition-colors hover:text-bronze"
            >
              {BRAND.email}
            </a>

            <Button asChild variant="secondary" size="md">
              <Link href={`/${locale}/contact`}>Start your website</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
