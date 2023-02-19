import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Navigaiton = () => {
  const { cart } = useContext(Context);
  const cartStyle = {
    backgroundColor: "#f59e0d",
    padding: "5px 10px",
    borderRadius: "50px",
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <Link to={"/"}>
        <img src="/img/logo.png" alt="" />
      </Link>
      <ul className="flex items-center">
        <Link to={"/"}>
          <li>home</li>
        </Link>
        <Link to={"/products"}>
          <li className=" px-6">products</li>
        </Link>
        <Link to={"/cart"} style={cartStyle}>
          <li className="flex items-center">
            <span className="font-bold pr-2"> {cart.totalItems} </span>
            <img src="/img/cart.png" alt="" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigaiton;
