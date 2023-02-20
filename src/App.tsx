import { useContext, useState } from "react";
import "./App.css";
import { ProductContext } from "./context/productContext";
import HomePage from "./pages/homePage";
import ProductDetail from "./pages/ProductDetail";
import RoutesApp from "./router";

function App() {
  const [count, setCount] = useState(0);
  const { product, openProductDetail } = useContext(ProductContext);

  return (
    <div className="App">
      <RoutesApp />
    </div>
  );
}

export default App;
