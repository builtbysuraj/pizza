import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Context";

const SingleProduct = () => {
  const { product } = useContext(Context);
  const { id } = useParams();

  return (
    <div className="mt-12 container mx-auto">
      <Link to={"/"}>
        <button className="bg-yellow-500 rounded-full font-bold py-1 px-4 mb-12">
          Back
        </button>
      </Link>
      <div className="flex">
        <img src="/img/peproni.jpg" alt="pizza-img" />
        <div className="container mx-auto ml-12">
          <h1 className="font-bold text-xl">
            {product && product[id - 1].name}
          </h1>
          <div className="text-md">{product && product[id - 1].size}</div>
          <div className="font-bold mt-2">
            ₹ {product && product[id - 1].price}
          </div>
          <button className="bg-yellow-500 rounded-full py-1 px-7 font-bold mt-5">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
