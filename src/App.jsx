import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigaiton from "./components/Navigaiton";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <Navigaiton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
