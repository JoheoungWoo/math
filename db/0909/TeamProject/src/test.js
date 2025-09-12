import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ALL_PRODUCTS } from "../data/products";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

// Font Awesome 아이콘을 사용하기 위해 react-icons 라이브러리가 필요합니다.
// 터미널에 `npm install react-icons` 또는 `yarn add react-icons`를 실행해주세요.
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { toKRW, toNumber } from "../utils/numberFormatConvert";

/** 문자열 가격을 숫자로 안전하게 변환하는 헬퍼 함수 ("29,900원" → 29900) */
// -완-

// -완-
const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // --- 상태 관리 ---
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedClick, setSelectedClick] = useState("");

  const product = ALL_PRODUCTS.find((p) => p.id === parseInt(productId));

  // --- 이벤트 핸들러 ---
  const handleAddToCart = () => {
    // 상품 옵션 선택 유효성 검사
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
        price: toNumber(product.price),
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
    // 상품 옵션 선택 유효성 검사
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

  // 상품이 없을 때의 UI
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

  // 가격 및 할인 계산 (임시 데이터)
  const originalPrice = toNumber(product.price) + 3000;
  const discountRate = 5;
  const finalPrice = toNumber(product.price);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 왼쪽: 상품 이미지 */}
          <div className="lg:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full rounded-lg shadow-lg aspect-square object-cover"
            />
          </div>

          {/* 오른쪽: 상품 정보 및 옵션 */}
          <div className="lg:w-1/2 flex flex-col">
            <p className="text-sm text-gray-500">
              {product.category.main} &gt; {product.category.sub}
            </p>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>

            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center">
                <span className="text-gray-500 line-through mr-3">
                  {toKRW(originalPrice)}원
                </span>
                <span className="text-red-500 font-bold text-lg">
                  {discountRate}% OFF
                </span>
              </div>
              <p className="text-3xl font-extrabold mt-1">
                {toKRW(finalPrice)}원
              </p>
            </div>

            <div className="mt-4 pt-4 border-t text-sm space-y-2">
              <p>
                <span className="font-semibold w-20 inline-block">브랜드</span>
                <span>다양한 쇼핑몰</span>
              </p>
              <p>
                <span className="font-semibold w-20 inline-block">적립금</span>
                <span>{toKRW(finalPrice * 0.01)}원 (1%)</span>
              </p>
              <p>
                <span className="font-semibold w-20 inline-block">배송비</span>
                <span>3,000원 (50,000원 이상 구매 시 무료)</span>
              </p>
            </div>

            <div className="mt-4 pt-4 border-t space-y-3">
              <select
                onChange={(e) => setSelectedColor(e.target.value)}
                defaultValue=""
                className="w-full p-3 border rounded"
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
                className="w-full p-3 border rounded"
              >
                <option value="" disabled>
                  사이즈 선택
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <span className="font-semibold">수량</span>
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1"
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <span className="font-bold text-lg">TOTAL</span>
              <span className="font-bold text-2xl">
                {toKRW(finalPrice * quantity)}
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="p-4 border rounded">
                <FaHeart />
              </button>
              <button
                onClick={handleAddToCart}
                className="p-4 border rounded flex items-center justify-center gap-2"
              >
                <FaShoppingCart />
              </button>
              <button
                className="p-4 bg-black text-white rounded flex-grow"
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
