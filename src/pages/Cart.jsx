import { useContext } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

const Cart = () => {
  const { cart, product } = useContext(Context);
  if (!cart.items) {
    return;
  }
  let temp = Object.keys(cart.items);

  return (
    <div className="container mx-auto lg:w-1/2 w-full">
      <h1 className="my-8 font-bold text-lg">Your cart items</h1>
      {temp &&
        temp.map((e, i) => <CartItem key={i} name={product[e - 1].username} />)}
      <hr className="my-4" />
      <div className="text-right mb-10">
        <strong>Grand Total:</strong> ₹ 1500
        <br />
        <button className="bg-yellow-500 mt-3 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
