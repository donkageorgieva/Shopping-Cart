import { Fragment, useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
const Layout = (props) => {
  const shouldShowCart = useSelector((state) => state.cart.shown);
  const cart = useSelector((state) => state.cart.items);
  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch(
        "https://burger-builder-661ad-default-rtdb.firebaseio.com/.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("No response from the server!");
      }
      const responseData = await response.json();
    };
  }, [cart]);
  return (
    <Fragment>
      <MainHeader />
      {shouldShowCart && <Cart />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
