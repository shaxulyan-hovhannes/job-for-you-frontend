"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";

import { Locale, ParsedDateType } from "@/types/common";

import { parseValidDate } from "@/utils/date";

import { APP_LANGUAGES } from "@/constants/common";

interface IntlContextType {
  locale: Locale;
  handleSetLocale: (locale: Locale) => void;
  setLocaleDate: (dateString: string) => string;
  translateData: (key: string) => string;
}

export const IntlContext = createContext<IntlContextType | undefined>(
  undefined
);

const loadLocaleData = async (locale: unknown) => {
  switch (locale) {
    case "hy":
      const [
        dateHy,
        locationHy,
        jobCategoriesHy,
        jobHy,
        commonHy,
        employersHy,
      ] = await Promise.all([
        import("@/locales/hy/date-hy.json"),
        import("@/locales/hy/location-hy.json"),
        import("@/locales/hy/job-categories-hy.json"),
        import("@/locales/hy/job-hy.json"),
        import("@/locales/hy/common-hy.json"),
        import("@/locales/hy/employers-hy.json"),
      ]);
      return {
        ...dateHy.default,
        ...locationHy.default,
        ...jobCategoriesHy.default,
        ...jobHy.default,
        ...commonHy.default,
        ...employersHy.default,
      };
    case "ru":
      const [
        dateRu,
        locationRu,
        jobCategoriesRu,
        jobRu,
        commonRu,
        employersRu,
      ] = await Promise.all([
        import("@/locales/ru/date-ru.json"),
        import("@/locales/ru/location-ru.json"),
        import("@/locales/ru/job-categories-ru.json"),
        import("@/locales/ru/job-ru.json"),
        import("@/locales/ru/common-ru.json"),
        import("@/locales/ru/employers-ru.json"),
      ]);
      return {
        ...dateRu.default,
        ...locationRu.default,
        ...jobCategoriesRu.default,
        ...jobRu.default,
        ...commonRu.default,
        ...employersRu.default,
      };
    case "en":
    default:
      const [
        dateEn,
        locationEn,
        jobCategoriesEn,
        jobEn,
        commonEn,
        employersEn,
      ] = await Promise.all([
        import("@/locales/en/date-en.json"),
        import("@/locales/en/location-en.json"),
        import("@/locales/en/job-categories-en.json"),
        import("@/locales/en/job-en.json"),
        import("@/locales/en/common-en.json"),
        import("@/locales/en/employers-en.json"),
      ]);
      return {
        ...dateEn.default,
        ...locationEn.default,
        ...jobCategoriesEn.default,
        ...jobEn.default,
        ...commonEn.default,
        ...employersEn.default,
      };
  }
};

export default function IntlProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(APP_LANGUAGES.en);
  const [messages, setMessages] = useState<Record<string, string>>({});

  const handleSetLocale = (lng: Locale) => setLocale(lng);

  const setLocaleDate = useCallback(
    (dateString: string): string => {
      const { day, month, year }: ParsedDateType = parseValidDate(dateString);

      return `${day} ${messages[`month-${month}`]} ${year}`;
    },
    [messages]
  );

  const translateData = (key: string) => messages[key];

  useEffect(() => {
    loadLocaleData(locale).then((msgs) => {
      setMessages(msgs);
    });
  }, [locale]);

  return (
    <IntlContext.Provider
      value={{
        locale,
        handleSetLocale,
        setLocaleDate,
        translateData,
      }}
    >
      {children}
    </IntlContext.Provider>
  );
}
