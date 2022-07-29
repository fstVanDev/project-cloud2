import styled from "styled-components";

export const PresaleBlock = styled.div`
  display: column;
  position: relative;
  max-width: 1400px;
  color: #000;
  background: #fff;
  height: 560px;
  margin: 24px auto;
  border-radius: 14px;
  padding: 24px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  fontfamily: Urbanist;
  font-style: normal;
  font-weight: bold;
  line-height: 29px;
  color: #4a5a72;
`;

export const CardBody = styled.div`

`

export const ModalBlock = styled.div`
  padding-top: 10px;

  div {
    box-shadow: none;
    padding: 0px;
  }

  div button&:first-child {
    display: none;
  }

  div div button {
    display: none;
  }

  div div div button {
    // border: none;
    display: flex;
    margin-top: 0px;
  }

  //   div div div div button {
  //     margin-top: 12px;
  //   }

  div div div div div div button {
    padding: auto;
  }

  button {
    min-width: 40px;
    display: flex;
    text-align: center;
    margin: auto;
  }

  div div div  {
   button {
      margin-top: 12px;
    }
  }

  input {
    margin: auto;
    padding-top: auto;
    padding-bottom: auto;
    padding-left: 12px;
    font-size: 28px;
  }

  svg {
    display: none;
  }
`;
