import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import axios from "axios";

// 폼 입력값 초기 상태를 정의합니다.
const initialForm = {
  name: "", // 사용자 이름
  id: "", // 아이디
  password: "", // 비밀번호
  password2: "", // 비밀번호 확인
  email: "", // 이메일
  birth: "", // 생년월일 (YYYY-MM-DD)
  phone: "", // 전화번호
  address: "", // 주소
  agree: false, // 약관 동의 여부 (체크박스)
};

const JoinPage = () => {
  const navigate = useNavigate(); // 회원가입 완료 후 페이지를 이동합니다.
  const [form, setForm] = useState(initialForm);
  // useState를 사용하여 form 상태 → 회원가입 폼의 모든 입력값을 저장 및 관리합니다.

  // 모든 input 변경을 처리하는 핸들러
  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev, // 기존 값을 유지합니다.
      [name]: type === "checkbox" ? checked : value, // 체크박스면 true/false, 아니면 입력값
    }));
  };

  // name 속성을 키로 사용하여 해당 필드 값만 업데이트한다.
  // checkbox일 경우에는 checked 값(true/false), 그 외는 value로 업데이트한다.

  // '가입완료' 버튼 클릭 시 호출되는 함수
  const onSubmit = (e) => {
    e.preventDefault();
    // 기본 form 제출 이벤트(새로고침) 방지

    // 아래의 3가지 입력 값을 확인하고 통과되어야 회원가입이 진행된다.
    // 1) 약관 동의 확인
    if (!form.agree) {
      alert("이용약관에 동의해주세요.");
      return;
    }

    // 2) 필수 항목 입력 확인
    if (!form.name || !form.id || !form.password || !form.password2) {
      alert("필수 항목을 입력해주세요.");
      return;
    }

    // 3) 비밀번호 일치 확인
    if (form.password !== form.password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 기존 사용자 목록(sessionStorage) 불러오기
    let users = [];
    try {
      const raw = sessionStorage.getItem("allUsers");
      users = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(users)) users = [];
    } catch {
      users = [];
    }

    // 회원 고유번호(uno) 자동 증가
    const nextUno = users.length
      ? Math.max(...users.map((u) => u.uno || 0)) + 1 // 가장 큰 uno + 1
      : 1; // 첫 번째 회원이면 1

    // 모든 사용자 중 가장 큰 uno 값에 +1을 하여 새 회원번호로 사용한다.
    // 저장된 사용자가 없으면 1부터 시작한다.

    // 저장할 사용자 객체 생성
    const savedUser = {
      uno: nextUno, // 고유 회원번호
      id: form.id, // 아이디
      name: form.name, // 이름
      password: String(form.password), // 비밀번호(문자열로 저장)
      email: form.email, // 이메일
      birth: form.birth, // 생년월일
      num: form.phone, // 구버전 호환용 (num 필드)
      phone: form.phone, // 현재 입력한 전화번호
      address: form.address, // 주소
      cart: [], // 장바구니 초기값 (빈 배열)
      // 장바구니에 넣기 기능 사용을 위해 빈 배열로 초기화해놓고 저장합니다.
    };

    // 사용자 목록에 추가 후 sessionStorage에 저장
    const updated = [...users, savedUser];
    sessionStorage.setItem("allUsers", JSON.stringify(updated)); // 전체 회원 목록 업데이트
    sessionStorage.setItem("joinTemp", JSON.stringify(savedUser)); // 방금 가입한 사용자만 별도 저장
    // 가입 완료 시 바로 로그인을 진행하는데, 로그인 화면에서 사용되기 때문에 작성합니다.

    // 가입 완료 처리
    alert("가입을 환영합니다!");
    setForm(initialForm); // 폼 초기화
    navigate("/login", {
      // 로그인 페이지로 이동 (state로 가입자 정보 전달)
      state: { fromJoin: true, name: savedUser.name, email: savedUser.email },
    });

    const f = async () => {
      const res = await axios.post("http://localhost:8080/api/member", form);
      console.log(res);
    };
    f();
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Header /> {/* 상단 공통 헤더 */}
      {/* 회원가입 섹션 */}
      <section className="relative z-10 bg-white py-20">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-xl rounded-xl w-[450px] p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">회원가입</h2>

            {/* form (회원가입 입력폼) */}
            <form className="text-left space-y-4" onSubmit={onSubmit}>
              {/* 이름 입력 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="이름을 입력하세요"
                  value={form.name}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 아이디 입력 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  아이디
                </label>
                <input
                  name="id"
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={form.id}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 비밀번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={form.password}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 비밀번호 확인 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호 확인
                </label>
                <input
                  name="password2"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  value={form.password2}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={form.email}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 생년월일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  생년월일
                </label>
                <input
                  name="birth"
                  type="date"
                  value={form.birth}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 휴대폰 번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  휴대폰 번호
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="010-1234-5678"
                  value={form.phone}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 주소 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  주소
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="배송지 주소를 입력하세요"
                  value={form.address}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 약관 동의 */}
              <div className="mt-6">
                <label className="flex items-start space-x-2">
                  <input
                    name="agree"
                    type="checkbox"
                    value={form.agree}
                    onChange={changeHandler}
                    className="mt-1 h-4 w-4 text-black border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    [필수] 이용약관에 동의합니다.
                  </span>
                </label>
                {/* 약관 내용 스크롤 영역 */}
                <div className="mt-2 p-3 border border-gray-300 rounded-lg h-24 overflow-y-auto text-sm text-gray-600 bg-gray-50">
                  여기에 이용약관 내용을 넣으시면 됩니다. <br />
                  회원은 사이트를 이용함에 있어 법령과 공공질서에 위배되는
                  행위를 하여서는 아니됩니다...
                </div>
              </div>

              {/* 가입 완료 버튼 */}
              <button
                type="submit"
                className="w-full py-3 mt-6 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
              >
                가입 완료
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer /> {/* 하단 공통 푸터 */}
    </div>
  );
};

export default JoinPage;
