import type { Locale } from "@models/general.model";
import EgyptFlag from "@icons/flag-egypt.svg";
import UsaFlag from "@icons/flag-usa.svg";

// ----------------------------------------------------------------------

export const LOCALES: Locale[] = [
  {
    language: "en",
    label: "English",
    countryCode: "US",
    adapterLocale: "en-US",
    currency: "USD",
    flag: UsaFlag,
    direction: "ltr",
    phoneCode: "+1",
  },

  {
    language: "ar",
    label: "العربية",
    countryCode: "EG",
    adapterLocale: "ar-EG",
    currency: "EGP",
    flag: EgyptFlag,
    direction: "rtl",
    phoneCode: "+20",
  },
];

/**
 * Country code:
 * https://flagcdn.com/en/codes.json
 *
 * Number format code:
 * https://gist.github.com/raushankrjha/d1c7e35cf87e69aa8b4208a8171a8416
 */
