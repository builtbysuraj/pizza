import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import Navigaiton from "./components/Navigaiton";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { useEffect, useState } from "react";
import { Context } from "./Context";

const App = () => {
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState({});

  // Fetch from localStorage
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    //converting string to array
    setCart(JSON.parse(cart));
  }, []);

  // setting added items to local storage each time 'cart' changes
  useEffect(() => {
    //converting array to string
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <Router>
      <Context.Provider value={{ product, cart, setCart }}>
        <Navigaiton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Context.Provider>
    </Router>
  );
};

export default App;
