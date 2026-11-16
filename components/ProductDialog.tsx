"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { formatPrice, type Product } from "./data";

type Props = {
  product: Product | null;
  isStudent: boolean;
  onClose: () => void;
};

/**
 * 商品詳細ポップアップ。ネイティブの <dialog> を使い、
 * Esc キー・背景クリック・閉じるボタンで閉じられる。
 */
export function ProductDialog({ product, isStudent, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (product && !dialog.open) dialog.showModal();
    if (!product && dialog.open) dialog.close();
  }, [product]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="product-dialog-title"
      onClose={onClose}
      // 背景（dialog 要素そのもの）をクリックしたら閉じる
      onClick={(e) => {
        if (e.target === e.currentTarget) dialogRef.current?.close();
      }}
      className="m-auto max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-[1400px] overflow-y-auto rounded-[24px] sm:max-h-[calc(100dvh-3rem)] sm:w-[calc(100%-3rem)] md:overflow-hidden bg-white p-0 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop:bg-forest-dark/45 backdrop:backdrop-blur-sm open:animate-[dialog-in_0.25s_ease-out] open:backdrop:animate-[fade-in_0.25s_ease-out]"
    >
      {product && (
        <div className="relative grid md:h-[calc(100dvh-3rem)] md:max-h-[900px] md:grid-cols-[1.8fr_1fr]">
          {/* 閉じるボタン */}
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="閉じる"
            className="absolute top-3 right-3 z-10 flex size-10 items-center justify-center rounded-full bg-white/90 text-forest-dark shadow-md transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:outline-none"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* 大きな商品画像 */}
          <div className="relative aspect-square max-h-[65dvh] w-full overflow-hidden bg-placeholder md:aspect-auto md:h-full md:max-h-none">
            {product.image && (
              // 余白を埋める、同じ写真をぼかした背景
              <Image
                src={product.image}
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="scale-110 object-cover opacity-70 blur-2xl"
              />
            )}
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-contain"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center font-bold text-wood-brown">
                {product.name}
              </span>
            )}
          </div>

          {/* 商品情報 */}
          <div className="flex flex-col p-6 sm:p-8 md:overflow-y-auto md:p-12">
            <p className="mb-2 font-en text-sm tracking-[2px] text-accent-green md:mt-6">PRODUCT</p>
            <h2
              id="product-dialog-title"
              className="mb-5 text-[1.6rem] leading-snug font-bold text-forest-dark md:text-[2.2rem]"
            >
              {product.name}
            </h2>
            <p className="mb-8 grow text-[0.95rem] leading-[1.9] text-ink-sub md:text-[1.05rem] md:leading-[2]">
              {product.description}
            </p>

            {/* 通常価格と学割価格を並べて表示。トグルで選んでいる方を大きく見せる */}
            <dl className="divide-y divide-dashed divide-wood-light border-t border-dashed border-wood-light">
              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-sm font-bold text-forest-dark">通常価格</dt>
                <dd
                  className={`font-en font-bold text-forest-dark transition-all ${
                    isStudent ? "text-xl opacity-60" : "text-[2rem] md:text-[2.4rem]"
                  }`}
                >
                  {formatPrice(product.price, false)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="flex items-center gap-2 text-sm font-bold text-sale">
                  学割価格
                  <span className="rounded bg-sale px-2 py-0.5 text-xs text-white">20%OFF</span>
                </dt>
                <dd
                  className={`font-en font-bold text-sale transition-all ${
                    isStudent ? "text-[2rem] md:text-[2.4rem]" : "text-xl opacity-80"
                  }`}
                >
                  {formatPrice(product.price, true)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </dialog>
  );
}
