import { clearCart } from "../features/cart/cartSlice";
import { showModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, total, amount } = useSelector((store) => store.carter);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((each, i) => {
          return <CartItem key={each.id} {...each} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(showModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
