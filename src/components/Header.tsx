import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type HeaderProps = {
  mode?: 'auto' | 'light';
};

export default function Header({ mode = 'auto' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [onHero, setOnHero] = useState(mode === 'auto'); // 初期はautoならtrue寄りでOK
  const navigate = useNavigate();
  const location = useLocation();

  // hero監視（ヘッダー色の自動反転）
  useEffect(() => {
    if (mode !== 'auto') {
      setOnHero(false);
      return;
    }

    const hero = document.getElementById('hero');
    if (!hero) {
      setOnHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnHero(entry.isIntersecting);
      },
      { rootMargin: '-80px 0px 0px 0px', threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [mode, location.pathname]);

  // 開閉制御（scrollで閉じる / Escで閉じる）
  useEffect(() => {
    const onScroll = () => setIsOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const headerClass = useMemo(() => {
    const base = 'fixed inset-x-0 top-0 z-[80] transition-colors duration-200';
    if (mode === 'light') return `${base} bg-white text-gray-900 shadow`;
    return onHero
      ? `${base} bg-transparent text-white`
      : `${base} bg-white text-gray-900 shadow`;
  }, [mode, onHero]);

  // SPAでセクションへ移動（/#service など）
  const goSection = (hash: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + hash);
      return;
    }
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // hash付き遷移してきた時、Home側で拾ってスクロールさせる（Home.tsxで対応）
  // Header側はここでは何もしない

  return (
    <header className={headerClass}>
      <div className="mx-auto w-full px-5 py-3 md:px-[50px] md:py-[20px]">
        <div className="flex items-start md:items-center justify-between">
          {/* ロゴ */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              navigate('/');
            }}
            className="select-none leading-tight text-left"
          >
            <div className="font-extrabold text-[16px] md:text-[18px]">
              衛星モバイル伝送出張サービス
            </div>
            <div className="font-extrabold text-[12px] md:text-[14px] opacity-90">
              by スカイネットワーク株式会社
            </div>
          </button>

          {/* ハンバーガー */}
          <button
            type="button"
            className={`md:hidden relative h-10 w-10 grid place-items-center -mt-1 mr-1 ${
              mode === 'light'
                ? 'text-gray-900'
                : onHero
                ? 'text-white'
                : 'text-gray-900'
            }`}
            aria-label="メニュー"
            aria-expanded={isOpen}
            aria-controls="main-nav"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="sr-only">メニュー</span>

            {/* bar top */}
            <span
              className={[
                'absolute h-0.5 w-6 bg-current transition-all duration-300',
                isOpen
                  ? 'translate-y-0 rotate-45'
                  : '-translate-y-[7px] rotate-0',
              ].join(' ')}
            />
            {/* bar middle */}
            <span
              className={[
                'absolute h-0.5 w-6 bg-current transition-all duration-300',
                isOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            {/* bar bottom */}
            <span
              className={[
                'absolute h-0.5 w-6 bg-current transition-all duration-300',
                isOpen
                  ? 'translate-y-0 -rotate-45'
                  : 'translate-y-[7px] rotate-0',
              ].join(' ')}
            />
          </button>
        </div>
      </div>

      <nav
        aria-label="メインナビ"
        className="md:absolute md:top-[40px] md:right-[50px] md:mx-0"
      >
        <ul
          id="main-nav"
          className={[
            'fixed inset-x-3 top-[68px] md:static transition-all duration-300',
            isOpen
              ? 'pointer-events-auto opacity-100 translate-y-0'
              : 'pointer-events-none opacity-0 -translate-y-2',
            'md:pointer-events-auto md:opacity-100 md:translate-y-0',
            'bg-white text-gray-900 md:bg-transparent rounded-xl border border-black/10 shadow md:rounded-none md:border-0 md:shadow-none',
            'grid gap-1 p-2 md:p-0 md:flex md:items-center md:gap-[50px]',
            mode === 'light'
              ? 'md:text-gray-900'
              : onHero
              ? 'md:text-white'
              : 'md:text-gray-900',
          ].join(' ')}
        >
          <li>
            <button
              type="button"
              onClick={() => goSection('#service')}
              className="block w-full text-left px-3 py-2 md:px-0 md:py-0 text-[16px] md:text-[18px] font-bold hover:opacity-80"
            >
              サービス概要
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => goSection('#rental')}
              className="block w-full text-left px-3 py-2 md:px-0 md:py-0 text-[16px] md:text-[18px] font-bold hover:opacity-80"
            >
              レンタル機器構成
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => goSection('#pricing')}
              className="block w-full text-left px-3 py-2 md:px-0 md:py-0 text-[16px] md:text-[18px] font-bold hover:opacity-80"
            >
              料金
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => goSection('#contact')}
              className="block w-full text-left px-3 py-2 md:px-0 md:py-0 text-[16px] md:text-[18px] font-bold hover:opacity-80"
            >
              お問い合わせ
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
