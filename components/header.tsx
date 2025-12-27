"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import LanguageToggle from "@/components/language-toggle";

export default function Header() {
    const pathname = usePathname();
    const { t } = useLanguage();

    const navItems = [
      { href: "/blog", label: t("nav.blog") },
      { href: "/playground", label: t("nav.playground") },
      { href: "/projects", label: t("nav.projects") },
      { href: "/contact", label: t("nav.contact") },
    ];

    return (
        <div className="flex flex-col items-center mb-4 gap-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">

              <a href="/" className="cursor-pointer">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/linuskang.png"
                    alt="Linus Kang"
                  />
                </Avatar>
              </a>

            </div>

            <div className="flex items-center gap-3">
              <nav className="hidden sm:flex gap-3 md:gap-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium transition-transform transform hover:scale-105 ${
                        isActive
                          ? "text-neutral-100"
                          : "text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <LanguageToggle />
            </div>

          </div>
          
          {/* Mobile navigation */}
          <nav className="flex sm:hidden gap-3 w-full justify-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-medium transition-transform transform hover:scale-105 ${
                    isActive
                      ? "text-neutral-100"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
    )
}