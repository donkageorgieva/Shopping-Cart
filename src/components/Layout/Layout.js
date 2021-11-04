import { Fragment, useEffect } from "react";
import MainHeader from "./MainHeader";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
const Layout = (props) => {
  const shouldShowCart = useSelector((state) => state.shown);
  const cart = useSelector((state) => state.items);
  useEffect(() => {
    fetch("https://burger-builder-661ad-default-rtdb.firebaseio.com/.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
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
