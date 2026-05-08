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
    <footer className="bg-charcoal py-20 text-inverted md:py-28" aria-label="Site footer">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href={`/${locale}`}
              className="inline-block text-inverted transition-colors hover:text-bronze"
              aria-label={`${BRAND.name} — Home`}
            >
              <ReframeLogo className="h-10 w-[140px] md:h-12 md:w-[168px]" />
            </Link>
            <p className="mt-8 max-w-[360px] text-[18px] leading-relaxed text-inverted/58">
              Premium websites for architecture studios.
            </p>
          </div>

          <div className="grid gap-8 md:min-w-[360px]">
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-[16px] text-inverted/62 transition-colors hover:text-inverted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={`mailto:${BRAND.email}`}
              className="text-[16px] text-inverted/62 transition-colors hover:text-bronze"
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
