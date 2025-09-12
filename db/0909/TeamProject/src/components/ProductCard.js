import React from "react";
import {
  getFinalPrice,
  getOriginalPrice,
  toKRW,
} from "../utils/numberFormatConvert";

const ProductCard = ({ product, onProductClick }) => {
  // 원가와 판매가 계산 (데모용으로, 판매가의 약 10%를 더한 값을 원가로 설정)
  const originalPrice = getOriginalPrice(product);
  const finalPrice = getFinalPrice(product);

  return (
    // group 클래스로 하위 요소들의 호버 효과를 제어합니다.
    <div
      className="group cursor-pointer"
      onClick={() => onProductClick(product.id)}
    >
      {/* 1. 이미지 컨테이너: 정사각형 비율(aspect-square)로 수정 */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square ">
        <img
          src={product.imageUrl}
          alt={`[${product.name} 이미지]`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* 2. 텍스트 컨테이너: 왼쪽 정렬 및 폰트 크기 조정 */}
      <div className="pt-3 text-left">
        <h3 className="font-bold text-[13px] text-[#222222] truncate">
          {product.name}
        </h3>

        {/* 3. 가격 표시: 원가(취소선)와 판매가를 함께 표시하도록 수정 */}
        <div className="mt-1 text-xs">
          <span className="text-[13px] text-[#222222] line-through mr-2">
            {toKRW(originalPrice)}
          </span>
          <span className="font-bold text-[13px] text-[#ca2947]">
            {toKRW(finalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
