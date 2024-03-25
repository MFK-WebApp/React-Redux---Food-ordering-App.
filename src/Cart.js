import { useDispatch, useSelector } from "react-redux";
import FoodItem from "../src/FoodItem";
import { clearCart } from "./cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl my-2">
          {" "}
          Wow! Your cart looks delicious - {cartItems.length}
        </h1>
        <button
          className="bg-purple-400 rounded-lg p-2 m-1 mx-10"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
