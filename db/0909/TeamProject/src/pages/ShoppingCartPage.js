// src/pages/ShoppingCart.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { ALL_PRODUCTS } from "../data/products";
import { toKRW, toNumber } from "../utils/numberFormatConvert";

/** ALL_PRODUCTS → cart 아이템 형태로 매핑 */
const mapProductToCartItem = (p) => ({
  id: String(p.id), // ⚠️ ALL_PRODUCTS의 id는 유니크해야 합니다
  name: p.name,
  img: p.imageUrl ?? p.img ?? "/images/placeholder.png",
  price: toNumber(p.price),
  discount: 0,
  shippingType: "일반배송",
  shippingFee: 0,
  qty: 0,
});

/** 데모용: 비어있을 때 ALL_PRODUCTS 일부로 시드 */
// const makeMockCartFromAll = () =>
//   Array.isArray(ALL_PRODUCTS)
//     ? ALL_PRODUCTS.slice(0, 3).map(mapProductToCartItem)
//     : [];

/** 기존 카트에 productId 추가(이미 있으면 수량 +1) */
const addProductIdToCart = (prevCart, productId) => {
  const p = ALL_PRODUCTS.find((x) => String(x.id) === String(productId));
  if (!p) return prevCart; // 못 찾으면 변경 없음
  const pid = String(p.id);
  const idx = prevCart.findIndex((it) => String(it.id) === pid);
  if (idx >= 0) {
    const next = [...prevCart];
    next[idx] = { ...next[idx], qty: (next[idx].qty ?? 1) + 1 };
    return next;
  } else {
    return [...prevCart, mapProductToCartItem(p)];
  }
};

