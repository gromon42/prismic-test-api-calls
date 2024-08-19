import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { Locale } from "./enums";

const getLocale = async (request: NextRequest) => {
  const locales = Object.values(Locale);
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  const defaultLocale = locales[0];
  const preferrredLocale = match(
    languages,
    locales as string[],
    defaultLocale as string
  );

  return preferrredLocale;
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const locales = Object.values(Locale);

  const preferredLocale = await getLocale(request);

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const pathnameSliceSimulator = pathname.includes("/slice-simulator");

  if (pathnameSliceSimulator) {
    return NextResponse.next();
  }

  /** Redirect to preferredLocale locale if there is no supported locale prefix
   * Which is the locale corresponding to the user's browser settings
   **/
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|icons|favicon.ico|sw.js).*)",
  ],
};
