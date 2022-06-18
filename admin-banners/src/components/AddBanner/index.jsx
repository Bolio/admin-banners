import styled, { css } from "styled-components";

import Button from "../Buttons";

const ContainerAddBannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  width: 100%;
  height: 500px;
  padding: 10px;
  gap: 20px;
  background-color: lightblue;
`;

const InputFileAddBannerStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  background-color: purple;
`;

const InputTextAddBannerStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  background-color: purple;
`;

const ContainerButtonsStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 120px;
  background-color: blue;
`;

const AddBanner = () => {
  return (
    <ContainerAddBannerStyled>
      <InputFileAddBannerStyled type="file" />

      <InputTextAddBannerStyled type="text" placeholder="Nombre del banner" />
      <InputTextAddBannerStyled type="text" placeholder="Link del banner" />
      <InputTextAddBannerStyled type="text" placeholder="Texto del botón" />

      <ContainerButtonsStyled>
        <Button width="200px">Agregar Banner</Button>
      </ContainerButtonsStyled>
    </ContainerAddBannerStyled>
  );
};

export default AddBanner;
