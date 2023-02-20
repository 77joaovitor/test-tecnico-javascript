import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100vw;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 1);
  align-items: center;
  justify-content: center;
  overflow: scroll;
  > div {
    justify-content: flex-end;
    position: absolute;
    z-index: 3;
    color: black;
    right: 0;
    top: -30px;
  }

  > img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  section {
    > h2 {
      color: black;
    }

    > span {
      color: black;
    }
    > p {
      color: black;
    }
  }
  .promotion {
    width: 100%;
    height: 1rem;
    top: 240px;
    position: absolute;
    background-color: #85f685;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .exclusive {
    width: 100%;
    height: 1rem;
    top: 240px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
  }
  table {
    border: 1px solid black;
    tr {
      td {
        border-right: 1px solid;
        border-bottom: 1px solid;
        color: black;
      }
    }
  }
  svg {
    position: absolute;
    z-index: 3;
    top: 222px;
    width: 3rem;
    right: 0;
    font-size: 3rem;
    color: red;
  }

  .backIcon {
    position: absolute;
    color: green;
    font-size: 2rem;
    top: 0;
    left: 0;
  }
  > h2 {
    color: black;
  }
  @media (min-width: 700px) {
    > img {
      height: 35rem;
    }
    .promotion {
      top: 550px;
    }
    .exclusive {
      top: 550px;
    }
    svg {
      top: 522px;
    }
  }
`;
