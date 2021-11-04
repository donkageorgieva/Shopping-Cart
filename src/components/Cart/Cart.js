import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
const Cart = (props) => {
  const addHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  const removeHandler = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };
  const dispatch = useDispatch();
  const itemsArray = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalPrice);
  const cartItems = itemsArray.map((item) => {
    return (
      <CartItem
        key={item.title}
        item={item}
        add={() => {
          addHandler(item);
        }}
        remove={() => {
          removeHandler(item);
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
      <h2>Total: $ {total.toFixed(2)} </h2>
    </Card>
  );
};

export default Cart;
