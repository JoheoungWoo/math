// src/pages/BestPage.js

import React, { useMemo } from "react"; // 👈 useMemo import
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProductCard from "../components/ProductCard";
import { ALL_PRODUCTS } from "../data/products"; // 👈 BEST_PRODUCTS 대신 ALL_PRODUCTS import

const BestPage = () => {
  const navigate = useNavigate();

  // 👇 useMemo를 사용해 처음 렌더링될 때만 랜덤 상품 9개를 선택합니다.
  const bestProducts = useMemo(() => {
    // 1. ALL_PRODUCTS 배열을 복사하여 원본을 훼손하지 않도록 합니다.
    const shuffled = [...ALL_PRODUCTS];

    // 2. 배열을 무작위로 섞습니다 (Fisher-Yates Shuffle 알고리즘).
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 3. 섞인 배열에서 앞 9개만 잘라서 반환합니다.
    return shuffled.slice(0, 9);
  }, []); // 의존성 배열을 []로 비워두어 최초 1회만 실행되도록 설정

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">🔥 Best 상품</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 👇 동적으로 생성된 bestProducts 배열을 사용합니다. */}
          {bestProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BestPage;
