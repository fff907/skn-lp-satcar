import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

const problems = [
  '車載局を作りたいが、車両に加工を施したくない',
  
  '艤装費が高額になり、導入のハードルが高い',
  '専用車両を購入しないと実現できないのでは…',
  '必要な時だけ使いたいのに、常設だと運用が重くなる',
];

const strengths = [
  {
    icon: '🛠',
    title: '車両加工・穴あけ不要',
    desc: '窓から入線する運用で、車両に穴あけや開口を施さず活用できます。',
  },
  {
    icon: '◎',
    title: '市販部材中心で低コスト',
    desc: '市販のキャリア・ラック等を活用し、高額な専用艤装の負担を抑えます。',
  },
  {
    icon: '📡',
    title: 'アンテナ着脱可能',
    desc: '必要な時だけ設置・運用し、普段は通常車両として利用できます。',
  },
];

const equipment = [
  '衛星自動捕捉アンテナ',
  'アンテナ用コントローラー',
  '衛星モデム',
  'IP電話機',
  'ポータブルバッテリー',
  '予備バッテリー',
  '屋外用無線LANアクセスポイント',
];

const scenes = [
  '災害・BCP対策',
  'イベント・広報',
  '工事・建設現場',
  '港湾・山間部',
  '移動拠点・連絡拠点',
];

