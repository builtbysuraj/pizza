import { useContext } from "react";
import { Context } from "../Context";

const CartItem = ({ product, itemCount, cart }) => {
  const { setCart } = useContext(Context);

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

  return (
    <div>
      <ul>
        <li className="mb-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src="/img/peproni.jpg" alt="pizza" />
              <span className="font-bold ml-4 w-48">
                {product && product.username}
              </span>
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
            <div>₹ 500</div>
            <button
              onClick={deleteItem}
              className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
