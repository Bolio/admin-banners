import styled, { css } from "styled-components";


const ContainerAddBannersStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: gray;
`;

const CurrentBanners = ({}) => {
  return <ContainerAddBannersStyled></ContainerAddBannersStyled>;
};

export default CurrentBanners;
