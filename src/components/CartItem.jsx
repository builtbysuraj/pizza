import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";

const CartItem = ({ product, itemCount, cart, userItems, index }) => {
  const { setCart } = useContext(Context);
  const [sum, setSum] = useState(0);
  const getqty = () => {
    return cart.items[product?.id];
  };

  const increment = () => {
    const existingqty = cart.items[product.id];
    const _cart = { ...cart };
    _cart.items[product.id] = existingqty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decrement = () => {
    if (cart.items[product.id] > 1) {
      const existingqty = cart.items[product.id];
      const _cart = { ...cart };
      _cart.items[product.id] = existingqty - 1;
      _cart.totalItems -= 1;
      setCart(_cart);
    }
  };

  const deleteItem = () => {
    const _cart = { ...cart };
    const qty = _cart.items[product.id];
    delete _cart.items[product.id];
    _cart.totalItems -= qty;
    setCart(_cart);
  };

  useEffect(() => {
    let sum = product?.price * getqty();
    setSum(sum);
  }, [cart.items[product?.id]]);

  const orderItems = () => {
    window.alert("Ordere placed successfully");
    userItems = null;
    setCart({});
  };
  return (
    <>
      <ul>
        <li className="mb-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src={product?.image} alt="pizza" />
              <span className="font-bold ml-4 w-48">{product?.name}</span>
            </div>
            <div>
              <button
                onClick={decrement}
                className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
              >
                <strong>-</strong>
              </button>
              <b className="px-4"> {itemCount} </b>
              <button
                onClick={increment}
                className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
              >
                <strong>+</strong>
              </button>
            </div>
            <div>₹ {sum}</div>
            <button
              onClick={deleteItem}
              className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
      {userItems[userItems.length - 1] === userItems[index] && (
        <div>
          <hr className="my-4" />
          <div className="text-right mb-10">
            <br />
            <button
              onClick={orderItems}
              className="bg-yellow-500 mt-3 px-4 py-2 rounded-full leading-none"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