const ShoppingCart = () => {
  const { productId } = useParams();

  /** cart: sessionStorage 복원 우선 */
  const [cart, setCart] = useState(() => {
    try {
      const raw = sessionStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  /** productId가 있으면 카트에 추가 */
  useEffect(() => {
    if (!productId) return;
    setCart((prev) => {
      const next = addProductIdToCart(prev, productId);
      sessionStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
  }, [productId]);

  /** (옵션) 비어 있으면 ALL_PRODUCTS 일부로 시드 */
  // useEffect(() => {
  //   if (cart.length === 0 && !productId) {
  //     const seeded = makeMockCartFromAll();
  //     setCart(seeded);
  //     sessionStorage.setItem("cart", JSON.stringify(seeded));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps 없어도 됨
  // }, []);

  /** 선택 체크 관리 */

  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const allChecked =
    cart.length > 0 && cart.every((it) => selectedIds.has(it.id));

  const changeQty = (id, val) => {
    const q = Math.max(1, parseInt(val || "1", 10));
    setCart((prev) => {
      const next = prev.map((it) => (it.id === id ? { ...it, qty: q } : it));
      sessionStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    setSelectedIds((prev) => {
      if (cart.length === 0) return new Set();
      if (cart.every((it) => prev.has(it.id))) return new Set();
      return new Set(cart.map((it) => it.id));
    });
  };

  const deleteOne = (id) => {
    setCart((prev) => {
      const next = prev.filter((it) => it.id !== id);
      sessionStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const deleteSelected = () => {
    if (selectedIds.size === 0) return;
    setCart((prev) => {
      const next = prev.filter((it) => !selectedIds.has(it.id));
      sessionStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
    setSelectedIds(new Set());
  };

  const clearCart = () => {
    setCart([]);
    setSelectedIds(new Set());
    sessionStorage.removeItem("cart");
  };

  /** 합계 */
  const { subtotal, totalShipping, totalDiscount, grandTotal } = useMemo(() => {
    const subtotal = cart.reduce(
      (s, v) => s + toNumber(v.price) * (v.qty ?? 1),
      0
    );
    const totalShipping = cart.reduce(
      (s, v) => s + toNumber(v.shippingFee || 0),
      0
    );
    const totalDiscount = cart.reduce(
      (s, v) => s + toNumber(v.discount || 0),
      0
    );
    return {
      subtotal,
      totalShipping,
      totalDiscount,
      grandTotal: subtotal + totalShipping - totalDiscount,
    };
  }, [cart]);

  const orderAll = () => {
    if (cart.length === 0) return alert("장바구니가 비어 있습니다.");
    console.log("주문(전체):", cart);
    alert("전체상품 주문(데모)");
  };

  const orderSelected = () => {
    const picked = cart.filter((it) => selectedIds.has(it.id));
    if (picked.length === 0) return alert("선택된 상품이 없습니다.");
    console.log("주문(선택):", picked);
    alert("선택상품 주문(데모)");
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-6">
        <h2 className="text-2xl font-bold border-l-4 border-black pl-3 mb-4 text-gray-900">
          장바구니
        </h2>

        {/* 장바구니 표 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-black text-white text-sm">
                <th className="p-3 w-12">
                  <input
                    type="checkbox"
                    aria-label="전체선택"
                    checked={allChecked}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="p-3 w-20">이미지</th>
                <th className="p-3">상품정보</th>
                <th className="p-3 w-24">수량</th>
                <th className="p-3 w-32">상품금액</th>
                <th className="p-3 w-28">할인금액</th>
                <th className="p-3 w-28">배송구분</th>
                <th className="p-3 w-24">배송비</th>
                <th className="p-3 w-40">선택</th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              {cart.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-gray-500">
                    장바구니가 비어 있습니다.
                  </td>
                </tr>
              ) : (
                cart.map((item) => {
                  const lineTotal = toNumber(item.price) * (item.qty ?? 1);
                  const checked = selectedIds.has(item.id);

                  return (
                    <tr key={item.id} className="border-t">
                      <td className="p-3 align-middle">
                        <input
                          type="checkbox"
                          name="buy_item"
                          value={item.id}
                          checked={checked}
                          onChange={() => toggleSelect(item.id)}
                        />
                      </td>

                      <td className="p-3">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded"
                          onError={(e) => {
                            e.currentTarget.src = "/images/placeholder.png";
                          }}
                        />
                      </td>

                      <td className="p-3">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-gray-500">
                          상품코드: {item.id}
                        </div>
                      </td>

                      <td className="p-3">
                        <input
                          type="number"
                          min={1}
                          value={item.qty}
                          onChange={(e) => changeQty(item.id, e.target.value)}
                          className="w-20 border border-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </td>

                      <td className="p-3 font-semibold">{toKRW(lineTotal)}</td>

                      <td className="p-3 text-gray-700">
                        {item.discount ? `- ${toKRW(item.discount)}` : "-"}
                      </td>

                      <td className="p-3">{item.shippingType ?? "-"}</td>

                      <td className="p-3">
                        {toNumber(item.shippingFee)
                          ? toKRW(item.shippingFee)
                          : "무료"}
                      </td>

                      <td className="p-3">
                        <div className="flex flex-col gap-2">
                          <button
                            className="px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
                            onClick={() => alert("해당 상품만 주문(데모)")}
                          >
                            주문하기
                          </button>
                          <button
                            className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition"
                            onClick={() => deleteOne(item.id)}
                          >
                            삭제
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}

              {/* 합계 */}
              <tr className="border-t bg-gray-50">
                <td colSpan={9} className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 text-sm">
                    <div className="text-gray-700">
                      상품총금액:{" "}
                      <span className="font-semibold text-gray-900">
                        {toKRW(subtotal)}
                      </span>
                    </div>
                    <div className="text-gray-300 hidden sm:block">|</div>
                    <div className="text-gray-700">
                      총 배송비:{" "}
                      <span className="font-semibold text-gray-900">
                        {toKRW(totalShipping)}
                      </span>
                    </div>
                    <div className="text-gray-300 hidden sm:block">|</div>
                    <div className="text-gray-700">
                      총 할인:{" "}
                      <span className="font-semibold text-gray-900">
                        - {toKRW(totalDiscount)}
                      </span>
                    </div>
                    <div className="text-gray-300 hidden sm:block">=</div>
                    <div className="text-gray-900">
                      결제예정금액:{" "}
                      <span className="font-bold">{toKRW(grandTotal)}</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 하단 액션 */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-6">
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition"
              onClick={deleteSelected}
              disabled={selectedIds.size === 0}
            >
              선택상품 삭제
            </button>
            <button
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition"
              onClick={clearCart}
              disabled={cart.length === 0}
            >
              장바구니 비우기
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
              onClick={orderAll}
              disabled={cart.length === 0}
            >
              전체상품 주문
            </button>
            <button
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition"
              onClick={orderSelected}
              disabled={selectedIds.size === 0}
            >
              선택상품 주문
            </button>
          </div>
        </div>

        <div className="h-10" />
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCart;
