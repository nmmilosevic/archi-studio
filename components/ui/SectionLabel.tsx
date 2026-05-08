import { clsx } from "clsx";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <div
      className={clsx(
        "font-body flex items-center gap-3",
        light ? "text-[#C4B49F]" : "text-bronze",
        className
      )}
    >
      <span
        className={clsx(
          "inline-block w-8 h-px flex-shrink-0",
          light ? "bg-[#C4B49F]" : "bg-bronze"
        )}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
