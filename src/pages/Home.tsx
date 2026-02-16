import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  // /#section で来た時にスクロール
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash]);

  return (
    <div className="text-gray-900 antialiased bg-white">
      <Header mode="auto" />

      {/* ヒーロー */}
      <section
        id="hero"
        className="clip-hero relative z-10 overflow-hidden bg-[#4A7CD8] text-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 pt-24 pb-16 md:pt-28 md:pb-20">
          <h1 className="font-bold text-[28px] md:text-[48px] leading-snug drop-shadow">
            （ここにタイトル）
          </h1>

          <p className="mt-6 text-[14px] md:text-[18px] leading-relaxed text-white/90 max-w-[720px]">
            （ここに導入文：2〜4行）
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/request"
              className="inline-flex h-12 items-center justify-center rounded-md bg-red-600 px-8 font-semibold text-white shadow hover:bg-red-700"
            >
              相談する
            </Link>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white/10 px-8 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              お問い合わせへ
            </a>
          </div>
        </div>
      </section>

      {/* 内容（各LPで増やす） */}
      <section id="content" className="bg-white text-gray-900">
        <div className="mx-auto max-w-[1280px] px-6 py-14 md:py-20">
          <h2 className="text-[20px] md:text-[28px] font-bold text-[#333]">
            （ここに見出し）
          </h2>
          <p className="mt-4 text-[14px] md:text-[16px] leading-relaxed text-[#444] max-w-[860px]">
            （ここに本文。まずは短くでOK）
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="clip-cta bg-[#4A7CD8] text-white flex flex-col items-center justify-center py-16 md:py-24 px-6"
      >
        <h2 className="text-[22px] md:text-[34px] font-bold mb-6 text-center">
          （ここにCTA見出し）
        </h2>

        <Link
          to="/request"
          className="inline-flex h-12 md:h-14 items-center justify-center rounded-md bg-red-600 px-8 md:px-12 font-semibold text-white shadow hover:bg-red-700"
        >
          相談する
        </Link>

        <p className="mt-4 text-[12px] md:text-[14px] text-white/80 text-center">
          ※フォーム送信後、担当よりご連絡いたします。
        </p>
      </section>

      <Footer />
    </div>
  );
}
