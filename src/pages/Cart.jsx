import { useContext } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

const Cart = () => {
  const { cart, product } = useContext(Context);

  let userItems = cart.items ? Object.keys(cart.items) : null;

  return (
    <div>
      {userItems ? (
        <div className="container mx-auto lg:w-1/2 w-full">
          <h1 className="my-8 font-bold text-lg">Your cart items</h1>
          {userItems &&
            userItems.map((e, i) => (
              <CartItem
                key={i}
                product={product && product[e - 1]}
                itemCount={cart.items[e]}
                cart={cart}
              />
            ))}
          <hr className="my-4" />
          <div className="text-right mb-10">
            <strong>Grand Total:</strong> ₹ 1500
            <br />
            <button className="bg-yellow-500 mt-3 px-4 py-2 rounded-full leading-none">
              Order Now
            </button>
          </div>
        </div>
      ) : (
        <img className="mx-auto w1/2 mt-12" src="/img/empty-cart.png" />
      )}
    </div>
  );
};

export default Cart;
