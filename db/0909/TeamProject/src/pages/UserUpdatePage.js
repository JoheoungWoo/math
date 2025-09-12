import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layouts/Footer"; // 공통 푸터 컴포넌트
import Header from "../layouts/Header"; // 공통 헤더 컴포넌트

// 📝 회원 정보 수정 페이지
const UserUpdatePage = () => {
  const navigate = useNavigate();
  // -----------------------------------------------------
  // 🧩 상태 정의: user (현재 로그인된 사용자 정보)
  // -----------------------------------------------------
  const [user, setUser] = useState(() => {
    const raw = sessionStorage.getItem("currentUser");
    // 세션스토리지에서 currentUser 데이터를 가져옴

    // 로그인된 사용자 정보가 없으면 빈 객체를 기본값으로 설정
    return raw
      ? JSON.parse(raw)
      : {
          name: "", // 이름
          birth: "", // 생년월일
          email: "", // 이메일
          num: "", // 연락처
          address: "", // 주소
          cart: [], // 장바구니 (빈 배열로 초기화)
        };
  });

  // -----------------------------------------------------
  // 🧩 changeHandler: input 값 변경 시 실행
  // -----------------------------------------------------
  const changeHandler = (e) => {
    const { name, value } = e.target;
    // e.target.name → 어떤 input인지 구분 (예: "email")
    // e.target.value → 사용자가 입력한 값
    // user 객체의 해당 속성만 업데이트
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // -----------------------------------------------------
  // 🧩 saveHandler: 회원정보 저장 버튼 클릭 시 실행
  // -----------------------------------------------------
  const saveHandler = (e) => {
    e.preventDefault(); // form 기본 동작(페이지 새로고침) 방지
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    // 변경된 user 객체를 세션스토리지에 저장 (로그인 상태 유지)
    alert("회원 정보가 성공적으로 저장되었습니다.");
    // 사용자에게 알림 표시
    navigate("/user", { replace: true });
    // 저장 후 "/user" 페이지로 이동 (replace 옵션: 뒤로 가기 시 수정페이지로 안 돌아오게 함)
  };

  // -----------------------------------------------------
  // 🖼️ 렌더링 부분
  // -----------------------------------------------------
  return (
    // form 전체 감싸고, submit 시 saveHandler 실행
    <form onSubmit={saveHandler}>
      <div className="bg-white font-sans min-h-screen">
        <Header /> {/* 공통 상단 헤더 */}
        {/* 메인 컨테이너 */}
        <main className="max-w-5xl mx-auto p-6">
          {/* 회원 정보 수정 카드 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              회원 정보 수정
            </h2>

            {/* 입력 폼 (user 상태의 값으로 제어) */}
            <div className="mb-4 p-3 border rounded text-gray-800 space-y-3">
              {/* 이름 */}
              <label className="block">
                이 름:
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={changeHandler}
                  className="ml-2 border px-2 py-1 rounded font-semibold"
                />
              </label>

              {/* 생년월일 */}
              <label className="block">
                생년월일:
                <input
                  type="text"
                  name="birth"
                  value={user.birth}
                  onChange={changeHandler}
                  className="ml-2 border px-2 py-1 rounded font-semibold"
                />
              </label>

              {/* 이메일 */}
              <label className="block">
                이 메 일:
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={changeHandler}
                  className="ml-2 border px-2 py-1 rounded font-semibold"
                />
              </label>

              {/* 연락처 */}
              <label className="block">
                연 락 처:
                <input
                  type="text"
                  name="num"
                  value={user.num}
                  onChange={changeHandler}
                  className="ml-2 border px-2 py-1 rounded font-semibold"
                />
              </label>

              {/* 주소 */}
              <label className="block">
                주 소:
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={changeHandler}
                  className="ml-2 border px-2 py-1 rounded font-semibold"
                />
              </label>
            </div>

            {/* 저장 버튼 */}
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                회원정보 저장하기
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* 공통 하단 푸터 */}
      <Footer />
    </form>
  );
};

export default UserUpdatePage;

// 1. 상태 관리
// useState로 user 상태 관리
// 초기값은 sessionStorage.getItem("currentUser")
// 없으면 {name:"", birth:"", email:"", num:"", address:"", cart:[]} 빈 객체 사용
// 2. 입력 처리
// changeHandler: 모든 input의 name 속성을 기준으로 user 객체의 해당 필드 업데이트
// → Controlled Component 방식 (입력값이 state에 반영됨)
// 3. 저장 처리
// saveHandler: form 제출 시 실행
// sessionStorage에 수정된 user 저장
// alert로 안내 후 /user 페이지로 이동
