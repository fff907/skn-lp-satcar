import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Request() {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-900 antialiased bg-gray-100 min-h-screen">
      <Header mode="light" />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-10 md:pt-32 md:pb-14">
        <section className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            衛星通信車 出張サービスのご依頼
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            デモのご相談・お見積り・本番現場でのご利用など、
            <br className="hidden md:block" />
            こちらのフォームからお知らせください。担当者より折り返しご連絡いたします。
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/thanks');
            }}
          >
            <div>
              <label className="block text-sm font-semibold mb-1">
                会社名・団体名{' '}
                <span className="text-red-500 text-xs">必須</span>
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
                <label className="block text-sm font-semibold mb-1">
                  フリガナ
                </label>
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
                  メールアドレス{' '}
                  <span className="text-red-500 text-xs">必須</span>
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
                <label className="block text-sm font-semibold mb-1">
                  お電話番号
                </label>
                <input
                  type="tel"
                  name="tel"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）03-1234-5678"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                ご利用予定の現場・拠点
              </label>
              <textarea
                name="location"
                rows={3}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                placeholder="例）千葉県千葉市○○区 △△小学校 体育館前 など"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  ご希望のご利用日・期間
                </label>
                <input
                  type="text"
                  name="date"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）2026年2月中旬の平日／○月○日〜○月○日 など"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  想定されている用途
                </label>
                <input
                  type="text"
                  name="usage"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                  placeholder="例）避難訓練での映像伝送、災害時のバックアップ回線 など"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                オペレーターの種別
              </label>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6 text-sm">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="operator_type"
                    value="with"
                    className="h-4 w-4 text-[#4A7CD8] border-gray-300 focus:ring-[#4A7CD8]"
                  />
                  <span className="ml-2">オペレーターあり</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="operator_type"
                    value="without"
                    className="h-4 w-4 text-[#4A7CD8] border-gray-300 focus:ring-[#4A7CD8]"
                  />
                  <span className="ml-2">オペレーターなし</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                オペレーター付きでの想定日数
              </label>
              <input
                type="text"
                name="operator_days"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                placeholder="例）1日／2日間／3日間 など"
              />
              <p className="mt-1 text-xs text-gray-500">
                ※オペレーターありをご希望の場合のみ、ご記入ください。
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                その他のご要望・ご質問
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7CD8]"
                placeholder="現時点で分かる範囲で構いません。ご希望やご不明点があればご記入ください。"
              />
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
              ※
              本フォームは仮の入力画面です。実際の送信方法（メール／Googleフォームなど）は、
              <br className="hidden md:block" />
              社内の運用に合わせて後ほど調整いただく想定です。
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
