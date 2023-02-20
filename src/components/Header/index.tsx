import { Container } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";

const Header = ({ card }: any) => {
  const { setInputSeach, setProduct } = useContext(ProductContext);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Container>
      <form>
        <input type="text" onChange={(e) => setInputSeach(e.target.value)} />
        <button>Pesquisar</button>
      </form>
      <AiOutlineMenu size={30} onClick={() => setOpenMenu((old) => !old)} />
      {openMenu && (
        <div className="buttonContainer">
          <button onClick={() => setInputSeach("promocao")}>Promoção</button>
          <button onClick={() => setInputSeach("exclusivo")}>Exclusivo</button>
        </div>
      )}
    </Container>
  );
};

export default Header;
