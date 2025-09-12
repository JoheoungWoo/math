// src/components/ImageSlider.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SLIDER_IMAGES } from "../data/products";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // 다음 인덱스로 이동 (마지막이면 처음으로)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDER_IMAGES.length);
    }, 8000); // 8초마다 이미지 변경

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(timer);
  }, []);

  return (
    // relative: 자식 absolute 요소의 기준점, h-96: 높이 지정, overflow-hidden: 벗어나는 이미지 숨김
    <div className="relative w-full h-[500px] overflow-hidden">
      {SLIDER_IMAGES.map((image, idx) => (
        <Link to={`/product/${image.productId}`} key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            // absolute: 이미지를 겹치게 함, transition: 부드러운 효과, opacity: 투명도
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default ImageSlider;
