import React, { lazy, Suspense } from "react";
import HeaderComponent from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Error from "./components/Error";
import About from "./components/About";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Cart from "./Cart";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./Restaurantmenu";

const Contact = lazy(() => import("./Contact"));

const AppLayout = () => {
  return (
    <div className="restraunt-list">
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default AppLayout;
