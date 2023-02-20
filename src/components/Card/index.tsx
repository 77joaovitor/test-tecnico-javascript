import { Container, Image } from "./style";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { ReactNode, useContext, useEffect, useState } from "react";
import { ICard, IProduct } from "../../interface/interface";
import { ProductContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";

const CardContainer = ({ card }: ICard) => {
  const { likeProduct, setLikeProduct, setOpenProductDetail } =
    useContext(ProductContext);

  const adicionarFavorito = (produto: IProduct) => {
    if (likeProduct.indexOf(produto as never) === -1) {
      setLikeProduct((old: IProduct[]) => [produto, ...old]);
    } else {
      const product = likeProduct.filter((elem) => elem.id !== card.id);
      setLikeProduct([...product]);
    }
  };
  return (
    <Container>
      <div className="imageContainer">
        <Image
          to={`${card.nome}`}
          onClick={() => {
            localStorage.setItem("nome", card.nome);
            localStorage.setItem("productId", card.id.toString());
            //   setOpenProductDetail([card.nome, card.id]);
          }}
        />
        <img src={card.imagem} alt={card.nome} />
        <div
          onClick={() => {
            adicionarFavorito(card);
          }}
        >
          {likeProduct.indexOf(card as never) === -1 ? (
            <AiOutlineHeart />
          ) : (
            <BsHeartFill />
          )}
        </div>
      </div>

      {card.promocao ? (
        <div className="promotion">Promoção</div>
      ) : (
        <div className="exclusive">Exclusivo</div>
      )}
      <div className="descriptionCard">
        <section>
          <h2>{card.nome}</h2>
          <span>R${card.valor}</span>
          <p>{card.decricaoCurta}</p>
        </section>
      </div>
    </Container>
  );
};

export default CardContainer;
