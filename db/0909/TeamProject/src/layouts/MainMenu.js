import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_PRODUCTS, mainNavItems, subNavItems } from '../data/products';

const MainMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="sticky top-0 z-50 w-full border-t ">
      <div className="container mx-auto px-6 h-12 flex items-center justify-between">
        {/* 기존 카테고리 메뉴 로직을 이곳으로 이동 */}
        {mainNavItems.map((idx) => (
          <div
            key={idx}
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveMenu(idx)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              to={
                idx === 'Best'
                  ? '/best'
                  : idx === 'Event'
                  ? '/events'
                  : `/category/${idx}`
              }
              //idx를 받았을때 idx값이 best이면 /best로 이동 Event이면 /events로 이동 나머지는 /category/${idx} 로이동
              className="text-gray-700 hover:text-black font-medium no-underline"
            >
              {idx}
            </Link>

            {activeMenu === idx &&
              (() => {
                const subs = subNavItems.filter((sub) =>
                  ALL_PRODUCTS.some(
                    (p) => p.category.main === idx && p.category.sub === sub
                  )
                );
                return subs.length > 0 ? (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white shadow-lg rounded-md p-4 w-48 border">
                    {subs.map((subCategory) => (
                      <Link
                        key={subCategory}
                        to={`/category/${idx}/${subCategory}`}
                        className="text-black block w-full text-left px-2 py-1 hover:bg-gray-100 no-underline"
                      >
                        {subCategory}
                      </Link>
                    ))}
                  </div>
                ) : null;
              })()}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MainMenu;
