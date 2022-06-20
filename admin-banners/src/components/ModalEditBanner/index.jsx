import styled, { css } from "styled-components";
import Typography from "@mui/material/Typography";

import Button from "../Buttons";

const ContainerModalEditBannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  width: 100%;
  height: 500px;
  gap: 20px;
  background-color: lightblue;
`;

const InputFileModalEditBannerStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  background-color: purple;
`;

const InputTextModalEditBannerStyled = styled.input`
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

const ModalEditBanner = ({ img, title }) => {
  return (
    <ContainerModalEditBannerStyled>
      <Typography align="center" variant="h5" gutterBottom>
        Detalle de banner {title}
      </Typography>

      <InputFileModalEditBannerStyled type="file" />

      <InputTextModalEditBannerStyled
        type="text"
        placeholder="Nombre del banner"
      />
      <InputTextModalEditBannerStyled
        type="text"
        placeholder="Link del banner"
      />
      <InputTextModalEditBannerStyled
        type="text"
        placeholder="Texto del botón"
      />
      <InputTextModalEditBannerStyled
        type="text"
        placeholder="Texto de modal"
      />

      <ContainerButtonsStyled>
        <Button width="200px">Actualizar Banner</Button>
      </ContainerButtonsStyled>
    </ContainerModalEditBannerStyled>
  );
};

export default ModalEditBanner;
