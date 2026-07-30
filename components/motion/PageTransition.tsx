import { ViewTransition } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <ViewTransition default="site-page">
      {children}
    </ViewTransition>
  );
}
