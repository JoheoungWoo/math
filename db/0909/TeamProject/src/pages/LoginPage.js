import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import axios from "axios";

// 로그인 화면 컴포넌트
const LoginPage = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  // 회원가입 페이지에서 전달된 state 값을 destructuring 합니다.  (환영 메시지용)
  const { state } = useLocation();

  // 로그인 폼에 입력값을 저장합니다.
  const [loginForm, setLoginForm] = useState({ id: "", password: "" });

  // 회원가입 직후에 띄울 환영 메시지 상태를 저장합니다.
  const [welcomeMsg, setWelcomeMsg] = useState("");

  // 컴포넌트 마운트 시 실행되는 useEffect
  useEffect(() => {
    // 회원가입 직후 sessionStorage에 임시 저장된 가입자 정보를 가져옵니다.
    const raw = sessionStorage.getItem("joinTemp"); //'joinTemp'에 회원가입 시 입력된 정보를 저장합니다.
    //저장된 정보를 .getItem() 함수를 이용하여 가져와 raw에 저장합니다.

    // controller를 만들고, 데이터가 backend 확인
    // findAll을 이용하여 id, password, password2 같은 것을 찾아서 하나만 backend console에서 출력

    if (raw) {
      try {
        const saved = JSON.parse(raw);
        // 회원가입에서 navigate로 넘어올 때 state.fromJoin이 있으면 환영 메시지 출력
        if (state?.fromJoin && saved?.name) {
          setWelcomeMsg(`${saved.name}님, 가입을 환영합니다!`);
        }
        // 로그인 폼의 아이디 칸을 방금 가입한 아이디로 자동 채워줌
        setLoginForm((p) => ({ ...p, id: saved?.id || saved?.userId || "" }));
      } catch {}
    }
  }, [state]);

  // 입력창 값 변경 핸들러 (id, password 입력 시 실행됨)
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  // 로그인 버튼 클릭 시 실행되는 함수
  const onSubmit = (e) => {
    e.preventDefault(); // form 기본 제출 이벤트(새로고침) 방지

    // 아이디/비밀번호 공백 확인
    if (!loginForm.id || !loginForm.password) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    // 세션스토리지에 저장된 회원 목록 불러오기
    const f = async () => {
      const res = await axios.post(
        "http://localhost:8080/api/member/login",
        loginForm
      );
      console.log(res);

      // 회원이 없으면 경고창
      const { data } = res;

      if (!data) {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        return;
      }

      // const found = users.find(
      //   (u) =>
      //     (u.id === loginForm.id || u.userId === loginForm.id) &&
      //     String(u.password) === String(loginForm.password)
      // );

      sessionStorage.setItem("currentUser", JSON.stringify(data));

      // 로그인 성공 안내
      alert("성공적으로 로그인되었습니다.");

      // 메인 페이지("/")로 이동
      navigate("/");
    };
    f();

    // 입력한 아이디/비밀번호와 일치하는 회원 찾기

    // 회원이 없으면 경고창
    // if (!found) {
    //   alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    //   return;
    // }

    // 로그인 성공 시 → 현재 로그인 사용자 정보를 세션에 저장
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 공통 상단 헤더 */}
      <Header />

      {/* 로그인 섹션 */}
      <section className="relative z-10 bg-white py-20">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-xl rounded-xl w-96 p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">로그인</h2>

            {/* 회원가입 직후 환영 메시지 출력 */}
            {welcomeMsg && (
              <p className="mb-4 text-sm text-green-600">{welcomeMsg}</p>
            )}

            {/* 로그인 입력 폼 */}
            <form onSubmit={onSubmit}>
              {/* 아이디 입력 */}
              <div className="mb-4 text-left">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  아이디
                </label>
                <input
                  type="text"
                  id="username"
                  name="id"
                  value={loginForm.id}
                  onChange={changeHandler}
                  placeholder="아이디를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 비밀번호 입력 */}
              <div className="mb-4 text-left">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginForm.password}
                  onChange={changeHandler}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 로그인 버튼 */}
              <button
                type="submit"
                className="w-full py-3 mt-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
              >
                로그인
              </button>
            </form>

            {/* 회원가입 링크 */}
            <div className="mt-4 text-sm text-gray-600">
              <Link to="/join" className="text-black hover:underline">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
