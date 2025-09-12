import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

// 폰트 크기와 간격을 최종 조정한 푸터 컴포넌트
const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    {/* py-16으로 상하 여백을 늘려 전체적으로 공간을 더 확보합니다. */}
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* CUSTOMER CENTER */}
      {/* 👇 모든 구역의 기본 텍스트 크기를 text-xs (12px)로 설정합니다. */}
      <div className="text-xs">
        <h4 className="text-xs font-bold text-gray-800 tracking-wider mb-4">
          CUSTOMER CENTER
        </h4>
        <div className="space-y-2 text-gray-500">
          {/* 👇 전화번호 크기를 text-base (16px)로 조정했습니다. */}
          <p className="text-base font-bold text-black">1599-2785</p>
          <p>AM 09:30 - PM 18:10</p>
          <p>LUNCH PM 13:20 - PM 14:20</p>
          <p>SAT, SUN HOLIDAY OFF</p>
        </div>
      </div>

      {/* OFFLINE SHOP */}
      <div className="text-xs">
        <h4 className="text-xs font-bold text-gray-800 tracking-wider mb-4">
          OFFLINE SHOP
        </h4>
        <div className="space-y-2 text-gray-500">
          <p>그린컴퓨터아카데미 (미금) 5F BY:MONO</p>
          <p>미금역 5번출구</p>
          <p>월-목 | AM 09:30 - PM 18:10</p>
          <p>(공휴일휴무)</p>
          <p>TEL 01234-1579-2468</p>
        </div>
      </div>

      {/* RETURN / EXCHANGE */}
      <div className="text-xs">
        <h4 className="text-xs font-bold text-gray-800 tracking-wider mb-4">
          RETURN / EXCHANGE
        </h4>
        <div className="space-y-2 text-gray-500">
          <p>
            <b className="text-gray-700">CJ대한통운 이용시</b>
            <br />
            서울시 강남구 역삼동 CJ대한통운 OOO대리점
          </p>
          <p>
            <b className="text-gray-700">타 택배사 이용시</b>
            <br />
            경기도 광주시 매산동 444-1번지 2층
          </p>
          <p className="text-xs pt-2">
            * 타 택배사는 꼭! 선불로 발송해주셔야 합니다.
          </p>
        </div>
      </div>

      {/* FOLLOW US */}
      <div className="text-xs">
        <h4 className="text-xs font-bold text-gray-800 tracking-wider mb-4">
          FOLLOW US
        </h4>
        {/* 👇 아이콘 크기를 text-lg (18px)로 조정했습니다. */}
        <div className="flex space-x-4 mb-4 text-lg">
          <a href="#" className="text-gray-500 hover:text-black">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            <FaYoutube />
          </a>
        </div>
        <div className="space-y-2 text-gray-500">
          <p>지금 바로 SNS를 팔로우 하고</p>
          <p>가장 먼저 다양한 이벤트 소식을 만나보세요.</p>
        </div>
      </div>
    </div>

    {/* 저작권 정보 */}
    <div className="bg-gray-50 py-4 border-t border-gray-200">
      <p className="text-center text-gray-500 text-xs">
        &copy; 2025 TeamProJect. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
