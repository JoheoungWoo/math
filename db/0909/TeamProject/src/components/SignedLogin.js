import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignedLogin = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // Link의 기본 동작 막기
    sessionStorage.removeItem("currentUser"); // 세션에서 유저 정보 제거
    alert("로그아웃 되었습니다.");
    navigate("/"); // 홈으로 이동
  };

  return (
    <div>
      <div className="flex gap-4">
        <Link
          to="/"
          onClick={handleLogout}
          className="text-gray-200 font-medium hover:text-white no-underline"
        >
          로그아웃
        </Link>
        <Link
          to="/user"
          className="text-gray-200 font-medium hover:text-white no-underline"
        >
          마이페이지
        </Link>
        <Link
          to="/cart"
          className="text-gray-200 font-medium no-underline hover:text-white"
        >
          장바구니
        </Link>
      </div>
    </div>
  );
};

export default SignedLogin;
