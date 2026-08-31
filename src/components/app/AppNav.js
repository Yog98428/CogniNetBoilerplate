"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IdentityPanel } from "@/components/app/IdentityPanel";

const LINKS = [
  { href: "/feed", label: "Feed" },
  { href: "/compose", label: "Compose" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/profile", label: "Profile" },
];

export function AppNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-display text-xl tracking-tight text-ink">
            CogniNet
          </Link>
          <nav className="hidden items-center gap-1 sm:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition ${
                    active ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <IdentityPanel compact />
      </div>
      <nav className="flex gap-1 overflow-x-auto px-5 pb-3 sm:hidden">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm ${
                active ? "bg-ink text-paper" : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
