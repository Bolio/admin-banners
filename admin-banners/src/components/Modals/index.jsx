// import { useState, useEffect } from "react";
// import styled, { css } from "styled-components";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";

// import ModalEditBanner from "../ModalEditBanner";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 800,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const ModalCustom = ({ idModal }) => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);


//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         {idModal === "modal-edit-banner" ? <ModalEditBanner /> : null}
//       </Box>
//     </Modal>
//   );
// };

// export default ModalCustom;
