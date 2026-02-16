export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 text-xs sm:text-sm md:text-base">
      <div className="max-w-6xl mx-auto space-y-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <p className="font-semibold text-base md:text-lg text-center md:text-left">
            スカイネットワーク株式会社
          </p>

          <div className="space-y-1 leading-relaxed text-left w-fit mx-auto md:mx-0">
            <p>所在地：千葉県千葉市花見川区犢橋町320-5（千葉支店）</p>
            <p>
              サイト：
              <a
                href="https://www.skynetwork.jp/"
                className="underline hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.skynetwork.jp/
              </a>
            </p>
            <p>電話番号：043-259-6921</p>
          </div>
        </div>

        <div className="mt-2 pb-2 text-[11px] sm:text-xs md:text-sm text-center">
          <p>© 2026 スカイネットワーク株式会社</p>
        </div>
      </div>
    </footer>
  );
}

