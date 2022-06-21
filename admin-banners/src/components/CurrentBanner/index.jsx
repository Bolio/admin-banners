import { useState } from "react";
import styled, { css } from "styled-components";

import Button from "../Buttons";
// import ModalCustom from "../../components/Modals";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalEditBanner from "../ModalEditBanner";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const deleteBanner = async (idBanner) => {
  try {
    const url = `http://localhost:4000/banners/${idBanner}`;

    const request = await fetch(url, {
      method: "DELETE",
    });
    console.log(request);
    const result = await request.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const CurrentBanner = ({ idBanner, img, title, linkBanner, textBanner }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContainerBannerStyled>
      <ImgBannerStyled src={img} />
      <NameBannerStyled>{title}</NameBannerStyled>
      <ContainerButtonsStyled>
        <Button onClick={() => handleOpen()}>Editar</Button>
        <Button onClick={() => deleteBanner(idBanner)}>Eliminar</Button>
      </ContainerButtonsStyled>

      {/* <ModalCustom idModal="modal-edit-banner" isOpen={isOpen} /> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalEditBanner
            idBanner={idBanner}
            img={img}
            title={title}
            linkBanner={linkBanner}
            textBanner={textBanner}
          />
        </Box>
      </Modal>
    </ContainerBannerStyled>
  );
};

export default CurrentBanner;
