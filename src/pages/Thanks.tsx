import { Link } from 'react-router-dom';

export default function Thanks() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-100 text-gray-900">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold mb-4">送信ありがとうございました</h1>

        <p className="mb-6 text-sm leading-relaxed">
          フォームにご入力いただいた内容は正常に送信されました。
          <br />
          担当者よりあらためてご連絡いたしますので、今しばらくお待ちください。
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#4A7CD8] text-white text-sm font-semibold hover:bg-[#365fab]"
        >
          トップページに戻る
        </Link>
      </div>
    </main>
  );
}
