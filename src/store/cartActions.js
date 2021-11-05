import { uiActions } from "./ui-slice";

export const sendCartRequest = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.toggleNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );
    const sendCartData = async () => {
      const response = await fetch(
        "https://burger-builder-661ad-default-rtdb.firebaseio.com/.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
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
    try {
      await sendCartData();
    } catch (err) {
      dispatch(
        uiActions.toggleNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
export const fetchCart = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://burger-builder-661ad-default-rtdb.firebaseio.com/.json"
      );
      if (!response.ok) {
        throw new Error("Could not get cart data");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
    } catch (error) {
      dispatch(
        uiActions.toggleNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
