"use client";

import Header from "@/components/header";
import type { ProjectProps } from "@/types/projects";
import { useLanguage } from "@/contexts/language-context";

const projects: (ProjectProps & { tag: string })[] = [
    {
        tag: "project",
        name: "Bubbly Maps",
        description: "Locate water fountains near you anywhere. Open Code, Open Data.",
        href: "https://bubblymaps.org",
    },
    {
        tag: "project",
        name: "This website",
        description: "My portfolio and blogging website.",
        href: "https://linuskang.au",
    },
];

export default function Projects() {
    const { t, language } = useLanguage();
    
    return (
        <div className="flex items-start justify-center min-h-screen px-4">
            <article className="max-w-lg w-full">

                <Header />

                <h1 className="font-semibold text-xl">{t("projects.title")}</h1>
                <p className="text-sm text-neutral-400 mb-7 mt-2">
                    {t("projects.description")}
                </p>
                <div className="flex flex-col divide-y divide-neutral-800 mb-6">
                    {projects
                        .filter((p) => p.tag === "project")
                        .map((p, index) => {
                            const translationKey = index === 0 ? "bubblymaps" : "website";
                            return (
                                <Project 
                                    key={p.href} 
                                    name={t(`projects.items.${translationKey}.name`)}
                                    description={t(`projects.items.${translationKey}.description`)}
                                    href={p.href}
                                />
                            );
                        })}
                </div>

            </article>
        </div>
    );
}

function Project({ name, description, href }: ProjectProps) {
  return (
    <a
      href={href}
      className="group block px-4 mb-3 py-3 -mx-4 rounded-xl border border-neutral-800 transition-all duration-200 hover:bg-neutral-900 hover:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
      rel="noreferrer noopener"
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-neutral-100 group-hover:text-neutral-50">
          {name}
        </p>
        <p className="text-sm text-neutral-400 group-hover:text-neutral-200">
          {description}
        </p>
      </div>
    </a>
  );
}
