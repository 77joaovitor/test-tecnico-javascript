import { Container } from "./style";
import CardContainer from "../Card";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
const CardConteinerList = () => {
  const { product, setProduct, inputSeach, openProductDetail } =
    useContext(ProductContext);
  useEffect(() => {
    api
      .get("")
      .then((res) => setProduct([...(res.data?.produtos as never)]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {product
        ?.filter((item) => {
          if (inputSeach === "promocao") {
            return item.promocao === true;
          } else if (inputSeach === "exclusivo") {
            return item.exclusivo === true;
          }
          return item.nome.toLowerCase().includes(
            inputSeach
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          );
        })
        .map((card, index): any => (
          <CardContainer card={card} key={index} />
        ))}
    </Container>
  );
};

export default CardConteinerList;
