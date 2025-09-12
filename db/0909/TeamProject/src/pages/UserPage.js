import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../layouts/Footer"; // 공통 푸터 컴포넌트
import Header from "../layouts/Header"; // 공통 헤더 컴포넌트

// 회원정보(로그인된 사용자 정보)를 보여주는 UserPage 컴포넌트
const UserPage = () => {
  // 세션스토리지에 저장된 "currentUser" 정보를 불러와서 user 상태에 저장
  // → 로그인한 사용자의 데이터를 그대로 유지하기 위해 state로 관리
  const [user] = useState(() => {
    const raw = sessionStorage.getItem("currentUser");
    return raw ? JSON.parse(raw) : null; // 값이 없으면 null → 로그인 안 된 상태
  });

  const navigate = useNavigate(); // 다른 페이지로 이동하기 위한 hook

  // useEffect: 컴포넌트가 마운트될 때 user가 없는 경우 처리
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요한 페이지입니다."); // 로그인 안 된 경우 안내
      navigate("/login"); // 로그인 페이지로 강제 이동
    }
  }, [user, navigate]); // user 또는 navigate 값이 바뀔 때 실행됨

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* 상단 공통 헤더 */}
      <Header />

      {/* 메인 컨테이너 (세로 배치, 카드 간격 유지) */}
      <main className="max-w-5xl mx-auto p-6 space-y-8">
        {/* 회원 정보 카드 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 min-h-[400px] flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-gray-900">회원 정보</h2>

          {/* user 값이 있으면 회원 정보 출력 */}
          {user ? (
            <div className="mb-4 p-3 border rounded text-gray-800 flex-1 space-y-2">
              <p>
                <span className="font-semibold">이 름:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold">생년월일:</span> {user.birth}
              </p>
              <p>
                <span className="font-semibold">이 메 일:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">연 락 처:</span> {user.num}
              </p>
              <p>
                <span className="font-semibold">주 소:</span> {user.address}
              </p>
            </div>
          ) : (
            // user가 null일 때(로그인 안 된 상태) 표시되는 안내 문구
            <div className="text-gray-600 flex-1">
              로그인된 회원 정보가 없습니다.
            </div>
          )}

          {/* 회원정보 수정 버튼 → /user/update 페이지로 이동 */}
          <div className="mt-4">
            <Link
              to="update"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              회원정보 수정
            </Link>
          </div>
        </div>

        {/*
        =================== 주문 내역 카드 (현재는 주석 처리됨) ===================
        - user.cart 배열을 이용해 주문한 상품 내역을 테이블로 보여줌
        - 상태(state)가 "배송 완료"면 초록색, 그 외에는 노란색으로 표시
        - 현재 주석 처리되어 있어서 화면에는 안 나옴
        =======================================================================
        */}
        {/*
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 min-h-[400px] flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-gray-900">주문 내역</h2>
          {user && user.cart?.length > 0 ? (
            <div className="flex-1 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-black text-white text-left">
                    <th className="p-3">주문번호</th>
                    <th className="p-3">상품명</th>
                    <th className="p-3">가격</th>
                    <th className="p-3">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {user.cart.map((item, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-3">{item.orderNo}</td>
                      <td className="p-3">{item.productName}</td>
                      <td className="p-3">{item.price}</td>
                      <td
                        className={`p-3 font-semibold ${
                          item.state === "배송 완료"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {item.state}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-gray-600 flex-1">주문 내역이 없습니다.</div>
          )}
        </div>
        */}
      </main>

      {/* 하단 공통 푸터 */}
      <Footer />
    </div>
  );
};

export default UserPage;
