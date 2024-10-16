import { Button } from "./ui/button";

const LanguageToggle = ({
  switchLanguage,
  locale,
}: {
  switchLanguage: (lang: Lang) => void;
  locale: Lang;
}) => {
  return (
    <Button
      variant="outline"
      onClick={() =>
        locale == "fr" ? switchLanguage("en") : switchLanguage("fr")
      }
    >
      {locale}
    </Button>
  );
};

export default LanguageToggle;
