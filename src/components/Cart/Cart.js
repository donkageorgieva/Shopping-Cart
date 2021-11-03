import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const itemsArray = useSelector((state) => state.items);
  const cartItems = itemsArray.map((item) => {
    return (
      <CartItem
        key={item.title}
        item={{
          title: item.title,
          quantity: item.quantity,
          total: item.total,
          price: item.price,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
