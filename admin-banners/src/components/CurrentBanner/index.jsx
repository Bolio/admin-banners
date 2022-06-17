import styled, { css } from "styled-components";

import Button from "../Buttons";

const ContainerBannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  padding: 10px;
  background-color: lightblue;
`;

const ImgBannerStyled = styled.img`
  display: block;
  width: 100%;
  height: 120px;
  background-color: red;
`;

const NameBannerStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  text-align: center;
  margin-top: 0px;
  font-size: 1.5rem;
  font-weight: bolder;
  background-color: purple;
`;

const ContainerButtonsStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: blue;
`;

const CurrentBanner = () => {
  return (
    <ContainerBannerStyled>
      <ImgBannerStyled />
      <NameBannerStyled>FCBD-2022</NameBannerStyled>
      <ContainerButtonsStyled>
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </ContainerButtonsStyled>
    </ContainerBannerStyled>
  );
};

export default CurrentBanner;
