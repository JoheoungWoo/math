import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../layouts/Header";
import ProductCard from "../components/ProductCard";
import { ALL_PRODUCTS } from "../data/products";
import Footer from "../layouts/Footer";

// 카테고리별 상품 목록을 보여주는 페이지
const CategoryPage = () => {
  // URL에서 main과 sub 카테고리 값을 가져옵니다.
  const { main, sub } = useParams();
  // 페이지 이동을 위한 navigate 함수를 가져옵니다.
  const navigate = useNavigate();

  const subCategories = [
    ...new Set(
      ALL_PRODUCTS.filter((p) => p.category.main === main).map(
        (p) => p.category.sub
      )
    ),
  ];

  // URL 파라미터에 따라 보여줄 상품 목록을 필터링합니다.
  const products = ALL_PRODUCTS.filter((p) => {
    // 서브 카테고리까지 지정된 경우 (예: /category/Top/반팔티)
    if (sub) {
      return p.category.main === main && p.category.sub === sub;
    }
    // 메인 카테고리만 지정된 경우 (예: /category/Top)
    return p.category.main === main;
  });

  // 페이지 상단에 표시될 제목을 생성합니다.
  // const title = sub ? `${main} > ${sub}` : main; //sub값이 없으면 main만 출력 있으면 main> sub 경로를 포함해서 출력
  const title = sub ? sub : main; //삼항 연산자 sub값이 있으면 sub을 출력 아니면 main만 출력

  // 상품 카드를 클릭했을 때 실행될 함수입니다.
  const handleProductClick = (productId) => {
    // 클릭된 상품의 상세 페이지로 이동합니다.
    navigate(`/product/${productId}`);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 1. 이제 Header만 렌더링하면 MainMenu도 함께 렌더링됩니다. */}
      <Header />
      <main className="flex-grow">
        {/* 2. 필터링된 상품 목록을 보여주는 섹션입니다. */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold border-l-4 border-black pl-3 mb-10 text-gray-900">
              {title}
            </h2>
            <div className="flex items-center flex-wrap gap-4 mb-12 ">
              {subCategories.map((subBox) => (
                <Link
                  key={subBox}
                  to={`/category/${main}/${subBox}`}
                  // 5. 현재 URL의 sub 파라미터와 버튼의 서브 카테고리 이름이 같을 때 '활성' 스타일을 적용합니다.
                  className={`px-5 py-2 border rounded-md no-underline text-sm ${
                    sub === subBox
                      ? "border-black bg-gray-100 font-semibold text-black"
                      : "border-gray-300 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {subBox}
                </Link>
              ))}
            </div>
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <div className="text-sm">
                <span className="font-bold">{products.length}</span> Items
              </div>
            </div>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-10">
                해당 카테고리의 상품이 없습니다.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
