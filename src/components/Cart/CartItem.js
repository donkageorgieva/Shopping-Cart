import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total} <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button
            onClick={() => {
              dispatch(
                cartActions.addToCart({
                  id: 2,
                  title: title,
                  price: price,
                  quantity: 1,
                  total: price,
                })
              );
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
