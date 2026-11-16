import Image from "next/image";
import storeImage from "@/assets/img/store.png";
import logoAndIcon from "@/assets/img/logo_and_icon.svg";
import logoType from "@/assets/img/logo-type.svg";
import { Header } from "@/components/Header";
import { PricingSections } from "@/components/PricingSections";

const meanings = [
  {
    title: "1. 整う（totonou）",
    body: "空間になじむアースカラーと質感で、乱れた心と日々のリズムを整えます。",
  },
  {
    title: "2. tone（調和）",
    body: "人と道具、そして自然の気配を、ひとつの旋律のように調和させます。",
  },
  {
    title: "3. 根（ne）",
    body: "大地にしっかりと根差した樹木のような、変わらない安心感で支えます。",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ヒーロー */}
      <section className="bg-[radial-gradient(circle_at_center,#EFECE6_0%,var(--color-cream)_70%)] px-6 pt-14 pb-12 text-center sm:pt-20 sm:pb-16">
        <Image
          src={logoAndIcon}
          alt="totone"
          className="mx-auto mb-6 h-auto w-36 sm:mb-8 sm:w-44"
          priority
        />
        <div className="mb-2 font-en text-[0.95rem] tracking-[2px] text-accent-green sm:text-[1.1rem]">
          LIFESTYLE WITH NATURE
        </div>
        <h1 className="mb-6 text-[clamp(1.5rem,7vw,2.2rem)] leading-[1.5] font-bold text-forest-dark">
          <span className="inline-block">暮らしに、</span>
          <span className="inline-block">自然という心地よさを。</span>
        </h1>
        <p className="mx-auto max-w-[600px] text-ink-sub">
          都会の喧騒に疲れた毎日に、そっと寄り添う森のぬくもり。
          <br />
          木肌の手触り、鳥のさえずり、澄んだ風を届ける家電ブランド<span className="inline-block">「totone（トトネ）」</span>
        </p>
      </section>

      {/* About */}
      <section id="about" className="mx-auto my-16 max-w-[900px] px-6">
        <div className="rounded-[20px] bg-white px-6 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] sm:p-12">
          <h3 className="mb-4 text-center text-[1.17em] font-bold text-forest-dark">
            <span className="inline-block">「totone」に込めた</span>
            <span className="inline-block">3つの想い</span>
          </h3>
          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-8">
            {meanings.map((m) => (
              <div key={m.title} className="border-t-[3px] border-forest-mid pt-4">
                <h4 className="mb-2 font-bold text-forest-dark">{m.title}</h4>
                <p className="text-[0.9rem] text-ink-sub">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSections />

      {/* カフェ & ストア案内 */}
      <section id="cafe" className="mx-auto my-20 max-w-[900px] px-6 text-center">
        <div className="rounded-[20px] bg-sand px-5 py-8 sm:px-8 sm:py-12">
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-[14px]">
            <Image
              src={storeImage}
              alt="体験型ショップ & カフェ「森のめぐみ」の店内"
              fill
              sizes="(max-width: 900px) 100vw, 836px"
              className="object-cover"
            />
          </div>
          <h2 className="mb-4 text-xl leading-normal font-bold text-forest-dark sm:text-2xl">
            <span className="inline-block">体験型ショップ & カフェ</span>
            <span className="inline-block">「森のめぐみ」</span>
          </h2>
          <p className="mx-auto mb-6 max-w-[600px] text-ink-sub">
            totoneの世界観を五感で体験できるテーマパークのようなコンセプトストア。
            <br />
            店内では木のケトルで淹れたハーブティーをお楽しみいただけます。
          </p>
          <span className="inline-block rounded-[30px] bg-forest-mid px-5 py-[0.6rem] text-[0.85rem] leading-relaxed text-white sm:px-[1.8rem] sm:text-[0.9rem]">
            <span className="inline-block">限定ノベルティ</span>
            <span className="inline-block">（木の鍋敷き・小鳥ぬいぐるみ）</span>
            <span className="inline-block">配布中</span>
          </span>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-forest-dark px-6 py-12 text-center text-[0.9rem] text-cream">
        <Image
          src={logoType}
          alt="totone"
          className="mx-auto mb-3 h-5 w-auto opacity-80 brightness-0 invert"
        />
        <p className="opacity-80">© 2024 totone All Rights Reserved. (Student Project)</p>
      </footer>
    </>
  );
}
