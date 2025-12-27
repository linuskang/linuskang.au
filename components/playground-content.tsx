"use client";

import { useLanguage } from "@/contexts/language-context";
import PlaygroundCard from "@/components/playground-card";

const experiments = [
  {
    title: "Color Generator",
    description: "Generate and copy color hex codes quickly.",
    href: "/playground/color-generator",
    translationKey: "colorGenerator",
  },
  {
    title: "Physics Simulator",
    description: "A simple physics simulation using Matter.js.",
    href: "/playground/physics-sim",
    translationKey: "physicsSim",
  }
];

export default function PlaygroundContent() {
  const { t } = useLanguage();

  return (
    <>
      <header className="mt-4 mb-6">
        <h1 className="text-xl font-semibold">{t("playground.title")}</h1>
        <p className="text-sm text-neutral-400 mt-2">{t("playground.description")}</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {experiments.map((exp) => (
          <PlaygroundCard 
            key={exp.href} 
            title={t(`playground.items.${exp.translationKey}.name`)}
            description={t(`playground.items.${exp.translationKey}.description`)}
            href={exp.href} 
          />
        ))}
      </div>
    </>
  );
}
