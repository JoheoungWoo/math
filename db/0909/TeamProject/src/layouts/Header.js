import React from "react";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import SignedLogin from "../components/SignedLogin";
import UnSignedLogin from "../components/UnSignedLogin";

const Header = () => {
  return (
    // 1. Header와 MainMenu를 감싸는 부모 div를 만듭니다.
    // 2. sticky 관련 모든 클래스를 이 부모 div에 적용합니다.
    <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* 3. 기존 header에서는 sticky 속성을 제거하고, 배경색 등 고유 스타일만 남깁니다. */}
      <header className="flex justify-between items-center px-8 py-4 bg-black text-white border-b border-gray-800 h-[68px]">
        <div className="text-2xl font-bold">
          <Link
            to="/"
            className="text-gray-200 font-medium hover:text-white no-underline"
          >
            SEMIP
          </Link>
        </div>

        <div className="space-x-4">
          {sessionStorage.getItem("currentUser") ? (
            <SignedLogin />
          ) : (
            <UnSignedLogin />
          )}
        </div>
      </header>

      {/* MainMenu는 이제 sticky 속성 없이도 부모를 따라 움직입니다. */}
      <MainMenu />
    </div>
  );
};

export default Header;
