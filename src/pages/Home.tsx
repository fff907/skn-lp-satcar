import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  // /#service などで来た時にスクロール
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
        className="clip-hero relative z-10 min-h-[80vh] md:min-h-[100vh] overflow-hidden bg-[#4A7CD8] text-white pb-16 md:pb-20 group"
        data-glb="./assets/antenna_car_model_v2.glb"
      >
        {/* SP */}
        <div className="block lg:hidden relative z-20 px-6 pt-24 pb-16">
          <h1 className="font-bold text-[32px] tracking-wide drop-shadow text-center leading-snug">
            現場の“今”を、
            <br />
            遠隔でつなぐ。
          </h1>

          <div className="mt-8 flex justify-center">
            <img
              src="/img/antenna-car-hero.png"
              alt="災害時に活躍する簡易衛星通信車"
              className="w-[260px] xs:w-[280px] sm:w-[320px] h-auto drop-shadow-xl"
            />
          </div>

          <div className="mt-8 space-y-4">
            <div className="bg-white text-[#0E2B64] rounded-lg shadow-lg p-4">
              <p className="text-sm font-semibold mb-1">衛星アンテナユニット</p>
              <p className="text-xs opacity-80 leading-relaxed">
                車上に衛星自動捕捉アンテナを搭載。
                <br />
                現地到着後にケーブルを接続し、窓から安全に車内へ引き込みます。
              </p>
            </div>

            <div className="bg-white text-[#0E2B64] rounded-lg shadow-lg p-4">
              <p className="text-sm font-semibold mb-1">衛星通信制御機器</p>
              <p className="text-xs opacity-80 leading-relaxed">
                衛星通信用コントローラーとモデムを搭載し、現場での通信確立と運用を支援。
                <br />
                安定した衛星通信環境を提供します。
              </p>
            </div>
          </div>
        </div>

        {/* PC */}
        <div className="hidden lg:block">
          <div className="absolute inset-x-0 top-24 px-6 text-center pointer-events-none z-30">
            <h1 className="font-bold text-[32px] md:text-[57px] tracking-wide drop-shadow">
              現場の“今”を、
              <br className="lg:hidden" />
              遠隔でつなぐ。
            </h1>
          </div>

          <div className="absolute inset-x-0 flex justify-center z-20 bottom-16 lg:bottom-20 xl:bottom-24 2xl:bottom-28">
            <img
              src="/img/antenna-car-hero.png"
              alt="災害時に活躍する簡易衛星通信車"
              className="w-[420px] lg:w-[520px] xl:w-[560px] 2xl:w-[600px] h-auto drop-shadow-xl"
            />
          </div>

          <div
            id="info-left"
            className="absolute top-1/3 left-[6%] w-[260px] lg:w-[320px] bg-white text-[#0E2B64] rounded-lg shadow-lg p-4 z-40 hidden lg:block"
          >
            <p className="text-sm md:text-base font-semibold mb-1">
              衛星アンテナユニット
            </p>
            <p className="text-xs md:text-sm opacity-80 leading-relaxed">
              車上に衛星自動捕捉アンテナを搭載。
              <br />
              現地到着後にケーブルを接続し、窓から安全に車内へ引き込みます。
            </p>
          </div>

          <div
            id="info-right"
            className="absolute top-1/3 right-[6%] w-[260px] lg:w-[320px] bg-white text-[#0E2B64] rounded-lg shadow-lg p-4 z-40 hidden lg:block"
          >
            <p className="text-sm md:text-base font-semibold mb-1">
              衛星通信制御機器
            </p>
            <p className="text-xs md:text-sm opacity-80 leading-relaxed">
              衛星通信用コントローラーとモデムを搭載し、現場での通信確立と運用を支援。
              <br />
              安定した衛星通信環境を提供します。
            </p>
          </div>
        </div>

        <div className="h-10" />
      </section>

      {/* 問題と解決 */}
      <section
        id="problem"
        className="relative bg-white text-gray-900"
        style={{ paddingTop: 100, paddingBottom: 100 }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="text-center">
            <h2 className="font-extrabold text-[#333] text-[24px] md:text-[42px] leading-tight">
              こんなお悩みありませんか？
            </h2>

            <div className="relative mx-auto mt-[40px] w-[710px] max-w-full">
              <span className="block h-[3px] w-full bg-[#000]/90" />
              <svg
                className="mx-auto -mb-[2px] w-[50px] h-[20px] md:w-[85px] md:h-[34.36px]"
                viewBox="0 0 85 34.36"
                aria-hidden="true"
              >
                <polygon points="42.5,34.36 0,0 85,0" fill="#111" />
              </svg>
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-[307px] md:w-[348px] max-w-full">
                <div className="w-full h-[100px] md:h-[124px] rounded-[16px] border-[3px] border-[#0E2B64] grid place-items-center px-4 bg-white">
                  <p className="font-semibold text-[16px] md:text-[20px] text-[#0E2B64] leading-snug">
                    通信機材を買うには
                    <br className="hidden md:block" />
                    高すぎる…
                  </p>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-[3px] border-t-0 border-l-0 border-[#0E2B64]" />
              </div>

              <img
                src="/img/problem-highcost.png"
                alt="コストの悩み"
                className="mt-6 md:mt-8 h-[100px] md:h-[145px] object-contain select-none"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-[307px] md:w-[348px] max-w-full">
                <div className="w-full h-[100px] md:h-[124px] rounded-[16px] border-[3px] border-[#0E2B64] grid place-items-center px-4 bg-white">
                  <p className="font-semibold text-[16px] md:text-[20px] text-[#0E2B64] leading-snug">
                    現場の映像をすぐに届けたい
                  </p>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-[3px] border-t-0 border-l-0 border-[#0E2B64]" />
              </div>

              <img
                src="/img/problem-delivery.png"
                alt="映像を届けたい悩み"
                className="mt-6 md:mt-8 h-[100px] md:h-[145px] object-contain select-none"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-[307px] md:w-[348px] max-w-full">
                <div className="w-full h-[100px] md:h-[124px] rounded-[16px] border-[3px] border-[#0E2B64] grid place-items-center px-4 bg-white">
                  <p className="font-semibold text-[16px] md:text-[20px] text-[#0E2B64] leading-snug">
                    現場でのDX化を急ぎたいが、
                    <br />
                    何から始めていいか分からない
                  </p>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-[3px] border-t-0 border-l-0 border-[#0E2B64]" />
              </div>

              <img
                src="/img/problem-dxstart.png"
                alt="DX対応の悩み"
                className="mt-6 md:mt-8 h-[100px] md:h-[145px] object-contain select-none"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <svg
              className="w-[50px] h-[20px] md:w-[85px] md:h-[34.36px]"
              viewBox="0 0 85 34.36"
              aria-hidden="true"
            >
              <polygon points="42.5,34.36 0,0 85,0" fill="#111" />
            </svg>
          </div>

          <div className="mt-8 md:mt-10">
            <div className="mx-auto max-w-[1166px] bg-[#4A7CD8] rounded-lg shadow-md px-4 py-6 md:px-10 md:py-10 flex items-center justify-center">
              <p className="font-semibold text-white drop-shadow leading-snug text-left max-w-[758px] text-[16px] md:text-[30px]">
                そんなお悩みに—
                <br />
                必要な時だけ“出張型”で導入できる通信支援パック！
                <br />
                公共工事の発注要件である“遠隔臨場”にも対応。
                <br />
                ご予算に合わせて導入しやすく、経費処理も可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サービス */}
      <section id="service" className="bg-[#E9EEF5] text-gray-900">
        <div className="mx-auto max-w-[1280px] px-10 py-[60px]">
          <div className="text-center md:text-left">
            <h2 className="inline-block font-semibold text-[#333] leading-snug text-[22px] md:text-[30px]">
              つながる現場を支える、
              <br />
              短期レンタル型通信サービス
            </h2>
            <div className="mt-5 h-[5px] w-[260px] md:w-[426px] bg-[#4A7CD8] mx-auto md:mx-0" />
          </div>

          <div className="mt-12 space-y-[50px] md:space-y-[70px] md:max-w-[960px] md:ml-auto">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              <div className="shrink-0 flex justify-center md:justify-start">
                <img
                  src="/img/service-satellite.png"
                  alt="衛星通信イメージ"
                  className="w-[120px] md:w-[140px] h-auto select-none"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-center md:justify-start">
                  <div className="mt-1 mr-3 h-8 w-[4px] md:h-[40px] md:w-[10px] bg-[#4A7CD8]" />
                  <h3 className="font-bold text-[#0E2B64] leading-snug text-[16px] md:text-[28px]">
                    どんな現場でも“つながる”安心を。
                  </h3>
                </div>
                <p className="mt-4 font-semibold text-[#333] leading-relaxed text-[14px] md:text-[22px]">
                  建設現場・災害現場・イベント会場など、通信環境が不安定な場所でも
                  <br className="hidden md:block" />
                  衛星通信によって安定した映像伝送を実現します。
                  <br className="hidden md:block" />
                  遠隔地の関係者にも、現場の“いま”をリアルタイムで届けられます。
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              <div className="shrink-0 flex justify-center md:justify-start">
                <img
                  src="/img/service-van.png"
                  alt="通信車イメージ"
                  className="w-[120px] md:w-[140px] h-auto select-none"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-center md:justify-start">
                  <div className="mt-1 mr-3 h-8 w-[4px] md:h-[40px] md:w-[10px] bg-[#4A7CD8]" />
                  <h3 className="font-bold text-[#0E2B64] leading-snug text-[16px] md:text-[28px]">
                    通信車と機材をセットでご提供。
                  </h3>
                </div>
                <p className="mt-4 font-semibold text-[#333] leading-relaxed text-[14px] md:text-[22px]">
                  複雑な準備や専門知識は不要。
                  <br className="hidden md:block" />
                  通信車・アンテナ・中継機器をワンセットでレンタルできるため、
                  <br className="hidden md:block" />
                  届いたその日からすぐに利用可能です。
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              <div className="shrink-0 flex justify-center md:justify-start">
                <img
                  src="/img/service-cost.png"
                  alt="コスト削減イメージ"
                  className="w-[120px] md:w-[140px] h-auto select-none"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-center md:justify-start">
                  <div className="mt-1 mr-3 h-8 w-[4px] md:h-[40px] md:w-[10px] bg-[#4A7CD8]" />
                  <h3 className="font-bold text-[#0E2B64] leading-snug text-[16px] md:text-[28px]">
                    購入不要・
                    <br className="md:hidden" />
                    短期レンタルで手軽に導入。
                  </h3>
                </div>
                <p className="mt-4 font-semibold text-[#333] leading-relaxed text-[14px] md:text-[22px]">
                  機材購入や維持管理のコストを抑え、
                  <br className="hidden md:block" />
                  必要な期間だけレンタルする“短期型モデル”を採用。
                  <br className="hidden md:block" />
                  イベントや災害対策など、スポット利用にも最適です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* レンタル機器構成 */}
      <section
        id="rental"
        className="text-gray-900"
        style={{
          backgroundColor: '#F6F6F6',
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(0,0,0,0.035) 0px, rgba(0,0,0,0.035) 8px, rgba(0,0,0,0) 8px, rgba(0,0,0,0) 16px)',
        }}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-[60px]">
          <div className="text-center md:text-left">
            <h2 className="inline-block font-semibold text-[#333] leading-snug text-[22px] md:text-[30px]">
              レンタル機器構成
            </h2>
            <div className="mt-5 h-[5px] w-[260px] md:w-[426px] bg-[#333] mx-auto md:mx-0" />
          </div>

          <p className="mt-6 font-semibold text-[#333] leading-relaxed text-[14px] md:text-[20px]">
            現場到着後すぐに運用できるよう、必要機材をワンセットでご提供します。
            <br className="hidden md:block" />
            構成は現場条件に応じて最適化します。
          </p>

          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
            {/* (1) ウェアラブル */}
            <article className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-sm border border-black/5">
              <img
                src="/img/rental-wearable.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute right-4 top-4 w-16 md:w-20 opacity-[0.26]"
              />
              <div className="flex items-start gap-3">
                <div className="mt-1 mr-0 h-8 w-[4px] md:h-[40px] md:w-[10px] bg-[#4A7CD8]" />
                <div className="flex-1">
                  <h3 className="font-bold text-[#0E2B64] leading-snug text-[16px] md:text-[22px]">
                    (1) ウェアラブルカメラ
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-[12px] md:text-[13px] font-semibold text-[#374151]">
                      Bluetoothヘッドセット
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-[12px] md:text-[13px] font-semibold text-[#374151]">
                      クラウドサーバーサービス
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* (2) バッテリー */}
            <article className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-sm border border-black/5">
              <img
                src="/img/rental-battery.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute right-4 top-4 w-16 md:w-20 opacity-[0.26]"
              />
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-[4px] md:h-[40px] md:w-[10px] bg-[#4A7CD8]" />
                <div className="flex-1">
                  <h3 className="font-bold text-[#0E2B64] leading-snug text-[16px] md:text-[22px]">
                    (2) バッテリー
                  </h3>
                  <p className="mt-3 font-semibold text-[#333] text-[13px] md:text-[16px] leading-relaxed">
                    容量：
                    <span className="inline-block px-2 py-1 rounded bg-[#F3F4F6]">
                      768Wh
                    </span>{' '}
                    ＋{' '}
                    <span className="inline-block px-2 py-1 rounded bg-[#F3F4F6]">
                      256Wh
                    </span>
                  </p>
                </div>
              </div>
            </article>

            {/* (3) IP電話 */}
            <article className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-sm border border-black/5">
              <img
                src="/img/rental-ipphone.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute right-4 top-4 w-16 md:w-20 opacity-[0.26]"
              />
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-[4px] md:h-[40px] md:w-[10px] bg-[#4A7CD8]" />
                <div className="flex-1">
                  <h3 className="font-bold text-[#0E2B64] leading-snug text-[16px] md:text-[22px]">
                    (3) IP電話機
                  </h3>
                </div>
              </div>
            </article>

            {/* (4) Wi-Fi */}
            <article className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-sm border border-black/5">
              <img
                src="/img/rental-wifi.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute right-4 top-4 w-16 md:w-20 opacity-[0.26]"
              />
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-[4px] md:h-[40px] md:w-[10px] bg-[#4A7CD8]" />
                <div className="flex-1">
                  <h3 className="font-bold text-[#0E2B64] leading-snug text-[16px] md:text-[22px]">
                    (4) Wi-Fi
                  </h3>
                  <p className="mt-3 font-semibold text-[#333] text-[13px] md:text-[16px] leading-relaxed">
                    無線LANアクセスポイント
                  </p>
                </div>
              </div>
            </article>

            {/* (5) 衛星回線 */}
            <article className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-sm border border-black/5">
              <img
                src="/img/rental-satellite.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute right-4 top-4 w-16 md:w-20 opacity-[0.26]"
              />
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-[4px] md:h-[40px] md:w-[10px] bg-[#4A7CD8]" />
                <div className="flex-1">
                  <h3 className="font-bold text-[#0E2B64] leading-snug text-[16px] md:text-[22px]">
                    (5) 衛星回線
                  </h3>
                  <p className="mt-3 font-semibold text-[#333] text-[13px] md:text-[16px] leading-relaxed">
                    スカパーJSAT Exbirdサービス
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 text-[#555] text-[12px] md:text-[14px] leading-relaxed space-y-2">
            <p>
              ※構成は現場条件（電源・設置スペース・用途など）により変更となる場合があります。
            </p>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section id="pricing" className="bg-white text-gray-900">
        <div className="mx-auto max-w-[1280px] px-6 min-[1220px]:px-[155px] py-[60px] min-[1220px]:py-[80px]">
          <div className="text-center">
            <h2 className="font-extrabold text-[#333] text-[28px] md:text-[42px]">
              料金プラン
            </h2>
            <div className="mt-5 h-[5px] w-[260px] md:w-[545px] bg-[#333] mx-auto" />
          </div>

          <p className="mt-[30px] text-center text-[16px] md:text-[24px] font-bold text-[#333]">
            長期プロジェクトや常設現場に、安定した通信を提供します。
          </p>

          <div className="mt-[30px] mx-auto max-w-[1219px] border-[8px] border-[#3EAC78] px-4 py-8 min-[1220px]:px-[100px] min-[1220px]:py-[50px]">
            <div className="hidden min-[1220px]:block mt-[30px] text-[#333] font-bold text-[18px] md:text-[19px]">
              <div className="grid grid-cols-[1.1fr_1.5fr_1fr_1fr] gap-x-[40px] items-end">
                <div>プラン</div>
                <div></div>
                <div className="text-center">デイリープラン</div>
                <div className="text-center">1カ月プラン</div>
              </div>

              <div className="mt-4 flex justify-end">
                <div className="w-[800px] border-t-[3px] border-[#D1D5DB]" />
              </div>

              <div className="mt-6 grid grid-cols-[1.1fr_1.5fr_1fr_1fr] grid-rows-[auto_auto_auto_auto] gap-x-[40px] items-center">
                <div className="row-span-3 row-start-2 leading-tight">
                  <div>1日あたりの</div>
                  <div>レンタル料</div>
                </div>

                <div className="row-start-2">通常価格</div>
                <div className="row-start-2 text-center text-[20px] md:text-[24px]">
                  未公表
                </div>
                <div className="row-start-2 text-center text-[20px] md:text-[24px]">
                  未公表
                </div>

                <div className="row-start-3 col-start-2 col-span-3 mt-4 mb-4">
                  <div className="w-[550px] border-t-[3px] border-[#D1D5DB] ml-auto" />
                </div>

                <div className="row-start-4">キャンペーン価格</div>
                <div className="row-start-4 text-center text-[20px] md:text-[24px]">
                  ¥70,000
                </div>
                <div className="row-start-4 text-center text-[20px] md:text-[24px]">
                  未公表
                </div>
              </div>
            </div>

            <div className="block min-[1220px]:hidden mt-[30px] text-[#333] font-bold text-[16px] space-y-6">
              <div className="pt-4 border-t-[3px] border-[#D1D5DB]">
                <p className="text-[15px] mb-2">1日あたりのレンタル料</p>

                <div className="flex flex-col min-[540px]:flex-row items-center min-[540px]:items-start justify-center min-[540px]:justify-between gap-4 max-w-[360px] mx-auto min-[540px]:max-w-none min-[540px]:mx-0">
                  <div>通常価格</div>

                  <div className="mt-2 min-[540px]:mt-0 flex min-[540px]:justify-end">
                    <div className="space-y-1">
                      <div className="flex items-baseline">
                        <span className="inline-block w-[120px] text-left text-[20px] font-extrabold">
                          未公表
                        </span>
                        <span className="ml-1 text-[12px] font-normal">
                          （1日）
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="inline-block w-[120px] text-left text-[20px] font-extrabold">
                          未公表
                        </span>
                        <span className="ml-1 text-[12px] font-normal">
                          （1カ月）
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-[3px] border-[#D1D5DB]">
                <p className="text-[15px] mb-2">1日あたりのレンタル料</p>

                <div className="flex flex-col min-[540px]:flex-row items-center min-[540px]:items-start justify-center min-[540px]:justify-between gap-4 max-w-[360px] mx-auto min-[540px]:max-w-none min-[540px]:mx-0">
                  <div>キャンペーン価格</div>

                  <div className="mt-2 min-[540px]:mt-0 flex min-[540px]:justify-end">
                    <div className="space-y-1">
                      <div className="flex items-baseline">
                        <span className="inline-block w-[120px] text-left text-[20px] font-extrabold">
                          ¥70,000
                        </span>
                        <span className="ml-1 text-[12px] font-normal">
                          （1日）
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="inline-block w-[120px] text-left text-[20px] font-extrabold">
                          未公表
                        </span>
                        <span className="ml-1 text-[12px] font-normal">
                          （1カ月）
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-[#333] leading-relaxed space-y-4">
              <h3 className="font-bold text-[15px] md:text-[18px]">
                オペレーターを付帯します
              </h3>

              <div>
                <p className="mt-1 text-[12px] md:text-[17px]">
                  オペレーターとは、弊社から指定場所への運転および衛星捕捉、
                  映像伝送装置における使用上のサポート等、撮影を行うための一連の準備を行う者です。
                  必要に応じて撮影も行います。
                </p>
                <p className="font-semibold mt-1 text-[12px] md:text-[17px] text-[#1F2937]">
                  ※3/31までのキャンペーン期間中は、オペレーターありの場合のみ提供させていただきます。
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="space-y-[10px] text-[13px] md:text-[17px] text-[#555] text-left">
                <p>
                  ※お申込みは、ご利用開始日の10営業日前までにお願いいたします。
                </p>
                <p>※通信速度は上り1Mbps、下り4Mbpsとなります。</p>
                <p>
                  ※料金は税別表示です。設備や出張費が別途発生する場合があります。
                </p>
                <p>※交通費は含まれておりません。</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 問い合わせ */}
      <section
        id="contact"
        className="clip-cta bg-[#4A7CD8] text-white flex flex-col items-center justify-center py-20 md:py-28 px-6"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          今すぐ衛星通信車を手配
        </h2>

        <Link
          to="/request"
          className="group relative z-10 inline-flex h-12 md:h-14 items-center justify-center overflow-hidden
                  rounded-md md:rounded-lg bg-red-600 px-7 md:px-12 font-semibold
                  text-white text-base md:text-lg shadow md:shadow-lg transition
                  hover:scale-[1.03] hover:bg-red-700 active:bg-red-800
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-300"
        >
          <span>今すぐ依頼する</span>
          <div
            className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-center
                      [transform:skew(-12deg)_translateX(-100%)]
                      group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"
          >
            <div className="relative h-full w-8 bg-white/20" />
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
