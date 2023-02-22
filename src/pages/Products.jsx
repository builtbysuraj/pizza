import { useContext } from "react";
import Product from "../components/Product";
import { Context } from "../Context";

const Products = () => {
  const { product } = useContext(Context);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {product?.map((e, i) => (
          <Product key={i} name={e.name} size={e.size} price={e.price} image={e.image} id={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
