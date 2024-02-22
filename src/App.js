import React from "react";
import HeaderComponent from "./Header";
import Body from "./Body";
import Footer from './Footer'

const AppLayout = () => {
  return (
    <div className="restraunt-list">
      <HeaderComponent />
      <Body />
      <Footer />
    </div>
  );
};
export default AppLayout;
