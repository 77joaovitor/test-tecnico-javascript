import { createContext, useState } from "react";
import { IContext, IContextFuncs } from "../interface/interface";

export const ProductContext = createContext<IContextFuncs>({} as IContextFuncs);

const ProductProvider = ({ children }: IContext) => {
  const [product, setProduct] = useState([]);
  const [likeProduct, setLikeProduct] = useState([]);
  const [inputSeach, setInputSeach] = useState("");
  const [openProductDetail, setOpenProductDetail] = useState(["", 0]);
  const [productDetail, setProductDetail] = useState(null);
  console.log(likeProduct);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        likeProduct,
        setLikeProduct,
        inputSeach,
        setInputSeach,
        openProductDetail,
        setOpenProductDetail,
        productDetail,
        setProductDetail,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
