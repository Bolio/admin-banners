import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  display: block;
  width: ${({ width }) => (width ? width : "100px")};
  height: 50px;
  background-color: pink;
`;

const Button = ({ children, width, onClick, type }) => {
  return (
    <ButtonStyled onClick={onClick} width={width} type={type}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
