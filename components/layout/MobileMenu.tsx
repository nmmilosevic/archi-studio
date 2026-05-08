"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { NAV_LINKS } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { ReframeLogo } from "@/components/ui/ReframeLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.1 + i * 0.07,
      ease: EASE,
    },
  }),
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const locale = useLocale();
  const t = useTranslations("nav");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/45 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-charcoal flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-7">
              <ReframeLogo className="text-inverted" />
              <button
                onClick={onClose}
                className="text-inverted/60 hover:text-inverted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze p-1"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 py-8" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.key}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <Link
                      href={`/${locale}${link.href}`}
                      onClick={onClose}
                      className="block py-3.5 font-heading text-[30px] font-medium text-inverted/70 hover:text-inverted transition-colors duration-200 leading-[0.95]"
                    >
                      {t(link.key as keyof ReturnType<typeof useTranslations<"nav">>)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="px-8 py-7 space-y-5">
              <Button asChild variant="secondary" className="w-full justify-center">
                <Link href={`/${locale}/contact`} onClick={onClose}>
                  Start your website
                </Link>
              </Button>
              <div className="flex justify-center">
                <LanguageSwitcher light />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
