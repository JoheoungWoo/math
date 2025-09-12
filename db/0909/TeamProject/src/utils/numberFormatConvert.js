/** "29,900원" -> 29900 */
const toNumber = (v) =>
  typeof v === "number"
    ? v
    : Number(String(v ?? "").replace(/[^\d.-]/g, "") || 0);

/** 29900 -> "29,900원" */
const toKRW = (n) => toNumber(n).toLocaleString("ko-KR") + "원";

const getOriginalPrice = (product) => toNumber(product.price); // 정가 (배송비 등 추가된 가격)

const getDiscountRate = (product) => 4; // 할인율 => 나중에 사용 예정

// 상품 가격(product.price)에 할인율을 적용합니다.
const getDiscountedPrice = (product) => {
  const original = getOriginalPrice(product);
  const rate = getDiscountRate(product);
  return original * (1 - rate / 100);
};

// 10원 단위 절삭 (100원 단위로 내림 처리)
const getFinalPrice = (product) => {
  const discounted = getDiscountedPrice(product);
  return Math.floor(discounted / 100) * 100;
};

export {
  toKRW,
  toNumber,
  getOriginalPrice,
  getDiscountedPrice,
  getFinalPrice,
  getDiscountRate,
};
