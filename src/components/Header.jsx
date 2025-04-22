import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-24 bg-white shadow-md flex items-center justify-between px-8">
      <div className="flex items-center space-x-4">
        <img src="/bg-header.jpg" alt="감성채움" className="h-12 w-12 rounded-full object-cover" />
        <h1 className="text-2xl font-bold text-blue-700">감성채움</h1>
      </div>

      <div className="space-x-4">
        <Link to="/login" className="text-blue-600 hover:underline">
          로그인
        </Link>
        <Link to="/signup" className="text-blue-600 hover:underline">
          회원가입
        </Link>
      </div>
    </header>
  );
}
