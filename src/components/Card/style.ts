import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 9rem;
  border: 1px solid #cfcfcf;
  display: flex;
  position: relative;
  max-width: 24rem;

  margin-bottom: 10px;
  .imageContainer {
    width: 50%;
    height: 9rem;
    min-width: 50%;
    position: relative;
    > img {
      width: 100%;
      height: 9rem;
      min-width: 50%;
      margin-right: 10px;
      object-fit: cover;
    }
  }
  .promotion {
    width: 50%;
    height: 1rem;
    top: 128px;
    position: absolute;
    background-color: #85f685;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .exclusive {
    width: 50%;
    height: 1rem;
    top: 128px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
  }

  > span {
    color: black;
  }
  > p {
    color: black;
  }
  .descriptionCard {
    height: 9.2rem;
  }

  section {
    height: 88%;
    > h2 {
      font-size: 1rem;
      color: black;
    }
    > span {
      color: black;
    }
    > p {
      color: black;
      font-size: 0.5rem;
    }
  }
  svg {
    color: red;
    font-size: 1.5rem;
    position: absolute;

    top: 4px;
    right: 4px;
  }
  .Modal {
    position: fixed;
  }
`;

export const Image = styled(Link)`
  width: 100%;
  height: 9rem;
  min-width: 50%;
  margin-right: 10px;
  object-fit: cover;
  position: absolute;
`;
