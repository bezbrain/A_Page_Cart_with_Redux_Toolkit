import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { calculating, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.carter);
  const { isOpen } = useSelector((store) => store.modaler);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculating());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("testing"));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
