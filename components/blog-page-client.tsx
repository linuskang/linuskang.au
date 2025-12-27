"use client";

import { useLanguage } from "@/contexts/language-context";
import { ReactNode } from "react";

interface BlogPageClientProps {
  children: ReactNode;
}

export default function BlogPageClient({ children }: BlogPageClientProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-6">
      <h1 className="text-xl font-semibold mt-4 mb-2">{t("blog.title")}</h1>
      <p className="text-sm text-neutral-400">
        {t("blog.description")}
      </p>
      {children}
    </div>
  );
}
