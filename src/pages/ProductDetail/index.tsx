import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { IProduct } from "../../interface/interface";
import { api } from "../../utils/api";

const ProductDetail = () => {
  const {
    product,
    productDetail,
    setProductDetail,
    likeProduct,
    setLikeProduct,
    setProduct,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    setProductDetail(
      product.find(
        (elem) => elem.id.toString() === localStorage.getItem("productId")
      )
    );
  }, []);
  const adicionarFavorito = (produto: IProduct) => {
    if (likeProduct.indexOf(produto as never) === -1) {
      setLikeProduct((old: IProduct[]) => [produto, ...old]);
    } else {
      const product = likeProduct.filter(
        (elem) => elem.id !== productDetail?.id
      );
      setLikeProduct([...product]);
    }
  };

  return (
    <Container>
      <BiArrowBack className="backIcon" onClick={() => navigate("/")} />

      <img src={productDetail?.imagem} alt="" />
      <div onClick={() => adicionarFavorito(productDetail as IProduct)}>
        {likeProduct.indexOf(productDetail as never) === -1 ? (
          <AiOutlineHeart />
        ) : (
          <BsHeartFill />
        )}
      </div>
      {productDetail?.promocao ? (
        <div className="promotion">Promoção</div>
      ) : (
        <div className="exclusive">Exclusivo</div>
      )}
      <section>
        <h2>{productDetail?.nome}</h2>
        <span>R${productDetail?.valor}</span>
        <p>{productDetail?.decricaoCurta}</p>
      </section>
      <section>
        <h2>Descrição</h2>
        <p>{productDetail?.descricaoLonga}</p>
      </section>
      <h2>Ficha tecnica</h2>
      <table>
        <tbody>
          {productDetail?.fichaTecnica.map((elem, index) => (
            <tr key={index}>
              <td>{`${elem.titulo}`}</td>
              <td>${elem.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ProductDetail;
