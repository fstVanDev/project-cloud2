import styled from "styled-components";

export const ActiveBlock = styled.div`
  width: 350px;
  border: none;
  margin: 0px;
  padding: 8px;
  height: 80px;
  display: flex;
  justify-content: space-around;

  div button {
    top: 14px;
  }
`;

export const SwicthAddress = styled.div`
  width: 140px;
  height: 35px;
  border: none;
  outline: none;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  text-align: center;

  &:before {
    content: "Swicth";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #fff;
  }

  &:active&:after {
    background: transparent;
  }

  &:hover&:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const ConnectButtton1 = styled.button`
  width: 120px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  margin: auto 0px;
`;

export const ConnectButton = styled.button`
  width: 120px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  margin: auto 0px;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #fff;
  }

  &:active&:after {
    background: transparent;
  }

  &:hover&:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
export const DropButton = styled.button`
  width: 120px;
  border-radius: 10px;
  height: 60px;
  color: #fff;
  text-decoration: none;
  display: block;
  z-index: 1;

  &:hover {
    border: 1px solid #ccc;
  }
`;
export const DropContainer = styled.div`
  width: 120px;
  height: min-content;
  position: absolute;
  display: column;
  background: #111;
  margin: -25px 0px 0px 0px;
  border-radius: 10px;
  z-index: 0;
`;
