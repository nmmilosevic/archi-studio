import {
  FolderKanban,
  LayoutTemplate,
  Mail,
  Search,
  ServerCog,
  Smartphone,
  Upload,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedUI } from "@/components/motion/AnimatedUI";
import { RevealMedia } from "@/components/motion/RevealMedia";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/paths";

interface HomeIncludedSectionProps {
  title: string;
  body: string;
}

interface IncludedServiceItem {
  label: string;
  icon: LucideIcon;
}

const services: IncludedServiceItem[] = [
  { label: "Custom website design", icon: LayoutTemplate },
  { label: "Project portfolio structure", icon: FolderKanban },
  { label: "Mobile responsive build", icon: Smartphone },
  { label: "CMS setup", icon: ServerCog },
  { label: "Contact form", icon: Mail },
  { label: "Basic SEO setup", icon: Search },
  { label: "Deployment", icon: Upload },
];

export function HomeIncludedSection({ title, body }: HomeIncludedSectionProps) {
  return (
    <section className="bg-offwhite section-space" aria-labelledby="redesign-heading">
      <Container>
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <AnimatedTitle
            text={title}
            as="h2"
            id="redesign-heading"
            className="text-section max-w-[760px] text-primary"
          />
          <AnimatedText className="text-support max-w-[560px] text-muted lg:ml-auto" delay={0.1}>
            {body}
          </AnimatedText>
        </div>

        <div className="relative">
          <RevealMedia
            className="relative mx-auto max-w-[980px] rounded-[20px] border border-charcoal/10 bg-[#f6f1e9] p-0 shadow-[0_28px_70px_rgb(24_20_16/0.08)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-[14px]">
              <Image
                src={assetPath("/images/pricing-img.png")}
                alt="Website composition preview"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1440px) 980px, (min-width: 1024px) 80vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/12 via-transparent to-transparent" />
            </div>
          </RevealMedia>

          <div className="mx-auto mt-10 max-w-[980px]">
            <div className="grid grid-cols-1 gap-x-14 gap-y-5 md:grid-cols-2 md:gap-y-7">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;

                return (
                  <AnimatedUI key={service.label} delay={0.06 + index * 0.04}>
                    <div className="group flex items-center gap-3.5 border-b border-charcoal/10 pb-4">
                      <span className="inline-flex items-center justify-center text-bronze/95" aria-hidden="true">
                        <ServiceIcon size={32} strokeWidth={1} />
                      </span>
                      <span className="text-[16px] leading-relaxed text-primary/84 transition-colors duration-300 group-hover:text-primary">
                        {service.label}
                      </span>
                    </div>
                  </AnimatedUI>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
