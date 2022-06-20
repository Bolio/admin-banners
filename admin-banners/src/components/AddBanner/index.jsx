import styled, { css } from "styled-components";
import { Formik, Form, Field } from "formik";

import Button from "../Buttons";
import InputText from "./InputText";

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

const MyComponent = ({ field, form, ...props }) => {
  return InputText({ field, form, props });
};

const initialValues = {
  img_banner: "",
  name_banner: "",
  link_banner: "",
  text_banner: "",
};

const addBanner = async (values) => {
  try {
    const url = "http://localhost:4000/banners";

    const request = await fetch(url, {
      method: "POST",
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

const AddBanner = () => {
  return (
    <ContainerAddBannerStyled>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          if (values?.img_banner) {
            const img = values?.img_banner.split("\\");
            const banner = img[img.length - 1];
            values.img_banner = `src/assets/banners/${banner}`;
          }
          addBanner(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <Field
                id="img_banner"
                name="img_banner"
                type="file"
                accept="image/png, .jpeg, .jpg, image/gif"
                component={MyComponent}
              />

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

              <ContainerButtonsStyled>
                <Button type="submit" width="200px">
                  Agregar Banner
                </Button>
              </ContainerButtonsStyled>
            </Form>
          );
        }}
      </Formik>
    </ContainerAddBannerStyled>
  );
};

export default AddBanner;
