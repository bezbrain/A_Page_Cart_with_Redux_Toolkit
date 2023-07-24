import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { calculating } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.carter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculating());
  }, [cartItems]);

  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
