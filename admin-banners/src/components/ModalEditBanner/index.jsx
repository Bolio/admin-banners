import styled, { css } from "styled-components";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field } from "formik";

import Button from "../Buttons";
import InputText from "../AddBanner/InputText";

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

const MyComponent = ({ field, form, ...props }) => {
  return InputText({ field, form, props });
};

const ModalEditBanner = ({ idBanner, img, title, linkBanner, textBanner }) => {
  const initialValues = {
    img_banner: img || "",
    name_banner: title || "",
    link_banner: linkBanner || "",
    text_banner: textBanner || "",
  };

  const editBanner = async (values, idBanner) => {
    try {
      const url = `http://localhost:4000/banners/${idBanner}`;

      const request = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(request);
      const result = await request.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerModalEditBannerStyled>
      <Typography align="center" variant="h5" gutterBottom>
        Detalle de banner {title}
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("values", values);
          editBanner(values, idBanner);
        }}
      >
        <Form>
          {/* <Field
            id="img_banner"
            name="img_banner"
            type="file"
            accept="image/png, .jpeg, .jpg, image/gif"
            component={MyComponent}
          /> */}

          <Field
            id="name_banner"
            name="name_banner"
            type="text"
            placeholder="Nombre del banner"
            component={MyComponent}
          />
          <Field
            id="link_banner"
            name="link_banner"
            type="text"
            placeholder="Link del banner"
            component={MyComponent}
          />
          <Field
            id="text_banner"
            name="text_banner"
            type="text"
            placeholder="Texto del botón"
            component={MyComponent}
          />
          {/* <Field
            type="text"
            placeholder="Texto de modal"
            component={MyComponent}
          /> */}

          <ContainerButtonsStyled>
            <Button type="submit" width="200px">
              Actualizar Banner
            </Button>
          </ContainerButtonsStyled>
        </Form>
      </Formik>
    </ContainerModalEditBannerStyled>
  );
};

export default ModalEditBanner;
