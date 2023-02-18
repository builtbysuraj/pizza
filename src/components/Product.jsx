import { Link } from "react-router-dom";

const Product = ({ name, id }) => {
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
        <button className="bg-yellow-500 px-4 py-1 rounded-full font-bold hover:bg-yellow-600">
          Add
        </button>
      </div>
    </Link>
  );
};

export default Product;
