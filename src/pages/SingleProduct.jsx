import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [])

  return (
    <div>
      <Link to={"/"}>
        <button className="">Back</button>
      </Link>
      <img src="/img/peproni.jpg" alt="" />
    </div>
  );
};

export default SingleProduct;
