import styled from "styled-components";

export const Container = styled.div`
  padding-top: 4rem;
  max-width: 50rem;
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: initial;

  @media (min-width: 700px) {
    margin: 20px auto;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    gap: 10px;
  }
`;
