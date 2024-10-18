import React, { useState, createContext } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../locales/en.json";
import frMessages from "../locales/fr.json";

const messages = {
  en: enMessages,
  fr: frMessages,
};

export const LanguageContext = createContext<{
  locale: Lang;
  switchLanguage: (lang: Lang) => void;
} | null>(null);

const IntlProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Lang>("en");

  const switchLanguage = (lang: Lang) => {
    setLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale as Lang]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default IntlProviderWrapper;
