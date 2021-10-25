import { Fragment } from "react";
import MainHeader from "./MainHeader";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
const Layout = (props) => {
  const shouldShowCart = useSelector((state) => state.shown);
  return (
    <Fragment>
      <MainHeader />
      {shouldShowCart && <Cart />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
