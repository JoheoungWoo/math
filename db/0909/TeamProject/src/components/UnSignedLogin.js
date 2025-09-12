import React from "react";
import { Link } from "react-router-dom";

const UnSignedLogin = () => {
  return (
    <div className="flex items-center gap-4">
      <Link
        to="/login"
        className="text-gray-200 font-medium hover:text-white no-underline"
      >
        로그인
      </Link>
      <span className="text-gray-500/60">|</span>
      <Link
        to="/join"
        className="text-gray-200 font-medium hover:text-white no-underline"
      >
        회원가입
      </Link>
    </div>
  );
};

export default UnSignedLogin;