const navItems = [
  { label: 'お悩み', key: 'problem' },
  { label: '特長', key: 'strengths' },
  { label: '構成品', key: 'equipment' },
  { label: '活用シーン', key: 'scenes' },
  { label: '関連サービス', key: 'related-service' },
  { label: 'お問い合わせ', key: 'contact' },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (key: string) => {
    setIsMenuOpen(false);

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(`[data-section="${key}"]`)
    );

    const visibleTarget =
      targets.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      }) ?? targets[0];

    if (!visibleTarget) return;

    visibleTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =========================
          PC LAYOUT
      ========================== */}
      <section className="hidden min-h-screen lg:grid lg:grid-cols-[58%_42%]">
        {/* LEFT HERO */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <img
            src="/img/satcar-hero-main.png"
            alt="簡易衛星通信車"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 via-slate-950/10 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-between px-10 py-8 text-white xl:px-12">
            <div>
              <p className="text-lg font-bold leading-tight">
                スカイネットワーク株式会社
              </p>
              <p className="mt-1 text-sm font-bold text-white/90">
                通信ソリューション
              </p>
              <div className="mt-4 h-0.5 w-14 bg-white" />
            </div>

            <div className="max-w-[560px]">
              <p className="mb-5 text-xl font-extrabold tracking-[0.16em] text-white">
                <span className="mr-4 text-yellow-300">//</span>
                簡易衛星通信車
                <span className="ml-4 text-yellow-300">//</span>
              </p>

              <h1 className="text-[3rem] font-extrabold leading-[1.18] tracking-tight drop-shadow-lg xl:text-[3.8rem] 2xl:text-[4rem]">
                普段使いの車が、
                <br />
                非常時の通信拠点に。
              </h1>

              <p className="mt-6 text-xl font-bold leading-relaxed drop-shadow xl:text-2xl">
                車両加工
                <span className="mx-1 text-3xl text-yellow-300">0</span>
                で、必要な時だけつながる。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5 border-t border-white/25 pt-6">
              {strengths.map((item) => (
                <div key={item.title}>
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <p className="text-base font-bold xl:text-lg">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-white/85 xl:text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT MOBILE-FIRST COLUMN */}
        <div className="min-h-screen bg-white px-8 py-6 xl:px-12">
          <div className="mx-auto w-full max-w-[430px]">
            <div className="min-h-[calc(100vh-48px)] rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
              <div className="relative flex items-start justify-between px-6 pb-5 pt-6">
                <div>
                  <p className="text-base font-extrabold text-slate-900">
                    スカイネットワーク株式会社
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-slate-500">
                    通信ソリューション
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="メニュー"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
                >
                  <span
                    className={[
                      'relative block h-0.5 w-6 bg-[#0b2b66] transition',
                      isMenuOpen
                        ? 'rotate-45 before:top-0 before:rotate-90 after:opacity-0'
                        : 'before:-top-2 after:top-2',
                      'before:absolute before:left-0 before:h-0.5 before:w-6 before:bg-[#0b2b66] before:transition',
                      'after:absolute after:left-0 after:h-0.5 after:w-6 after:bg-[#0b2b66] after:transition',
                    ].join(' ')}
                  />
                </button>

                {isMenuOpen && (
                  <nav className="absolute left-4 right-4 top-[76px] z-20 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                    <ul className="grid gap-1">
                      {navItems.map((item) => (
                        <li key={item.key}>
                          <button
                            type="button"
                            onClick={() => scrollToSection(item.key)}
                            className="block w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-slate-700 hover:bg-slate-50"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>

              <div className="border-y border-slate-100 px-6 py-7 text-center">
                <p className="text-xs font-extrabold tracking-[0.25em] text-[#0b2b66]">
                  //　簡易衛星通信車　//
                </p>

                <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight text-[#0b2b66]">
                  普段使いの車が、
                  <br />
                  非常時の通信拠点に。
                </h2>

                <p className="mt-3 text-sm font-bold text-slate-700">
                  車両加工
                  <span className="mx-1 text-xl text-yellow-400">0</span>
                  で、必要な時だけつながる。
                </p>

                <Link
                  to="/request"
                  className="mt-5 flex w-full items-center justify-center rounded-full bg-[#0b2b66] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/15 transition hover:bg-[#123b82]"
                >
                  ✉　簡易衛星通信車の相談をする
                  <span className="ml-3">›</span>
                </Link>
              </div>

              <div className="space-y-8 px-6 py-7">
                <section data-section="problem">
                  <SectionTitle number="1." title="こんなお悩みはありませんか？" />

                  <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3">
                    {problems.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 border-b border-dashed border-slate-200 py-3 last:border-b-0"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#0b2b66] text-xs font-bold text-[#0b2b66]">
                          ✓
                        </span>
                        <p className="text-sm font-medium leading-6 text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section data-section="strengths">
                  <SectionTitle number="2." title="簡易衛星通信車の特長" />

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {strengths.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center"
                      >
                        <div className="text-3xl">{item.icon}</div>
                        <p className="mt-3 text-[13px] font-extrabold leading-5 text-[#0b2b66]">
                          {item.title}
                        </p>
                        <p className="mt-2 text-[11px] font-medium leading-5 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section data-section="equipment">
                  <SectionTitle number="3." title="構成品" />

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {equipment.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center text-[12px] font-bold leading-5 text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    ※構成は一例です。ご要望に応じて最適な構成をご提案します。
                  </p>
                </section>

                <section data-section="scenes">
                  <SectionTitle number="4." title="活用シーン" />

                  <div className="mt-4 flex flex-wrap gap-2">
                    {scenes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section data-section="related-service">
                  <SectionTitle number="5." title="関連サービス" />

                  <div className="mt-4 grid gap-3">
                    <a
                      href="https://antenna-car-lp.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-200 px-4 py-3 text-center text-xs font-bold text-slate-700 transition hover:border-[#0b2b66] hover:text-[#0b2b66]"
                    >
                      衛星モバイル伝送出張サービス
                    </a>

                    <Link
                      to="/request"
                      className="rounded-full border border-slate-200 px-4 py-3 text-center text-xs font-bold text-slate-700 transition hover:border-[#0b2b66] hover:text-[#0b2b66]"
                    >
                      導入相談・お問い合わせ
                    </Link>
                  </div>
                </section>

                <section
                  data-section="contact"
                  className="rounded-[1.75rem] bg-slate-950 px-5 py-6 text-white"
                >
                  <SectionTitle number="6." title="お問い合わせ" dark />

                  <p className="mt-4 text-sm font-medium leading-7 text-white/80">
                    製品に関するご相談・お見積りなど、お気軽にお問い合わせください。
                  </p>

                  <Link
                    to="/request"
                    className="mt-5 flex w-full items-center justify-center rounded-full bg-yellow-400 px-5 py-4 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
                  >
                    ✉　簡易衛星通信車の相談をする
                    <span className="ml-3">›</span>
                  </Link>

                  <p className="mt-4 text-center text-sm font-bold text-white/80">
                    ☎ 043-259-6921
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SP LAYOUT
      ========================== */}
      <section className="lg:hidden">
        <div className="relative min-h-[92vh] overflow-hidden bg-slate-950 text-white">
          <img
            src="/img/satcar-hero-sp.png"
            alt="簡易衛星通信車"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: '68% center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

          <div className="relative z-10 flex min-h-[92vh] flex-col justify-between px-5 pb-8 pt-6">
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-base font-extrabold">
                  スカイネットワーク株式会社
                </p>
                <p className="mt-1 text-xs font-bold text-white/85">
                  通信ソリューション
                </p>
                <div className="mt-4 h-0.5 w-12 bg-white" />
              </div>

              <button
                type="button"
                aria-label="メニュー"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="flex h-11 w-11 items-center justify-center"
              >
                <span
                  className={[
                    'relative block h-0.5 w-7 bg-white transition',
                    isMenuOpen
                      ? 'rotate-45 before:top-0 before:rotate-90 after:opacity-0'
                      : 'before:-top-2 after:top-2',
                    'before:absolute before:left-0 before:h-0.5 before:w-7 before:bg-white before:transition',
                    'after:absolute after:left-0 after:h-0.5 after:w-7 after:bg-white after:transition',
                  ].join(' ')}
                />
              </button>

              {isMenuOpen && (
                <nav className="absolute left-0 right-0 top-[64px] z-30 rounded-2xl border border-white/20 bg-slate-950/95 p-3 shadow-xl backdrop-blur">
                  <ul className="grid gap-1">
                    {navItems.map((item) => (
                      <li key={item.key}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(item.key)}
                          className="block w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-white hover:bg-white/10"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            <div className="pb-8">
              <p className="mb-4 text-lg font-extrabold tracking-[0.14em]">
                <span className="mr-2 text-yellow-300">//</span>
                簡易衛星通信車
                <span className="ml-2 text-yellow-300">//</span>
              </p>

              <h1 className="text-[2.05rem] font-extrabold leading-[1.15] tracking-tight drop-shadow-lg min-[390px]:text-[2.55rem]">
                普段使いの車が、
                <br />
                非常時の
                <br />
                通信拠点に。
              </h1>

              <p className="mt-5 text-lg font-bold leading-relaxed">
                車両加工
                <span className="mx-1 text-3xl text-yellow-300">0</span>
                で、
                <br />
                必要な時だけつながる。
              </p>

              <Link
                to="/request"
                className="mt-8 flex w-full items-center justify-center rounded-full bg-yellow-400 px-5 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-black/25"
              >
                ✉　簡易衛星通信車の相談をする
                <span className="ml-3">›</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 py-10">
          <div className="mx-auto max-w-md space-y-10">
            <MobileSection sectionKey="problem" number="1." title="こんなお悩みはありませんか？">
              <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3">
                {problems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 border-b border-dashed border-slate-200 py-3 last:border-b-0"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#0b2b66] text-xs font-bold text-[#0b2b66]">
                      ✓
                    </span>
                    <p className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </MobileSection>

            <MobileSection sectionKey="strengths" number="2." title="簡易衛星通信車の特長">
              <div className="mt-5 grid gap-4">
                {strengths.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <p className="mt-3 text-lg font-extrabold text-[#0b2b66]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-7 text-slate-700">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </MobileSection>

            <MobileSection sectionKey="equipment" number="3." title="構成品">
              <div className="mt-5 grid grid-cols-2 gap-3">
                {equipment.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 px-4 py-4 text-sm font-bold leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </MobileSection>

            <MobileSection sectionKey="scenes" number="4." title="活用シーン">
              <div className="mt-5 flex flex-wrap gap-3">
                {scenes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </MobileSection>

            <MobileSection sectionKey="related-service" number="5." title="関連サービス">
              <div className="mt-5 grid gap-3">
                <a
                  href="https://antenna-car-lp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 px-4 py-4 text-sm font-bold text-slate-700"
                >
                  衛星モバイル伝送出張サービス
                </a>

                <Link
                  to="/request"
                  className="rounded-2xl border border-slate-200 px-4 py-4 text-sm font-bold text-slate-700"
                >
                  導入相談・お問い合わせ
                </Link>
              </div>
            </MobileSection>

            <section
              data-section="contact"
              className="rounded-[1.75rem] bg-slate-950 px-5 py-6 text-white"
            >
              <p className="text-sm font-extrabold tracking-[0.18em] text-yellow-300">
                CONTACT
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight">
                まずは「使う場面」から、
                <br />
                運用を設計します
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-white/80">
                「うちの車両でもできる？」「どれくらいの構成が現実的？」
                といった段階でも大丈夫です。
              </p>

              <Link
                to="/request"
                className="mt-5 flex w-full items-center justify-center rounded-full bg-yellow-400 px-5 py-4 text-sm font-extrabold text-slate-950"
              >
                簡易衛星通信車の相談をする
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({
  number,
  title,
  dark = false,
}: {
  number: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={
          dark
            ? 'text-sm font-extrabold text-yellow-300'
            : 'text-sm font-extrabold text-[#0b2b66]'
        }
      >
        {number}
      </span>
      <h3
        className={
          dark
            ? 'text-base font-extrabold text-white'
            : 'text-base font-extrabold text-[#0b2b66]'
        }
      >
        {title}
      </h3>
    </div>
  );
}

function MobileSection({
  sectionKey,
  number,
  title,
  children,
}: {
  sectionKey: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section data-section={sectionKey}>
      <p className="text-sm font-extrabold tracking-[0.18em] text-[#0b2b66]">
        {number}
      </p>
      <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#0b2b66]">
        {title}
      </h2>
      {children}
    </section>
  );
}
