import { Fragment, useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../Cart/Cart";
import Notification from "../UI/Notification";
import { sendCartRequest } from "../../store/cartActions";
let isInitial = true;
const Layout = (props) => {
  const shouldShowCart = useSelector((state) => state.cart.shown);
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartRequest(cart));
  }, [dispatch, cart]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.tutle}
          message={notification.message}
        />
      )}
      <MainHeader />
      {shouldShowCart && <Cart />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
