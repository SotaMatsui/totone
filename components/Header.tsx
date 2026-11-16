"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/img/logo.png";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#sets", label: "Set Plan" },
  { href: "#cafe", label: "Store & Cafe" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 border-b border-wood-light bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <a
          href="#"
          className="flex items-center gap-2 font-en text-[1.5rem] font-bold tracking-[1px] text-forest-dark md:text-[1.8rem]"
        >
          <Image
            src={logo}
            alt=""
            width={40}
            height={40}
            className="size-8 rounded-full mix-blend-multiply md:size-10"
          />
          totone
        </a>

        {/* PC: 横並びナビ */}
        <nav className="hidden md:block">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="ml-[1.8rem] font-medium text-forest-dark transition-colors duration-300 hover:text-accent-green"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* スマホ: ハンバーガーボタン */}
        <button
          type="button"
          className="-mr-2 flex size-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 rounded bg-forest-dark transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-forest-dark transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-forest-dark transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* スマホ: ドロップダウンメニュー */}
      <nav
        id="mobile-nav"
        hidden={!open}
        className="border-t border-wood-light px-5 pb-3 md:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block border-b border-wood-light py-3 font-medium text-forest-dark last:border-b-0"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
