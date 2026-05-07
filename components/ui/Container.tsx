import { clsx } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={clsx("container-site", className)}>
      {children}
    </Tag>
  );
}
