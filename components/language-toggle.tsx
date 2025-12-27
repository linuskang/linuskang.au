"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="text-xs font-medium bg-neutral-900 border-neutral-700/50 text-neutral-200 hover:bg-neutral-800 hover:text-neutral-100"
    >
      {language === "en" ? "中文" : "EN"}
    </Button>
  );
}
