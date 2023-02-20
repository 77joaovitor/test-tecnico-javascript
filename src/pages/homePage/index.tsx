import CardConteinerList from "../../components/CardList";
import Header from "../../components/Header";
import { Container } from "./style";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <CardConteinerList />
    </Container>
  );
};

export default HomePage;
