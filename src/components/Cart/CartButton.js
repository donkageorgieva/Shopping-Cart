import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemsAmount = useSelector((state) => state.cart.totalItemsAmount);
  return (
    <button
      className={classes.button}
      onClick={(e) => {
        e.preventDefault();
        dispatch(cartActions.toggleCart());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default CartButton;
