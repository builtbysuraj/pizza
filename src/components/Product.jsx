import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Product = ({ name, id }) => {
  const { cart, setCart } = useContext(Context);

  const [isAdding, setIsAdding] = useState(false);

  function addCart(e) {
    e.preventDefault();

    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[id]) {
      _cart.items[id] += 1;
    } else {
      _cart.items[id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true)
    setTimeout(() => {
      setIsAdding(false)
    }, 800)
  }

  return (
    <Link to={`/products/${id}`}>
      <img src="/img/peproni.jpg" alt="pizza-products" />
      <div className="text-center">
        <h2 className="text-lg py-2 font-bold">{name}</h2>
        <span className="bg-gray-200 rounded-full text-sm px-4 py-1">
          small
        </span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span>₹ 500</span>
        <button
        disabled={isAdding}
          onClick={(e) => addCart(e)}
          className={` ${
            isAdding ? "bg-green-500" : "bg-yellow-500"
          } py-1 px-4 rounded-full font-bold `}
        >
          Add{isAdding && 'ed'}
        </button>
      </div>
    </Link>
  );
};

export default Product;
