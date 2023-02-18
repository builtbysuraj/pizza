import { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {product.map((e, i) => (
          <Product key={i} name={e.username} id={e.address.zipcode}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
