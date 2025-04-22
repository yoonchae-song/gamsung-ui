import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/calm-forest.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* 배경을 너무 덮지 않도록 opacity 낮춤 */}
      <div className="min-h-screen bg-white bg-opacity-30">
        <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white bg-opacity-70">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo192.png" alt="로고" className="h-10" />
            <span className="text-2xl font-bold text-slate-800">감성채움</span>
          </Link>
          <div className="space-x-4">
            <Link to="/login" className="text-blue-600 hover:underline">로그인</Link>
            <Link to="/signup" className="text-blue-600 hover:underline">회원가입</Link>
          </div>
        </header>

        <div className="flex">
          <aside className="w-1/5">
            <Sidebar />
          </aside>
          <main className="w-4/5 p-4 min-h-[calc(100vh-80px)]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
