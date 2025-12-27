"use client";

import type { ReactNode } from "react";
import Header from "@/components/header";
import MailingListJoin from "@/components/mailing-list-join";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex items-start justify-center min-h-screen px-4">
      <article className="max-w-lg w-full">

        <Header />

        <h1 className="text-xl font-semibold mt-4">{t("home.title")}</h1>

        <p className="text-sm text-neutral-400 mb-0">
          <br />

          {t("home.intro")} {" "} <a
            href="/blog"
            className="text-sm font-medium text-neutral-200 hover:text-neutral-300 transition-colors duration-200"
          >
            {t("home.blog")}
          </a> {t("home.and")}

          <br />
          <br />

          {t("home.resume")} <a
            href="https://lkang.au/cv"
            className="text-sm font-medium text-neutral-200 hover:text-neutral-300 transition-colors duration-200"
          >
            {t("home.here")}
          </a>.
        </p>

        <h2 className="text-lg font-semibold mb-3 mt-4 text-neutral-100">
          {t("home.newsletter.title")}
        </h2>
        <p className="text-sm text-neutral-400 mb-4">
          {t("home.newsletter.description")}
        </p>
        <MailingListJoin />

        <p className="text-sm text-neutral-400 mt-5">
          {t("home.creator")}{" "}
          <a
            href="https://bubblymaps.org"
            className="text-sm font-medium text-neutral-200 hover:text-neutral-300 transition-colors duration-200"
          >
            Bubbly Maps
          </a>.
        </p>

        <div className="flex gap-3 border-t mt-4 pt-4 border-sidebar-border">
          <Badge href="https://github.com/linuskang">
            <svg role="img" viewBox="0 0 24 24" className="size-4">
              <title>GitHub</title>
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            {t("home.badges.github")}
          </Badge>

          <Badge href="https://lkang.au/discord">
            <svg role="img" viewBox="0 0 24 24" className="size-4">
              <title>Discord</title>
              <path
                fill="currentColor"
                d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
              />
            </svg>
            {t("home.badges.discord")}
          </Badge>

          <Badge href="mailto:contact@lkang.au">
            <svg role="img" viewBox="0 0 24 24" className="size-4">
              <title>Email</title>
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            {t("home.badges.email")}
          </Badge>

        </div>
      </article>
    </div>
  );
}

function Badge({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200"
    >
      {children}
    </a>
  );
}