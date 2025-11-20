"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ];

    return (
        <div className="flex flex-col items-center mb-4">
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

            <nav className="flex gap-4">
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

          </div>
        </div>
    )
}