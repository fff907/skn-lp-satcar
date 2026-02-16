import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Request() {
  return (
    <div className="font-sans text-gray-900 antialiased bg-gray-100 min-h-screen">
      <Header mode="light" />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-10 md:pt-32 md:pb-14">
        <section className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            お問い合わせ・ご相談フォーム
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            デモのご相談・お見積り・導入検討のご質問など、
            <br className="hidden md:block" />
            こちらのフォームからお知らせください。担当者より折り返しご連絡いたします。
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <form
            name="inquiry"
            method="POST"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            {/* Netlify Forms 必須（隠し項目） */}
            <input type="hidden" name="form-name" value="inquiry" />
            <p className="hidden">
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" />
              </label>
            </p>

            <div>
              <label className="block text-sm font-semibold mb-1">
                会社名・団体名 <span className="text-red-500 text-xs">必須</span>
              </label>
              <input
                type="text"
                name="company"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                placeholder="例）○○株式会社 防災対策室"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  ご担当者名 <span className="text-red-500 text-xs">必須</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）山田 太郎"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">フリガナ</label>
                <input
                  type="text"
                  name="kana"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）ヤマダ タロウ"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  メールアドレス <span className="text-red-500 text-xs">必須</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）example@example.co.jp"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">お電話番号</label>
                <input
                  type="tel"
                  name="tel"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）03-1234-5678"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">ご相談対象（任意）</label>
              <input
                type="text"
                name="topic"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                placeholder="例）簡易業務無線／FINE POLL／衛星アンテナ／通信の選定相談 など"
              />
              <p className="mt-1 text-xs text-gray-500">
                ※各LPの内容に合わせて、初期値を入れたい場合は後で調整できます。
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">ご利用予定の現場・拠点</label>
              <textarea
                name="location"
                rows={3}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                placeholder="例）千葉県千葉市○○区 △△施設 など"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">ご希望のご利用日・期間</label>
                <input
                  type="text"
                  name="date"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）2026年2月中旬／○月○日〜○月○日 など"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">想定されている用途</label>
                <input
                  type="text"
                  name="usage"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）BCP対策／遠隔拠点との連絡／現地Wi-Fi など"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">その他のご要望・ご質問</label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                placeholder="現時点で分かる範囲で構いません。ご希望やご不明点があればご記入ください。"
              />
            </div>

            <div className="pt-1">
              <label className="inline-flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-0.5 h-4 w-4 text-[#4A7CD8] border-gray-300 focus:ring-[#4A7CD8]"
                />
                <span>
                  個人情報の取り扱いに同意のうえ送信します。
                </span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-white text-base font-semibold shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
              >
                この内容で問い合わせる
              </button>
            </div>

            <p className="mt-3 text-[11px] text-gray-500 leading-relaxed">
              ※内容を確認のうえ、担当者よりご連絡いたします。
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
