import { Link } from "react-router-dom";

const Navigaiton = () => {
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
            <span className="font-bold">12</span>
            <img src="/img/cart.png" alt="" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigaiton;
