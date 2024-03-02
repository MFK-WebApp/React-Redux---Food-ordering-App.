import React from "react";
import HeaderComponent from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Error from "./components/Error";
import About from "./components/About";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./Contact";
import Cart from "./Cart";
import RestaurantMenu from "./Restaurantmenu.js";

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
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurantmenu",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default AppLayout;
