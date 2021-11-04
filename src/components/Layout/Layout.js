import { Fragment, useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Cart from "../Cart/Cart";
import Notification from "../UI/Notification";
const Layout = (props) => {
  const shouldShowCart = useSelector((state) => state.cart.shown);
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.toggleNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data",
        })
      );
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
      dispatch(
        uiActions.toggleNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    };
    sendCartData().catch((err) => {
      uiActions.toggleNotification({
        status: "error",
        title: "Error",
        message: "Sending cart data failed",
      });
    });
  }, [cart, dispatch]);
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
