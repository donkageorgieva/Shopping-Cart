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
  const itemsArray = useSelector((state) => state.items);
  const total = useSelector((state) => state.totalPrice);
  const cartItems = itemsArray.map((item) => {
    const chosenItem = {
      title: item.title,
      quantity: item.quantity,
      total: item.total,
      price: item.price,
      id: item.id,
    };
    return (
      <CartItem
        key={item.title}
        item={chosenItem}
        add={() => {
          addHandler(chosenItem);
        }}
        remove={() => {
          removeHandler(chosenItem);
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
