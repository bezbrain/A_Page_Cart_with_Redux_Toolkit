import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { calculating } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.carter);
  const dispatch = useDispatch();

  const { isOpen } = useSelector((store) => store.modaler);
  // console.log(isOpen);

  useEffect(() => {
    dispatch(calculating());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
