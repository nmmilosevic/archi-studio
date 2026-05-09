import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es", "fr"],
  defaultLocale: "es",
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
