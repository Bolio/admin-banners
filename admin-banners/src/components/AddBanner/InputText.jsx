import styled from "styled-components";

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

const InputText = ({ field, form, props }) => {
  return <InputTextAddBannerStyled {...field} {...props} />;
};

export default InputText;
