"use client";

import Image from "next/image";
import { useState } from "react";
import { formatPrice, products, setPlans } from "./data";

export function PricingSections() {
  const [isStudent, setIsStudent] = useState(false);

  return (
    <>
      {/* プロダクト */}
      <section id="products" className="mx-auto my-20 max-w-[1100px] px-6">
        <h2 className="mb-2 text-center text-[2rem] font-bold text-forest-dark">Products</h2>
        <p className="mb-10 text-center text-ink-sub">自然のかけらを閉じ込めた、新しい家電のカタチ</p>

        {/* 学割切り替えスイッチ */}
        <div className="mx-auto mb-12 flex w-fit items-center justify-center gap-4 rounded-full bg-wood-light px-6 py-2.5">
          <span className="text-[0.9rem] font-bold text-forest-dark">通常価格</span>
          <label className="relative inline-block h-[26px] w-[50px] cursor-pointer">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
              aria-label="学割20%OFFを適用"
            />
            <span className="absolute inset-0 rounded-full bg-[#ccc] transition duration-400 peer-checked:bg-forest-mid peer-focus-visible:ring-2 peer-focus-visible:ring-accent-green" />
            <span className="absolute bottom-1 left-1 size-[18px] rounded-full bg-white transition duration-400 peer-checked:translate-x-6" />
          </label>
          <span className="text-[0.9rem] font-bold text-sale">学割20%OFFを適用！</span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-[5px]"
            >
              <div className="relative flex h-60 w-full items-center justify-center overflow-hidden bg-placeholder">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                    style={{ objectPosition: product.imagePosition }}
                  />
                ) : (
                  <span className="font-bold text-wood-brown">{product.name}</span>
                )}
              </div>
              <div className="flex grow flex-col p-[1.8rem]">
                <h3 className="mb-2 text-[1.25rem] font-bold text-forest-dark">{product.name}</h3>
                <p className="mb-6 grow text-[0.9rem] text-ink-sub">{product.description}</p>
                <div className="flex items-baseline justify-between border-t border-dashed border-wood-light pt-4">
                  {isStudent && (
                    <span className="rounded bg-sale px-2 py-0.5 text-xs font-bold text-white">学割20%OFF</span>
                  )}
                  <span
                    className={`font-en text-[1.4rem] font-bold ${isStudent ? "text-sale" : "text-forest-dark"}`}
                  >
                    {formatPrice(product.price, isStudent)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* セット割 */}
      <section id="sets" className="bg-beige px-6 py-20">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="mb-2 text-center text-[2rem] font-bold text-forest-dark">Set Plan</h2>
          <p className="mb-10 text-center text-ink-sub">新生活を丸ごと整える、おトクなセットプラン</p>

          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {setPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border-2 border-transparent bg-white p-8 transition-colors duration-300 hover:border-forest-mid"
              >
                <h4 className="mb-2 text-[1.2rem] font-bold text-forest-dark">{plan.name}</h4>
                <p className="mb-4 text-[0.85rem] text-ink-sub">{plan.items}</p>
                <p
                  className={`font-en text-[1.3rem] font-bold ${isStudent ? "text-sale" : "text-forest-mid"}`}
                >
                  {formatPrice(plan.price, isStudent)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
