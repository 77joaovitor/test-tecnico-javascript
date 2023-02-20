import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import HomePage from "../pages/homePage";
import ProductDetail from "../pages/ProductDetail";

const RoutesApp = () => {
  const { openProductDetail, product } = useContext(ProductContext);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={`:name`} element={<ProductDetail />} />
    </Routes>
  );
};

export default RoutesApp;
