import { lazy, Suspense } from "react";
import ShoppingCart from "../pages/ShoppingCartPage";
import RaRaRaising from "../pages/RaRaRaising";
import ScoreRegister from "../pages/scores/ScoreRegister";

const { createBrowserRouter } = require("react-router-dom");
const Loading = () => <div className="p-10 text-center">Loading...</div>;
const Home = lazy(() => import("../pages/MainPage"));
const Main = lazy(() => import("../pages/CategoryPage"));
const Sub = lazy(() => import("../pages/CategoryPage"));
const Product = lazy(() => import("../pages/ProductDetailPage"));
const User = lazy(() => import("../pages/UserPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Join = lazy(() => import("../pages/JoinPage"));
const UserUpdate = lazy(() => import("../pages/UserUpdatePage"));
const Cart = lazy(() => import("../pages/ShoppingCartPage"));
const Best = lazy(() => import("../pages/BestPage"));

//Suspense 중지 , Main Component 가져오기 전에는  Loading 을 띄운다
const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "category/:main", // 예: /category/Men
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "category/:main/:sub", // 예: /category/Men/Running
    element: (
      <Suspense fallback={<Loading />}>
        <Sub />
      </Suspense>
    ),
  },
  {
    path: "product/:productId", // 예: /product/1
    element: (
      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    ),
  },
  {
    path: "user",
    element: (
      <Suspense fallback={<Loading />}>
        <User />
      </Suspense>
    ),
  },
  {
    path: "user/update",
    element: (
      <Suspense fallback={<Loading />}>
        <UserUpdate />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={null}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "join",
    element: (
      <Suspense fallback={null}>
        <Join />
      </Suspense>
    ),
  },
  {
    path: "cart",
    element: (
      <Suspense fallback={null}>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: "cart/:productId", // 예: /product/1
    element: (
      <Suspense fallback={<Loading />}>
        <ShoppingCart />
      </Suspense>
    ),
  },
  {
    path: "/best", // 👈 "/best" 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <Best />
      </Suspense>
    ),
  },
  {
    path: "/r", // 👈 "/best" 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <RaRaRaising />
      </Suspense>
    ),
  },
  {
    path: "/s", // 👈 "/best" 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <ScoreRegister />
      </Suspense>
    ),
  },
  {
    path: "/l", // 👈 "/best" 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <ScoreList />
      </Suspense>
    ),
  },
  {
    path: "/read/:rno", // 👈 "/best" 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <ScoreRead rno={rno} />
      </Suspense>
    ),
  },
]);

export default root;
