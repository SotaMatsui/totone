import Image from "next/image";
import storeImage from "@/assets/img/store.png";
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
      <section className="bg-[radial-gradient(circle_at_center,#EFECE6_0%,var(--color-cream)_70%)] px-6 pt-20 pb-16 text-center">
        <div className="mb-2 font-en text-[1.1rem] tracking-[2px] text-accent-green">
          LIFESTYLE WITH NATURE
        </div>
        <h1 className="mb-6 text-[2.2rem] font-bold text-forest-dark">暮らしに、自然という心地よさを。</h1>
        <p className="mx-auto max-w-[600px] text-ink-sub">
          都会の喧騒に疲れた毎日に、そっと寄り添う森のぬくもり。
          <br />
          木肌の手触り、鳥のさえずり、澄んだ風を届ける家電ブランド「totone（トトネ）」
        </p>
      </section>

      {/* About */}
      <section id="about" className="mx-auto my-16 max-w-[900px] px-6">
        <div className="rounded-[20px] bg-white p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <h3 className="mb-4 text-center text-[1.17em] font-bold text-forest-dark">
            「totone」に込めた3つの想い
          </h3>
          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
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
        <div className="rounded-[20px] bg-sand px-8 py-12">
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-[14px]">
            <Image
              src={storeImage}
              alt="体験型ショップ & カフェ「森のめぐみ」の店内"
              fill
              sizes="(max-width: 900px) 100vw, 836px"
              className="object-cover"
            />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-forest-dark">体験型ショップ & カフェ「森のめぐみ」</h2>
          <p className="mx-auto mb-6 max-w-[600px] text-ink-sub">
            totoneの世界観を五感で体験できるテーマパークのようなコンセプトストア。
            <br />
            店内では木のケトルで淹れたハーブティーをお楽しみいただけます。
          </p>
          <span className="rounded-[30px] bg-forest-mid px-[1.8rem] py-[0.6rem] text-[0.9rem] text-white">
            限定ノベルティ（木の鍋敷き・小鳥ぬいぐるみ）配布中
          </span>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-forest-dark px-6 py-12 text-center text-[0.9rem] text-cream">
        <p className="mb-2 font-en text-[1.2rem] font-bold opacity-80">totone</p>
        <p className="opacity-80">© 2024 totone All Rights Reserved. (Student Project)</p>
      </footer>
    </>
  );
}
