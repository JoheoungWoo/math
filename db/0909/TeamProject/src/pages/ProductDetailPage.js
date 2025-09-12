import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ALL_PRODUCTS } from "../data/products";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  getDiscountRate,
  getFinalPrice,
  getOriginalPrice,
  toKRW,
  toNumber,
} from "../utils/numberFormatConvert";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const product = ALL_PRODUCTS.find((p) => p.id === parseInt(productId));

  // 상품이 없을 때의 UI (이 부분은 변경 없음)
  if (!product) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">상품을 찾을 수 없습니다.</h2>
            <Link
              to="/"
              className="mt-4 inline-block px-6 py-2 bg-black text-white rounded"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // product가 존재함을 보장하므로 여기에 배치
  const originalPrice = getOriginalPrice(product);
  const discountRate = getDiscountRate(product);
  const finalPrice = getFinalPrice(product);

  const handleAddToCart = () => {
    if (!selectedColor) {
      alert("색상을 선택해주세요.");
      return;
    }
    if (!selectedSize) {
      alert("사이즈를 선택해주세요.");
      return;
    }

    const existingCartRaw = sessionStorage.getItem("cart");
    let cart = existingCartRaw ? JSON.parse(existingCartRaw) : [];
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    if (existingItemIndex > -1) {
      cart[existingItemIndex].qty += quantity;
    } else {
      const newCartItem = {
        id: product.id,
        name: `${product.name} (${selectedColor}/${selectedSize})`,
        img: product.imageUrl,
        price: finalPrice, // ✅ 최종 가격을 담도록 수정 (할인 적용된 가격)
        color: selectedColor,
        size: selectedSize,
        qty: quantity,
      };
      cart.push(newCartItem);
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    if (confirm("상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")) {
      navigate("/cart");
    }
  };

  const handleBuyNow = () => {
    if (!selectedColor) {
      alert("색상을 선택해주세요.");
      return;
    }
    if (!selectedSize) {
      alert("사이즈를 선택해주세요.");
      return;
    }
    alert("상품주문(데모)");
  };

  const handleSaveClick = () => {
    alert("관심등록(데모)");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* main 섹션의 상하 패딩을 줄이고, flex-row 간격도 줄입니다 */}
      <main className="flex-grow container mx-auto py-6 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {" "}
          {/* flex-row 간격 줄임 */}
          {/* 왼쪽: 상품 이미지 */}
          <div className="lg:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full shadow-lg aspect-square object-cover"
            />
          </div>
          {/* 오른쪽: 상품 정보 및 옵션 */}
          <div className="lg:w-1/2 flex flex-col">
            {/* 카테고리 텍스트 크기 및 색상 변경 */}
            <p className="text-xs text-gray-400">
              {product.category.main} &gt; {product.category.sub}
            </p>
            {/* 상품 이름 글꼴 크기 변경 */}
            <h1 className="text-xl font-bold mt-1">{product.name}</h1>

            {/* 가격 섹션 디자인 변경 */}
            <div className="mt-3 pt-3 border-t">
              {" "}
              {/* 위쪽 패딩 및 border-t 간격 줄임 */}
              <div className="flex items-center gap-2">
                {" "}
                {/* 간격 줄임 */}
                {/* 원가 텍스트 크기 및 색상 변경 */}
                <span className="text-xs text-gray-400 line-through">
                  {toKRW(originalPrice)}
                </span>
                {/* 할인율 텍스트 크기 및 배경/글자색 변경 */}
                {/* 두 번째 이미지처럼 뱃지 형태로 변경 */}
                <span className="bg-red-500 text-white text-[10px] px-1 py-[1px] rounded">
                  {discountRate}% OFF
                </span>
              </div>
              {/* 최종 가격 텍스트 크기 및 굵기 변경 */}
              <p className="text-lg font-extrabold text-[#ca2947] mt-1">
                {toKRW(finalPrice)}
              </p>
            </div>

            {/* 브랜드, 적립금, 배송비 섹션 */}
            <div className="mt-3 pt-3 border-t text-xs space-y-1">
              {" "}
              {/* 텍스트 크기 및 간격, border-t 간격 줄임 */}
              <p>
                <span className="font-semibold w-16 inline-block">브랜드</span>{" "}
                {/* 너비 줄임 */}
                <span>다양한 쇼핑몰</span>
              </p>
              <p>
                <span className="font-semibold w-16 inline-block">적립금</span>
                <span>{toKRW(finalPrice * 0.0)} (0%)</span>
              </p>
              <p>
                <span className="font-semibold w-16 inline-block">배송비</span>
                <span>3,000원 (오픈이벤트 1주 무료배송)</span>
              </p>
            </div>

            {/* 색상/사이즈 선택 드롭다운 */}
            <div className="mt-3 pt-3 border-t space-y-2">
              {" "}
              {/* border-t 간격 줄임 */}
              <select
                onChange={(e) => setSelectedColor(e.target.value)}
                defaultValue=""
                className="w-full p-2 border rounded text-sm" // 패딩 및 텍스트 크기 줄임
              >
                <option value="" disabled>
                  색상 선택
                </option>
                <option value="블랙">블랙</option>
                <option value="아이보리">아이보리</option>
                <option value="그레이">그레이</option>
              </select>
              <select
                onChange={(e) => setSelectedSize(e.target.value)}
                defaultValue=""
                className="w-full p-2 border rounded text-sm" // 패딩 및 텍스트 크기 줄임
              >
                <option value="" disabled>
                  사이즈 선택
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>

            {/* 수량 조절 */}
            <div className="mt-3 pt-3 border-t flex items-center justify-between">
              {" "}
              {/* border-t 간격 줄임 */}
              <span className="font-semibold text-sm">수량</span>{" "}
              {/* 텍스트 크기 줄임 */}
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2 py-0.5 text-sm" // 패딩 및 텍스트 크기 줄임
                >
                  -
                </button>
                <span className="px-3 py-0.5 text-sm">{quantity}</span>{" "}
                {/* 패딩 및 텍스트 크기 줄임 */}
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-2 py-0.5 text-sm" // 패딩 및 텍스트 크기 줄임
                >
                  +
                </button>
              </div>
            </div>

            {/* TOTAL 가격 */}
            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <span className="font-bold text-base">TOTAL</span>{" "}
              {/* 텍스트 크기 줄임 */}
              <span className="font-bold text-xl text-[#ca2947]">
                {" "}
                {/* 텍스트 크기 및 색상 변경 */}
                {toKRW(finalPrice * quantity)}
              </span>
            </div>

            {/* 버튼 그룹 */}
            <div className="mt-4 flex gap-2">
              {" "}
              {/* 간격 줄임 */}
              <button
                className="p-2 border rounded text-base"
                onClick={handleSaveClick}
              >
                {" "}
                {/* 패딩 및 텍스트 크기 줄임 */}
                <FaHeart />
              </button>
              <button
                onClick={handleAddToCart}
                className="p-2 text-black border rounded no-underline text-base" // 패딩 및 텍스트 크기 줄임
              >
                <FaShoppingCart />
              </button>
              <button
                className="p-2 bg-black text-white rounded flex-grow text-base" // 패딩 및 텍스트 크기 줄임
                onClick={handleBuyNow}
              >
                바로 구매
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
