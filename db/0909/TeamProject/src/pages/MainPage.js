import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProductCard from "../components/ProductCard";
import { ALL_PRODUCTS } from "../data/products";
import ImageSlider from "../components/ImageSlider";

const MainPage = () => {
  const navigate = useNavigate();
  const currentUser = useMemo(() => {
    try {
      return JSON.parse(sessionStorage.getItem("currentUser") || "null");
      // sessionStorage에 "user"라는 키가 있으면 JSON.parse() 해서 객체 반환
      // 없으면 "null"을 파싱하여 null 반환
    } catch {
      return null; // JSON 파싱 실패 시 안전하게 null 반환
    }
  }, []);

  // 'BEST ITEMS' 섹션에 보여줄 상품들을 선택합니다.
  // 여기서는 전체 상품 중 앞 12개만 잘라서 보여주겠습니다.
  const bestTopItem = ALL_PRODUCTS.slice(0, 8);
  const StyleBook = ALL_PRODUCTS.slice(32, 44);

  // 상품 카드를 클릭했을 때 상세 페이지로 이동하는 함수입니다.
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="bg-white">
      <Header />

      <main>
        <section className="container mx-auto py-8">
          <ImageSlider />
        </section>
        {/* === 1. 메인 배너 섹션 === */}
        <section className="text-center bg-gray-100 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">BEST 상의 모음</h2>
            <p className="text-gray-600 mb-8">
              지금 가장 인기 있는 트렌디한 반팔티를 만나보세요.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {bestTopItem.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                />
              ))}
            </div>
          </div>
        </section>

        {/* === 2. BEST ITEMS 상품 그리드 섹션 === */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-2">사장님 PICK</h2>
            <p className="text-center text-gray-500 mb-10">
              코디를 모르는 사람도 무난하게 매칭 가능한 이쁜 바지들
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {StyleBook.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
