import type { Language } from "@models/general.model";

type Props = {
  obj: Record<string, string>; // object to get the text from
  key: "title" | "description" | "name" | string; // e.g., 'title', 'description', 'name', etc...
  language: Language; // e.g., 'en', 'ar', etc...
};

const localizedText = ({ obj, key, language }: Props) => {
  if (!obj) return null;

  // Capitalize the first letter of the language code (e.g., 'en' -> 'En')
  const langSuffix = language.charAt(0).toUpperCase() + language.slice(1);

  // Try to access the correct key
  const text = obj[`${key}${langSuffix}`] ?? obj[key] ?? "";

  if (!text) return null;

  return text.replace(/\r\n?/g, "\n");
};

export default localizedText;
