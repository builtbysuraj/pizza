import { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

const Cart = () => {
  const { cart, product } = useContext(Context);
  let userItems = cart.items ? Object.keys(cart.items) : null;

  return (
    <>
      {cart.totalItems ? (
        <div className="container mx-auto lg:w-1/2 w-full">
          <h1 className="my-8 font-bold text-lg">Your cart items</h1>
          {/* for each id/item it will run so we dont need to call to server by ourself */}
          {userItems &&
            userItems.map((e, i) => (
              <CartItem
                key={i}
                product={product && product[e - 1]}
                itemCount={cart.items[e]}
                cart={cart}
                userItems={userItems}
                count={e}
                index={i}
              />
            ))}
        </div>
      ) : (
        <img className="mx-auto w-1/2 mt-12" src="/img/empty-cart.png" />
      )}
    </>
  );
};

export default Cart;
