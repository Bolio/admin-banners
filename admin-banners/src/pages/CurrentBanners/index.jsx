import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import CurrentBanner from "../../components/CurrentBanner";

const ContainerBannersStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: gray;
`;

const CurrentBanners = ({}) => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/banners")
      .then((response) => response.json())
      .then((data) => setBanners(data));
  }, []);

  console.log(" banners:", banners);

  return (
    <ContainerBannersStyled>
      {banners?.map((banner) => (
        <CurrentBanner
          idBanner={banner.id}
          img={banner.img_banner}
          title={banner.name_banner}
          linkBanner={banner.link_banner}
          textBanner={banner.text_banner}
        />
      ))}
    </ContainerBannersStyled>
  );
};

export default CurrentBanners;
