// 모든 상품 데이터를 담고 있는 배열

const mainNavItems = ['Best', 'Top', 'Bottom', 'Outer', 'Acc'];

const subNavItems = [
  '티셔츠',
  '맨투맨',
  '후드티',
  '니트',
  '청바지',
  '슬랙스',
  '반바지',
  '스커트',
  '자켓',
  '코트',
  '가디건',
  '모자',
  '가방',
  '신발',
  '주얼리',
];

const ALL_PRODUCTS = [
  // Top Category (티셔츠,맨투맨,후드티,니트)
  {
    id: 1,
    category: { main: 'Top', sub: '티셔츠' },
    name: '오버핏 76 반팔티',
    price: '28,900원',
    imageUrl:
      'https://www.bymono.com/web/product/big/202508/d14a247adcee817448cfbf505fe656fb.webp',
    description:
      '시원한 소재로 제작되어 여름철에 입기 좋은 기본 반팔 티셔츠입니다.',
  },
  {
    id: 2,
    category: { main: 'Top', sub: '티셔츠' },
    name: '스윗퍼핏 오버핏 반팔티',
    price: '23,499원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/5b14302e899e3b9132f44ca3ecb6f897.webp',
    description:
      '시원한 소재로 제작되어 여름철에 입기 좋은 기본 반팔 티셔츠입니다.',
  },
  {
    id: 3,
    category: { main: 'Top', sub: '티셔츠' },
    name: '셔링 반팔 티셔츠',
    price: '21,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/139b5f1e5062bacf852598ebc34ad5ce.webp',
    description:
      '시원한 소재로 제작되어 여름철에 입기 좋은 기본 반팔 티셔츠입니다.',
  },
  {
    id: 4,
    category: { main: 'Top', sub: '티셔츠' },
    name: '오버핏 박스 반팔티',
    price: '26,400원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/e88238997a4f5a7b4bedde5c410cb9ef.jpg',
    description:
      '시원한 소재로 제작되어 여름철에 입기 좋은 기본 반팔 티셔츠입니다.',
  },
  {
    id: 5,
    category: { main: 'Top', sub: '티셔츠' },
    name: '모던 라인 반팔 셔츠',
    price: '29,000원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/3ba77bec2cf5759bf315a9931c0a7668.webp',
    description:
      '시원한 소재로 제작되어 여름철에 입기 좋은 기본 반팔 티셔츠입니다.',
  },
  {
    id: 6,
    category: { main: 'Top', sub: '티셔츠' },
    name: '그랑 반팔티',
    price: '24,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/a6b6f52158e5e6a9ccfc411d1e6739e0.jpg',
    description:
      '시원한 소재로 제작되어 여름철에 입기 좋은 기본 반팔 티셔츠입니다.',
  },
  {
    id: 7,
    category: { main: 'Top', sub: '티셔츠' },
    name: '선셋 오션 반팔티',
    price: '38,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/f53d2d556b37737d273f548c1c83381d.webp',
    description:
      '시원한 소재로 제작되어 여름철에 입기 좋은 기본 반팔 티셔츠입니다.',
  },
  {
    id: 8,
    category: { main: 'Top', sub: '티셔츠' },
    name: '졸리 데이 반팔티',
    price: '12,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/001243ecd7c004b1526ea628641e7877.webp',
    description:
      '시원한 소재로 제작되어 여름철에 입기 좋은 기본 반팔 티셔츠입니다.',
  },
  {
    id: 9,
    category: { main: 'Top', sub: '맨투맨' },
    name: '나일롱 맨투맨',
    price: '36,600원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/c099358cab80c7f8b3da4c65450b3756.jpg',
    description:
      '부드러운 면 소재로 제작되어 착용감이 뛰어난 긴팔 티셔츠입니다.',
  },
  {
    id: 10,
    category: { main: 'Top', sub: '맨투맨' },
    name: '소프트 크림 셋업',
    price: '16,600원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202509/bdc991c24c2692387307e2de3ed137c0.webp',
    description:
      '부드러운 면 소재로 제작되어 착용감이 뛰어난 긴팔 티셔츠입니다.',
  },
  {
    id: 11,
    category: { main: 'Top', sub: '맨투맨' },
    name: '켈리포니아 맨투맨',
    price: '39,000원',
    imageUrl:
      'https://bymono.com/web/product/medium/202504/81877cad4f7594b924c22e7fc34d47dd.jpg',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 12,
    category: { main: 'Top', sub: '맨투맨' },
    name: '조지아 주머니 맨투맨',
    price: '19,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202503/6cf1758e3280c2fc0ecfcf6830f5be8c.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 13,
    category: { main: 'Top', sub: '맨투맨' },
    name: '애리 오버핏 럭비 맨투맨',
    price: '52,000원',
    imageUrl:
      'https://bymono.com/web/product/medium/202509/c980a4dece9814c2b58fda77564cbbb1.jpg',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 14,
    category: { main: 'Top', sub: '맨투맨' },
    name: '디렉터 쭈리 맨투맨',
    price: '39,000원',
    imageUrl:
      'https://bymono.com/web/product/medium/202503/7cfd2865fdc6c7a6edfe4c9d1a8e1be1.jpg',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 15,
    category: { main: 'Top', sub: '맨투맨' },
    name: '1872 아노락 맨투맨',
    price: '29,000원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202502/309b6e253b7efbbbe33dd3744864c31c.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 16,
    category: { main: 'Top', sub: '맨투맨' },
    name: '나다 브이넥 2줄 트랙 맨투맨',
    price: '31,300원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202502/1445e395d065bfb903f0783d0cf8acaa.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 17,
    category: { main: 'Top', sub: '후드티' },
    name: '툴즈 후드 아노락',
    price: '35,500원',
    imageUrl:
      'https://bymono.com/web/product/medium/202502/afe91a0b1a87375926c471193a1f4d29.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 18,
    category: { main: 'Top', sub: '후드티' },
    name: '피그먼트 후드티',
    price: '39,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202502/e02937003afae3af0621b4c58f289c0e.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 19,
    category: { main: 'Top', sub: '후드티' },
    name: '갓플랜 후드티',
    price: '25,500원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202503/e7e9709c290d8bec5aaeda9195e468ad.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 20,
    category: { main: 'Top', sub: '후드티' },
    name: '요요 배색 루즈핏 후드티',
    price: '22,300원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202503/42f2515569cedc1f314b59a2f5072f55.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 21,
    category: { main: 'Top', sub: '후드티' },
    name: '팬스 워싱 오버핏 후드티',
    price: '43,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202411/c4f07cc839128333ca9cc650114cf21c.jpg',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 22,
    category: { main: 'Top', sub: '후드티' },
    name: '배색 레터링 오버핏 후드티',
    price: '36,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202409/382e1df977a71257466b2ef28cd904b5.jpg',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 23,
    category: { main: 'Top', sub: '후드티' },
    name: '홀리데이 배색 후드티',
    price: '33,300원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202502/900ca2ae54ea9c357349d1291316e637.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 24,
    category: { main: 'Top', sub: '후드티' },
    name: '파이엇 후드티',
    price: '28,500원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202502/cba97b48df51be82395dd7b0da8b31e6.webp',
    description:
      '앞면 로고가 깔끔하게 뽑힌 맨투맨으로 어떤 하의에도 어울리는 실패 없는 코디 아이템! 캐주얼하면서도 데일리하게 입혀질 맨투맨을 찾으셨던 분들에게 추천드려요',
  },
  {
    id: 25,
    category: { main: 'Top', sub: '니트' },
    name: '트루 단가라 니트',
    price: '26,700원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202509/8cf54d4b1d8a09843837f47dcb3f0f15.webp',
    description:
      '하늘하늘한 소재로 제작되어 여성스러운 무드를 연출하는 블라우스입니다.',
  },
  {
    id: 26,
    category: { main: 'Top', sub: '니트' },
    name: '페인 라운드 오버핏 니트',
    price: '44,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202504/ea0610d887b4b3a7b684a0d4cb373254.jpg',
    description:
      '하늘하늘한 소재로 제작되어 여성스러운 무드를 연출하는 블라우스입니다.',
  },
  {
    id: 27,
    category: { main: 'Top', sub: '니트' },
    name: '마르 레터링 올 라운드 니트',
    price: '50,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202411/4187914f9959ff3e24bf8dc5a804e500.jpg',
    description:
      '하늘하늘한 소재로 제작되어 여성스러운 무드를 연출하는 블라우스입니다.',
  },
  {
    id: 28,
    category: { main: 'Top', sub: '니트' },
    name: '소프트 라인 앙고라 니트',
    price: '61,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202410/782674b9040c7a19f5bde2f7ff7c4ac0.jpg',
    description:
      '하늘하늘한 소재로 제작되어 여성스러운 무드를 연출하는 블라우스입니다.',
  },
  {
    id: 29,
    category: { main: 'Top', sub: '니트' },
    name: '리본 브러쉬 루즈핏 니트',
    price: '40,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202502/62cb909ee01f58b3c4a529291f32a447.webp',
    description:
      '하늘하늘한 소재로 제작되어 여성스러운 무드를 연출하는 블라우스입니다.',
  },
  {
    id: 30,
    category: { main: 'Top', sub: '니트' },
    name: '노르딕 패턴 폴라 니트',
    price: '38,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202501/6c22550e5fadbb1aa0cdcc631cfa993f.webp',
    description:
      '하늘하늘한 소재로 제작되어 여성스러운 무드를 연출하는 블라우스입니다.',
  },
  {
    id: 31,
    category: { main: 'Top', sub: '니트' },
    name: '스토리 헤비 라운드 니트',
    price: '43,000원',
    imageUrl:
      'https://bymono.com/web/product/medium/202409/9b84afa1538e700fda44a42bcb304284.jpg',
    description:
      '하늘하늘한 소재로 제작되어 여성스러운 무드를 연출하는 블라우스입니다.',
  },
  {
    id: 32,
    category: { main: 'Top', sub: '니트' },
    name: '브러쉬 눈꽃 니트',
    price: '37,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202412/ff185a5ba3c9a16113b004a245ccd14a.webp',
    description:
      '하늘하늘한 소재로 제작되어 여성스러운 무드를 연출하는 블라우스입니다.',
  },

  // Bottom Category (청바지,슬랙스,스커트,반바지)
  {
    id: 33,
    category: { main: 'Bottom', sub: '청바지' },
    name: '빈티지 워싱 팬츠',
    price: '37,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202508/f6ad7a38558cdf9d760aabe3725b4cbc.jpg',
    description:
      '어떤 상의와도 잘 어울리는 클래식한 스트레이트 핏 데님 팬츠입니다.',
  },
  {
    id: 34,
    category: { main: 'Bottom', sub: '청바지' },
    name: '빈티지 비조 와이드 팬츠',
    price: '46,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202507/2e10593234b0593fa26bb14ac84c5a9e.webp',
    description:
      '어떤 상의와도 잘 어울리는 클래식한 스트레이트 핏 데님 팬츠입니다.',
  },
  {
    id: 35,
    category: { main: 'Bottom', sub: '청바지' },
    name: '하버 와이드핏 팬츠',
    price: '32,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/3a575076fa7896f3a0f9b8d21430fe5e.webp',
    description:
      '어떤 상의와도 잘 어울리는 클래식한 스트레이트 핏 데님 팬츠입니다.',
  },
  {
    id: 36,
    category: { main: 'Bottom', sub: '청바지' },
    name: '더크랙 데미지 와이드 팬츠',
    price: '34,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202506/a674d350333ebdbfc71429156761aeeb.webp',
    description:
      '어떤 상의와도 잘 어울리는 클래식한 스트레이트 핏 데님 팬츠입니다.',
  },
  {
    id: 37,
    category: { main: 'Bottom', sub: '청바지' },
    name: '롱롱 픽턴 데님 팬츠',
    price: '39,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202504/6e92bc0a0ba0510d54550aa9f43d4989.jpg',
    description:
      '어떤 상의와도 잘 어울리는 클래식한 스트레이트 핏 데님 팬츠입니다.',
  },
  {
    id: 38,
    category: { main: 'Bottom', sub: '청바지' },
    name: '모노진 텐션 와이드핏 데님팬츠',
    price: '36,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202508/a4eff887677ebeca40db2318d67e6c13.webp',
    description:
      '어떤 상의와도 잘 어울리는 클래식한 스트레이트 핏 데님 팬츠입니다.',
  },
  {
    id: 39,
    category: { main: 'Bottom', sub: '청바지' },
    name: '웨스트업 데님 와이드 팬츠',
    price: '29,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202505/f98e3eb7538605377c8aae2595ad434a.webp',
    description:
      '어떤 상의와도 잘 어울리는 클래식한 스트레이트 핏 데님 팬츠입니다.',
  },
  {
    id: 40,
    category: { main: 'Bottom', sub: '청바지' },
    name: '라이트웨이 워싱 데님 팬츠',
    price: '25,500원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202504/99e656e209d8e3d8af4030c33f2a01cc.webp',
    description:
      '어떤 상의와도 잘 어울리는 클래식한 스트레이트 핏 데님 팬츠입니다.',
  },
  {
    id: 41,
    category: { main: 'Bottom', sub: '슬랙스' },
    name: '3TYPE 네이브 와이드 슬랙스',
    price: '24,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202508/03bf2ab10293efe48c5f462b51044878.jpg',
    description: '세련된 핏을 연출해주는 핀턱 디테일의 와이드 슬랙스입니다.',
  },
  {
    id: 42,
    category: { main: 'Bottom', sub: '슬랙스' },
    name: '스트라이프 텐셀 밴딩 슬랙스',
    price: '59,900원',
    imageUrl:
      'https://bymono.com/web/product/medium/202504/f3b75e9b1dbb2d94ed0db06433987c71.jpg',
    description: '세련된 핏을 연출해주는 핀턱 디테일의 와이드 슬랙스입니다.',
  },
  {
    id: 43,
    category: { main: 'Bottom', sub: '슬랙스' },
    name: '세미 와이드 카고 슬랙스',
    price: '29,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202502/ad46e5d6ed8bec0b4e13b9bfa92d501e.webp',
    description: '세련된 핏을 연출해주는 핀턱 디테일의 와이드 슬랙스입니다.',
  },
  {
    id: 44,
    category: { main: 'Bottom', sub: '슬랙스' },
    name: '모노 인생 뉴테크 원핀턱 슬랙스',
    price: '48,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/c1011c2c23365e3d5504e88434f4bea8.webp',
    description: '세련된 핏을 연출해주는 핀턱 디테일의 와이드 슬랙스입니다.',
  },
  {
    id: 45,
    category: { main: 'Bottom', sub: '슬랙스' },
    name: '디트 핀턱 스판 슬랙스',
    price: '44,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202501/63851063ccd9b58f278b30c12b1eedd8.jpg',
    description: '세련된 핏을 연출해주는 핀턱 디테일의 와이드 슬랙스입니다.',
  },
  {
    id: 46,
    category: { main: 'Bottom', sub: '슬랙스' },
    name: '트리 코듀로이 슬랙스',
    price: '54,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202410/1a2e1a838545688618ecca2a36a9fcb1.jpg',
    description: '세련된 핏을 연출해주는 핀턱 디테일의 와이드 슬랙스입니다.',
  },
  {
    id: 47,
    category: { main: 'Bottom', sub: '슬랙스' },
    name: '어텀 비즈니스 사이드 밴딩 슬랙스',
    price: '31,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/ce355a3a2e4841b04a8ad48c01ac8f57.webp',
    description: '세련된 핏을 연출해주는 핀턱 디테일의 와이드 슬랙스입니다.',
  },
  {
    id: 48,
    category: { main: 'Bottom', sub: '슬랙스' },
    name: 'Class 프리미엄 슬랙스',
    price: '44,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202503/de0cc6eb63836abe537bfedf01b5b29b.jpg',
    description: '세련된 핏을 연출해주는 핀턱 디테일의 와이드 슬랙스입니다.',
  },
  {
    id: 49,
    category: { main: 'Bottom', sub: '스커트' },
    name: '버닝 데님 청치마',
    price: '26,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202506/675b17359ac7004893987f54c4658482.webp',
    description:
      '걸을 때마다 살랑이는 실루엣이 아름다운 플리츠 롱 스커트입니다.',
  },
  {
    id: 50,
    category: { main: 'Bottom', sub: '스커트' },
    name: '카고 포켓 데님 미니스커트',
    price: '19,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202506/1b60fdcd84493703f8ed60cb789fe05b.webp',
    description:
      '걸을 때마다 살랑이는 실루엣이 아름다운 플리츠 롱 스커트입니다.',
  },
  {
    id: 51,
    category: { main: 'Bottom', sub: '스커트' },
    name: '하이틴업 데님 미니 플리츠 스커트',
    price: '32,100원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202504/5695d8a31579d3a0a69269da96918a95.webp',
    description:
      '걸을 때마다 살랑이는 실루엣이 아름다운 플리츠 롱 스커트입니다.',
  },
  {
    id: 52,
    category: { main: 'Bottom', sub: '스커트' },
    name: '얼반란스 밴딩 스커트',
    price: '21,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202503/699a41016da2a686d24aaf3820571c4c.webp',
    description:
      '걸을 때마다 살랑이는 실루엣이 아름다운 플리츠 롱 스커트입니다.',
  },
  {
    id: 53,
    category: { main: 'Bottom', sub: '스커트' },
    name: '가을코디 데일리 캐쥬얼 스커트',
    price: '18,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202309/4baa5d2710fef8a6b32ebbc46b8b9c6d.webp',
    description:
      '걸을 때마다 살랑이는 실루엣이 아름다운 플리츠 롱 스커트입니다.',
  },
  {
    id: 54,
    category: { main: 'Bottom', sub: '스커트' },
    name: '업플레이 스커트',
    price: '23,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202505/0bd1a2cc2060f66e000694063337fb15.webp',
    description:
      '걸을 때마다 살랑이는 실루엣이 아름다운 플리츠 롱 스커트입니다.',
  },
  {
    id: 55,
    category: { main: 'Bottom', sub: '스커트' },
    name: '플리츠 랩 스커트',
    price: '22,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202506/3c59517f467d3ead6fe4bd7e29deded1.webp',
    description:
      '걸을 때마다 살랑이는 실루엣이 아름다운 플리츠 롱 스커트입니다.',
  },
  {
    id: 56,
    category: { main: 'Bottom', sub: '스커트' },
    name: '티어드 미니 스커트',
    price: '27,500원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/6a41809a015223b970ab01fd23bf0cc3.webp',
    description:
      '걸을 때마다 살랑이는 실루엣이 아름다운 플리츠 롱 스커트입니다.',
  },
  {
    id: 57,
    category: { main: 'Bottom', sub: '반바지' },
    name: '와이드 버뮤다 팬츠',
    price: '36,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/e1b1232e726a973954463b078593759c.webp',
    description:
      '베이직한 디자인으로 여름철 필수 아이템인 코튼 버뮤다 팬츠입니다.',
  },

  {
    id: 58,
    category: { main: 'Bottom', sub: '반바지' },
    name: '데님 하프 팬츠',
    price: '33,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202507/3f103f543255e665420dcbe70c408355.jpg',
    description:
      '베이직한 디자인으로 여름철 필수 아이템인 코튼 버뮤다 팬츠입니다.',
  },
  {
    id: 59,
    category: { main: 'Bottom', sub: '반바지' },
    name: '유틸 패치 카고 밴딩 반바지',
    price: '21,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/2c4cb88884e2c0458959e14a8a1677d4.webp',
    description:
      '베이직한 디자인으로 여름철 필수 아이템인 코튼 버뮤다 팬츠입니다.',
  },
  {
    id: 60,
    category: { main: 'Bottom', sub: '반바지' },
    name: '이지핏 데님 밴딩 반바지',
    price: '17,100원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/0a9b24af4717e8ac226a6225e5b31691.webp',
    description:
      '베이직한 디자인으로 여름철 필수 아이템인 코튼 버뮤다 팬츠입니다.',
  },

  {
    id: 61,
    category: { main: 'Bottom', sub: '반바지' },
    name: '라온 포켓 스트링 하프팬츠',
    price: '32,100원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202507/3ff6aae708f95397733df0b539e2cf83.webp',
    description:
      '베이직한 디자인으로 여름철 필수 아이템인 코튼 버뮤다 팬츠입니다.',
  },

  {
    id: 62,
    category: { main: 'Bottom', sub: '반바지' },
    name: '마인드 쮸리 버뮤다 팬츠',
    price: '19,400원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202506/7065d35b3cae20350bec261fdf81c88e.jpg',
    description:
      '베이직한 디자인으로 여름철 필수 아이템인 코튼 버뮤다 팬츠입니다.',
  },

  {
    id: 63,
    category: { main: 'Bottom', sub: '반바지' },
    name: '포버데일 카고 데일리 반바지',
    price: '23,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202507/486849b6b4de80e661a5b58639ba4d4f.webp',
    description:
      '베이직한 디자인으로 여름철 필수 아이템인 코튼 버뮤다 팬츠입니다.',
  },

  {
    id: 64,
    category: { main: 'Bottom', sub: '반바지' },
    name: '두톤 포켓 버뮤다 팬츠',
    price: '32,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202507/4336a53a0d377a980e611c0153f5af25.webp',
    description:
      '베이직한 디자인으로 여름철 필수 아이템인 코튼 버뮤다 팬츠입니다.',
  },

  // Outer Category(자켓,코트,가디건)
  {
    id: 65,
    category: { main: 'Outer', sub: '자켓' },
    name: '유틸리티 오버핏 항공 점퍼',
    price: '63,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202503/3f4ff958a6712b44bd6a642133acd87e.jpg',
    description: '시크한 무드를 연출하는 오버핏 디자인의 블레이저 자켓입니다.',
  },
  {
    id: 66,
    category: { main: 'Outer', sub: '자켓' },
    name: '멘즈 투웨이 오버 레더 자켓',
    price: '72,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202509/1512dd11d7f1e0126f9523990f17a6a9.jpg',
    description: '시크한 무드를 연출하는 오버핏 디자인의 블레이저 자켓입니다.',
  },
  {
    id: 67,
    category: { main: 'Outer', sub: '자켓' },
    name: '어센틱 윈드브레이커 자켓',
    price: '59,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/c075858f5c7aae553fa8d3fc67b79e48.webp',
    description: '시크한 무드를 연출하는 오버핏 디자인의 블레이저 자켓입니다.',
  },
  {
    id: 68,
    category: { main: 'Outer', sub: '자켓' },
    name: '워시드 데님 반팔 자켓',
    price: '49,000원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202507/99ade2d1f64a1e952883fceb2914b396.webp',
    description: '시크한 무드를 연출하는 오버핏 디자인의 블레이저 자켓입니다.',
  },
  {
    id: 69,
    category: { main: 'Outer', sub: '자켓' },
    name: '클레어 데님 청 자켓',
    price: '24,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202506/9d70a264275f66fe35b55a9bc7b1a84b.webp',
    description: '시크한 무드를 연출하는 오버핏 디자인의 블레이저 자켓입니다.',
  },
  {
    id: 70,
    category: { main: 'Outer', sub: '자켓' },
    name: '비스켓 바람막이 야상 자켓',
    price: '51,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202502/267d27be4d8936a64126130b84ae84d4.webp',
    description: '시크한 무드를 연출하는 오버핏 디자인의 블레이저 자켓입니다.',
  },
  {
    id: 71,
    category: { main: 'Outer', sub: '자켓' },
    name: '바이오워싱 코튼 트리커 자켓',
    price: '84,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202409/0fc63f6f8d7dd001bcdec908d040a443.jpg',
    description: '시크한 무드를 연출하는 오버핏 디자인의 블레이저 자켓입니다.',
  },
  {
    id: 72,
    category: { main: 'Outer', sub: '자켓' },
    name: '포튼 코듀로이 후드 집업 자켓',
    price: '61,400원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202411/80aa5ec53d89b24673df2830db6ac725.jpg',
    description: '시크한 무드를 연출하는 오버핏 디자인의 블레이저 자켓입니다.',
  },
  {
    id: 73,
    category: { main: 'Outer', sub: '코트' },
    name: '메르시 더블 롱코트',
    price: '149,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202412/741444861b0f0afeb25e50cab4066b7c.jpg',
    description: '유행을 타지 않는 디자인의 클래식한 트렌치 코트입니다.',
  },
  {
    id: 74,
    category: { main: 'Outer', sub: '코트' },
    name: '카프 발마칸 울 코트',
    price: '136,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202412/8909ef2f94c2daef795697cbbff286a2.jpg',
    description: '유행을 타지 않는 디자인의 클래식한 트렌치 코트입니다.',
  },
  {
    id: 75,
    category: { main: 'Outer', sub: '코트' },
    name: '롱 후드 야상 떡볶이 코트',
    price: '69,000원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202310/455cf890f837d6fd433c71d2b767aa4a.webp',
    description: '유행을 타지 않는 디자인의 클래식한 트렌치 코트입니다.',
  },
  {
    id: 76,
    category: { main: 'Outer', sub: '코트' },
    name: '가벼운 롱 자켓 코트',
    price: '72,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202402/fbb44eaaaff6f528c77fac96dc340526.webp',
    description: '유행을 타지 않는 디자인의 클래식한 트렌치 코트입니다.',
  },
  {
    id: 77,
    category: { main: 'Outer', sub: '코트' },
    name: '모던 세미와이드 싱글 코트',
    price: '99,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202405/536683319fd98aa9421f1ef7dea1d266.jpg',
    description: '유행을 타지 않는 디자인의 클래식한 트렌치 코트입니다.',
  },
  {
    id: 78,
    category: { main: 'Outer', sub: '코트' },
    name: '트윌 롱 트렌치코트',
    price: '119,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202502/e4f16a1a1a2d8b50c201874bf1c085ba.webp',
    description: '유행을 타지 않는 디자인의 클래식한 트렌치 코트입니다.',
  },
  {
    id: 79,
    category: { main: 'Outer', sub: '코트' },
    name: '모노 캐시라이크 오버 싱글코트',
    price: '126,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202502/36516dae38050ed0fba44a8b4854d49e.webp',
    description: '유행을 타지 않는 디자인의 클래식한 트렌치 코트입니다.',
  },
  {
    id: 80,
    category: { main: 'Outer', sub: '코트' },
    name: '에브리데이 오버핏 자켓코트',
    price: '69,000원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202502/25c214b1056f5792475db8f2da790b61.webp',
    description: '유행을 타지 않는 디자인의 클래식한 트렌치 코트입니다.',
  },
  {
    id: 81,
    category: { main: 'Outer', sub: '가디건' },
    name: '모노 머신워셔블 브이텍 니트 가디건',
    price: '49,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202404/34a19ba57ae666caad106c6f12479c4e.jpg',
    description: '부드럽고 따뜻한 울 혼방 소재의 베이직 가디건입니다.',
  },
  {
    id: 82,
    category: { main: 'Outer', sub: '가디건' },
    name: '링크프리 골지 스판 가디건',
    price: '28,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202404/6f958c2b481dd5d12e84e44b88ca09ba.jpg',
    description: '부드럽고 따뜻한 울 혼방 소재의 베이직 가디건입니다.',
  },
  {
    id: 83,
    category: { main: 'Outer', sub: '가디건' },
    name: '에디트 기본핏 가디건',
    price: '19,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202509/f647c07758b0be03df47610c9a7a9062.webp',
    description: '부드럽고 따뜻한 울 혼방 소재의 베이직 가디건입니다.',
  },
  {
    id: 84,
    category: { main: 'Outer', sub: '가디건' },
    name: '버튼무드 반크롭 후드 가디건',
    price: '31,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202509/fc03e99b2497cbad318b6a36fe041d7c.webp',
    description: '부드럽고 따뜻한 울 혼방 소재의 베이직 가디건입니다.',
  },
  {
    id: 85,
    category: { main: 'Outer', sub: '가디건' },
    name: '솔리드 라운드 포켓 가디건',
    price: '39,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202502/8b9fbb0aa691cfc9256b6d9734547ae5.jpg',
    description: '부드럽고 따뜻한 울 혼방 소재의 베이직 가디건입니다.',
  },
  {
    id: 86,
    category: { main: 'Outer', sub: '가디건' },
    name: '니코 베이직 후드 가디건',
    price: '64,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202412/dffe91a54a1ff93cd70ff8e1fa6d50bb.jpg',
    description: '부드럽고 따뜻한 울 혼방 소재의 베이직 가디건입니다.',
  },
  {
    id: 87,
    category: { main: 'Outer', sub: '가디건' },
    name: '스윗 리본 버튼 가디건',
    price: '22,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/3f35317fe14f3db3c00626c72381d561.webp',
    description: '부드럽고 따뜻한 울 혼방 소재의 베이직 가디건입니다.',
  },
  {
    id: 88,
    category: { main: 'Outer', sub: '가디건' },
    name: '노블 레이어드 가디건',
    price: '32,900원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202508/0bec55e1537e7422fff0c593c1bf5b95.webp',
    description: '부드럽고 따뜻한 울 혼방 소재의 베이직 가디건입니다.',
  },

  // Acc Category (모자,가방,신발,악세서리)
  {
    id: 89,
    category: { main: 'Acc', sub: '모자' },
    name: '무브먼트 볼캡',
    price: '19,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202504/33ac51099160342b0eaf53dbd21d39a5.jpg',
    description:
      '깔끔한 실루엣과 적당한 깊이감으로 편안한 착용감을 제공하며,감각적인 자수 디테일로 포인트를 더한 볼캡 입니다.',
  },
  {
    id: 90,
    category: { main: 'Acc', sub: '모자' },
    name: '카운티 볼캡',
    price: '24,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202503/1bb2909a040a6b1c0e5e139544f026e8.jpg',
    description:
      '베이직한 세가지 컬러로 언제나 어디서나 쓰기 좋은 볼캡 입니다.다양한 착장에 툭 얹어서 스타일을 완성해보세요!',
  },
  {
    id: 91,
    category: { main: 'Acc', sub: '모자' },
    name: '포우 빈티지 볼캡',
    price: '19,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202503/af8efdea8226f6e49d53265f4b807949.jpg',
    description:
      '패션의 완성은 보자인거 아시죠!?전면부 p로고로 포인트를 주어 캐주얼한 무드가 느껴지는 볼캡이에요!다양한 컬러웨이로 구성되어있으니 취향에 맞게 선택해 보세요!',
  },
  {
    id: 92,
    category: { main: 'Acc', sub: '모자' },
    name: '피치 워싱 볼캡',
    price: '24,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202409/d94a34c914eb476f6e19b7e06da35bc8.jpg',
    description: '데일리로 착용하기 좋은 피그먼트 워싱의 빈티지한 색감',
  },
  {
    id: 93,
    category: { main: 'Acc', sub: '모자' },
    name: '멕시코 자수 폴리 스냅백',
    price: '24,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202404/1c5cc9245cfa6a52a377b065ede2b943.jpg',
    description: '가볍게 스타일 내기 좋은 폴리 원단의 스냅백',
  },
  {
    id: 94,
    category: { main: 'Acc', sub: '모자' },
    name: '모노 베이직 빅사이즈 볼캡',
    price: '18,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202407/03787a6eee8291c446c13ca5faed6052.jpg',
    description:
      '베이직한 디자인 컬러구성과 깊이,챙길이,조절 가능한 스트랩 등 일반볼캡보다 확연히 큰 사이즈',
  },
  {
    id: 95,
    category: { main: 'Acc', sub: '모자' },
    name: '모닝 자수 배색 볼캡',
    price: '22,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202404/c63abc4adf6df909ac4bf1a7766c3491.jpg',
    description:
      '배색 컬러에 맞는 자수가 더해져 포인트로 good,데일리로 어디든 착용하기 좋은 볼캡 디자인',
  },
  {
    id: 96,
    category: { main: 'Acc', sub: '모자' },
    name: '캠핑 클럽 캠프캡',
    price: '19,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202408/e91119f7afa8082f2972361ad021b69f.jpg',
    description:
      '4color로 고르는 나만의 컬러,포인트 주기 좋은 자수디테일,폴리 소재의 빠른 흡습속건의 볼캡',
  },
  {
    id: 97,
    category: { main: 'Acc', sub: '가방' },
    name: '타딘 체크 보스턴백',
    price: '49,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202507/2dbfc7cc2c9c81e77b5a62c158ad69c3.jpg',
    description: '캐주얼&포멀 모두 ok,타딘 체크 보스턴백',
  },
  {
    id: 98,
    category: { main: 'Acc', sub: '가방' },
    name: '스퀘어 레더 크로스백',
    price: '39,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202405/ab4925b5c3653c518afeda790fbdd322.jpg',
    description:
      '단독으로 심플하게 들기 좋은 레더 크로스백,넉넉한 수납 공간과 베이직한 디자인',
  },
  {
    id: 99,
    category: { main: 'Acc', sub: '가방' },
    name: '모노 BIG 리유저블 백',
    price: '4,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202506/4161a21e250342bac82f41fce8484452.jpg',
    description: '실용성 뿐 아니라,환경보호하고 트렌드도 놓치지 않는 아이템',
  },
  {
    id: 100,
    category: { main: 'Acc', sub: '가방' },
    name: '모스 메신저 크로스백',
    price: '23,700원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202509/1561118cf9831a1c0e9fbdc8a91d5d1f.jpg',
    description:
      '담백한 컬러감과 깔끔한 디자인의 고급스러운 분위기,기본에 충실한 디자인',
  },
  {
    id: 101,
    category: { main: 'Acc', sub: '가방' },
    name: '이멜 캔버스 레더 크로스 보스턴백',
    price: '75,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202509/d9f627c41bc95d82138f5467004bf682.jpg',
    description: '크랙 컬러가 빚어낸 빈티지한 매력',
  },
  {
    id: 102,
    category: { main: 'Acc', sub: '가방' },
    name: '미즈 포켓 백팩',
    price: '28,400원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202509/b4aa5fb118c38779e7dc69a7d71d97b8.jpg',
    description: '새 시즌 데일리 백,포켓 가득.버클 탄탄한 캐주얼 백팩',
  },
  {
    id: 103,
    category: { main: 'Acc', sub: '가방' },
    name: '록스 홀릭 백팩',
    price: '47,400원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202509/a7a73c70705385b9b32d5542ae48a454.webp',
    description:
      '미니포켓부터 속주머니까지,숨겨진 공간이 많은 귀여운 실루엣의 미니백팩',
  },
  {
    id: 104,
    category: { main: 'Acc', sub: '가방' },
    name: '나일론 미니 포켓 크로스백',
    price: '29,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202507/89ef59180fce80c9ce8b39516d9f0abe.webp',
    description: '가볍게 툭, 어디든 자연스럽게 녹아드는 미니 크로스백',
  },
  {
    id: 106,
    category: { main: 'Acc', sub: '신발' },
    name: '카이저 스니커즈',
    price: '49,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202502/d78df9fdbe843c811c0ec605b320d3b6.jpg',
    description:
      '미니멀한 디자인으로 어디에나 매치하기 좋은 화이트 스니커즈입니다.',
  },
  {
    id: 107,
    category: { main: 'Acc', sub: '신발' },
    name: '소프트 스웨이드 퍼 부츠',
    price: '69,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202412/5010a926765fa3f27e9216a0bad137f4.jpg',
    description:
      '미니멀한 디자인으로 어디에나 매치하기 좋은 화이트 스니커즈입니다.',
  },
  {
    id: 108,
    category: { main: 'Acc', sub: '신발' },
    name: '스케이트 하이 스니커즈',
    price: '99,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202409/72baecfe6f894bf5c6f5e10aa79af649.jpg',
    description:
      '미니멀한 디자인으로 어디에나 매치하기 좋은 화이트 스니커즈입니다.',
  },
  {
    id: 109,
    category: { main: 'Acc', sub: '신발' },
    name: '어글리 볼드 로우 컨버스',
    price: '79,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202405/8fb0d0af10244a29ce1490f1be72db7a.jpg',
    description:
      '미니멀한 디자인으로 어디에나 매치하기 좋은 화이트 스니커즈입니다.',
  },
  {
    id: 110,
    category: { main: 'Acc', sub: '신발' },
    name: '스터브 코튼 스니커즈',
    price: '49,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202410/d40e6a5d24f753bad402ed260304db80.jpg',
    description:
      '미니멀한 디자인으로 어디에나 매치하기 좋은 화이트 스니커즈입니다.',
  },
  {
    id: 111,
    category: { main: 'Acc', sub: '신발' },
    name: '빈티지 라벨 스니커즈',
    price: '56,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202409/d3665ecd92214a2ef159c35f6476a781.jpg',
    description:
      '미니멀한 디자인으로 어디에나 매치하기 좋은 화이트 스니커즈입니다.',
  },
  {
    id: 112,
    category: { main: 'Acc', sub: '신발' },
    name: '컬러 썸머 쪼리',
    price: '36,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202405/969c89658acb7a0c0e86e6408a50a3f1.jpg',
    description:
      '미니멀한 디자인으로 어디에나 매치하기 좋은 화이트 스니커즈입니다.',
  },
  {
    id: 113,
    category: { main: 'Acc', sub: '신발' },
    name: '스탠다드 독일군 스니커즈',
    price: '89,000원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202508/61e84bc36efdfe160341e4066c0df050.jpg',
    description:
      '미니멀한 디자인으로 어디에나 매치하기 좋은 화이트 스니커즈입니다.',
  },
  {
    id: 114,
    category: { main: 'Acc', sub: '주얼리' },
    name: '빅볼 군번 체인 목걸이',
    price: '19,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202407/d7a42a36f62b30e5a3b0619093ebd341.jpg',
    description: '코디에 따라 다양한 무드로 연출 가능한 군번 체인 목걸이',
  },
  {
    id: 115,
    category: { main: 'Acc', sub: '주얼리' },
    name: '라운딩 메탈 시계',
    price: '55,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202405/afff1f5c78335a522b864a97a666fed6.jpg',
    description:
      '실버 메탈 컬러로 볼드한 무드,계절을 가리지 않고 착용하기 좋은 시계',
  },
  {
    id: 116,
    category: { main: 'Acc', sub: '주얼리' },
    name: '우드펍 컬러 비즈 팔찌',
    price: '17,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202407/2b09ec7176a1d06885bfc3e7f0183bef.jpg',
    description: '여름 코디를 완성 시켜줄 원석과 야자수 소재의 세트 팔찌',
  },
  {
    id: 117,
    category: { main: 'Acc', sub: '주얼리' },
    name: '시루즈 데일리 쿼츠 손목시계',
    price: '56,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202503/ad3ff0366e4e0aebd0c69f161684440f.jpg',
    description:
      '소가죽으로 제작되어 시간이 지날수록 자연스러운 광택이 더해져 더욱 멋스러운 심플한 디자인의 워치',
  },
  {
    id: 118,
    category: { main: 'Acc', sub: '주얼리' },
    name: '사각 써지컬 반지',
    price: '10,400원',
    imageUrl:
      'https://hot-10.com/web/product/medium/202503/db4c431f2c070272e5bf147b70e55d75.webp',
    description: '변색x,알러지x 독특한 디자인의 반지',
  },
  {
    id: 119,
    category: { main: 'Acc', sub: '주얼리' },
    name: '우드펍 비즈 목걸이',
    price: '17,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202407/ec023d57f1550ac8e9180495b9745d61.jpg',
    description: '빈티지하게 연출 가능한 우드 비즈 목걸이',
  },
  {
    id: 120,
    category: { main: 'Acc', sub: '주얼리' },
    name: '문스타 써지컬 목걸이',
    price: '19,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202407/9a6bd8ad6a2c52e6f47a980a647229cb.jpg',
    description: '데일리룩에 스트릿한 포인트를 줄 수 있는 써지컬 목걸이',
  },
  {
    id: 121,
    category: { main: 'Acc', sub: '주얼리' },
    name: '페어 웨일 멀티 무브먼트 손목시계',
    price: '65,900원',
    imageUrl:
      'https://www.bymono.com/web/product/medium/202503/8d36fbad5f3b30ecdaed00188ad98758.jpg',
    description:
      '엄선되 고급pu가죽을 사용해 튼튼한 내구성은 물론 마모에 강한 워치',
  },
];

const SLIDER_IMAGES = [
  {
    id: 'slide1',
    src: 'https://hot-10.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/96d4b2bd477d8ba3ac7280cd55aad02f.jpg',
  },
  {
    id: 'slide2',
    src: 'https://www.bymono.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f92533f76c09ef20c08a19e60f9b2b85.jpg',
  },
  {
    id: 'slide3',
    src: 'https://hot-10.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/31408546731d32427fd3d4877defc823.jpg',
  },
  {
    id: 'slide4',
    src: 'https://www.bymono.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/62ec5342d14d9748cab01066d0f89109.jpg',
  },
];

export { mainNavItems, subNavItems, ALL_PRODUCTS, SLIDER_IMAGES };

// export const STATIC_PRODUCTS = ALL_PRODUCTS.slice(0, 10);
