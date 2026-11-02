"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { copy as dictionary } from "@/entities/project/model/projects";
import type { Copy, Locale } from "@/entities/project/model/types";

interface LocaleValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Copy;
}

const LocaleContext = createContext<LocaleValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionary[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return value;
}
