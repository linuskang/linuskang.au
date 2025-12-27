"use client";

import { useLanguage } from "@/contexts/language-context";
import { Switch } from "@/components/ui/switch";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = (checked: boolean) => {
    setLanguage(checked ? "zh" : "en");
  };

  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className={`text-xs font-medium transition-colors ${language === "en" ? "text-neutral-200" : "text-neutral-500"}`}>
        EN
      </span>
      <Switch
        checked={language === "zh"}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-neutral-700"
      />
      <span className={`text-xs font-medium transition-colors ${language === "zh" ? "text-neutral-200" : "text-neutral-500"}`}>
        中文
      </span>
    </div>
  );
}
