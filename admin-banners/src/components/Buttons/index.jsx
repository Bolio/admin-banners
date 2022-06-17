import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  display: block;
  width: 100px;
  height: 50px;
  background-color: pink;
`;

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
