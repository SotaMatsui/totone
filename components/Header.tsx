import Image from "next/image";
import logo from "@/assets/img/logo.png";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#sets", label: "Set Plan" },
  { href: "#cafe", label: "Store & Cafe" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-100 border-b border-wood-light bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-4">
        <a
          href="#"
          className="flex items-center gap-2 font-en text-[1.8rem] font-bold tracking-[1px] text-forest-dark"
        >
          <Image
            src={logo}
            alt=""
            width={40}
            height={40}
            className="rounded-full mix-blend-multiply"
          />
          totone
        </a>
        <nav>
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
      </div>
    </header>
  );
}
