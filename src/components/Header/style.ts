import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  margin-bottom: 10px;
  justify-content: space-around;
  form {
    justify-content: center;
    align-items: center;
  }
  input {
    background-color: white;
    height: 2rem;
    margin-right: 10px;
    color: black;
  }
  button {
    height: 2.5rem;
    width: 4rem;
    font-size: 0.5rem;
  }
  .buttonContainer {
    position: absolute;
    right: 30px;
    top: 58px;
    display: flex;
    flex-direction: column;
    background-color: black;
  }
`;
