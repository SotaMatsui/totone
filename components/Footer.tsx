import Image from "next/image";
import footerWave from "@/assets/img/footer-wave.svg";
import logoType from "@/assets/img/logo-type.svg";
import { products } from "./data";

const menuLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#sets", label: "Set Plan" },
  { href: "#cafe", label: "Store & Cafe" },
];

const linkClass =
  "text-forest-dark/85 transition-colors duration-300 hover:text-forest-dark hover:underline underline-offset-4";

export function Footer() {
  return (
    <footer className="mt-24 sm:mt-32">
      {/* 波形の装飾（Figma「Minimal Wave Footer」より） */}
      <Image src={footerWave} alt="" aria-hidden className="block h-auto min-h-[88px] w-full" />

      <div className="-mt-px bg-sage text-forest-dark">
        <div className="mx-auto max-w-[1160px] px-6 pt-10 pb-8 sm:px-10 sm:pt-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.5fr_1fr_1fr]">
            {/* ブランド */}
            <div className="col-span-2 md:col-span-1">
              <Image src={logoType} alt="totone" className="h-6 w-auto sm:h-7" />
              <p className="mt-4 max-w-[310px] text-[0.9rem] leading-[1.9] text-forest-dark/80">
                暮らしに、自然という心地よさを。
                <br />
                木肌の手触り、鳥のさえずり、澄んだ風を届ける家電ブランド。
              </p>
            </div>

            {/* メニュー */}
            <nav aria-label="フッターメニュー">
              <h2 className="mb-4 font-en text-sm font-bold tracking-[2px] text-forest-mid">MENU</h2>
              <ul className="space-y-3 font-en text-[1.05rem]">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 商品 */}
            <div>
              <h2 className="mb-4 font-en text-sm font-bold tracking-[2px] text-forest-mid">PRODUCTS</h2>
              <ul className="space-y-3 text-[0.95rem] break-keep">
                {products.map((product) => (
                  <li key={product.name}>
                    <a href="#products" className={linkClass}>
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-forest-dark/15 pt-6 text-center font-en text-[0.8rem] text-forest-dark/75">
            © {new Date().getFullYear()} totone All Rights Reserved. (Student Project)
          </div>
        </div>
      </div>
    </footer>
  );
}
