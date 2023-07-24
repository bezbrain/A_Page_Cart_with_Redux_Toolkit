import { ChevronDown, ChevronUp } from "../icons";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleIncrease = (index, amount) => {
    dispatch(increaseItem(index, amount));
  };

  const handleDecrease = (index) => {
    if (amount === 1) {
      dispatch(removeItem(index));
      return;
    }
    dispatch(decreaseItem(index));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => handleIncrease({ id, amount })}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => handleDecrease(id)}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
