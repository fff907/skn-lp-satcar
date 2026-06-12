type FooterProps = {
  compact?: boolean;
};

export default function Footer({ compact = false }: FooterProps) {
  if (compact) {
    return (
      <footer className="bg-gray-900 px-5 py-7 text-xs text-white">
        <div className="space-y-5">
          <p className="text-base font-semibold leading-relaxed">
            スカイネットワーク株式会社
          </p>

          <div className="space-y-2 leading-relaxed">
            <p>所在地：千葉県千葉市花見川区犢橋町320-5（千葉支店）</p>
            <p>
              サイト：
              <a
                href="https://www.skynetwork.jp/"
                className="break-all underline hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.skynetwork.jp/
              </a>
            </p>
            <p>電話番号：043-259-6921</p>
          </div>

          <p className="border-t border-white/10 pt-4 text-center text-[11px]">
            © 2026 スカイネットワーク株式会社
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 px-6 py-10 text-xs text-white sm:text-sm md:text-base">
      <div className="mx-auto max-w-6xl space-y-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p className="text-center text-base font-semibold md:text-left md:text-lg">
            スカイネットワーク株式会社
          </p>

          <div className="mx-auto w-fit space-y-1 text-left leading-relaxed md:mx-0">
            <p>所在地：千葉県千葉市花見川区犢橋町320-5（千葉支店）</p>
            <p>
              サイト：
              <a
                href="https://www.skynetwork.jp/"
                className="break-all underline hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.skynetwork.jp/
              </a>
            </p>
            <p>電話番号：043-259-6921</p>
          </div>
        </div>

        <div className="mt-2 pb-2 text-center text-[11px] sm:text-xs md:text-sm">
          <p>© 2026 スカイネットワーク株式会社</p>
        </div>
      </div>
    </footer>
  );
}
