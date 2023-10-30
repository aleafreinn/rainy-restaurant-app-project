import styled from "@emotion/styled";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./image-gallery-modifier.scss";
import { useItems } from "../../store/ItemsContext";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 4rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const DescriptionBox = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  & > h1,
  & > h2 {
    margin: 0;
  }
  & > h1 {
    font-size: 25pt;
  }
  & > h2 {
    color: #ffe02edc;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const ImageBox = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const AboutComponent = () => {
  const { itemsData } = useItems();
  const imageList = itemsData.map((itemData) => {
    return {
      original: itemData.image,
      thumbnail: itemData.image,
    };
  });
  console.log(imageList);
  return (
    <MainContainer>
      <DescriptionBox>
        <h1>はじめまして！ 俺たちは「レイニーメース」</h1>
        <h2>Hello! We are Rainy Mae&apos;s</h2>
        <p>
          Welcome to Rainy Mae&apos;s, the ultimate destination for food
          enthusiasts and anime lovers alike! Immerse yourself in a world where
          the delectable dishes from your favorite anime shows come to life. Our
          mission is simple: to bring the mouthwatering, whimsical, and visually
          stunning dishes featured in the world of anime right to your plate. At
          Rainy Mae&apos;s, we believe that every meal should be a delightful
          adventure, and we&apos;ve turned that belief into a reality.
        </p>
        <h1>アニメの食器をお願いします！</h1>
        <h2>Anime dishes, please!</h2>
        <p>
          Rainy Mae&apos;s was born out of a shared passion for the captivating
          world of anime and the tantalizing dishes that often take center stage
          in these beloved shows. Whether you&apos;re a seasoned otaku or just
          discovering the enchanting world of anime, our cafe offers a unique
          dining experience that bridges the gap between these two worlds.
          We&apos;ve meticulously recreated iconic dishes featured in your
          favorite anime series, capturing the essence of each culinary creation
          while ensuring they taste just as good as they look on-screen.
        </p>
      </DescriptionBox>
      <ImageBox>
        <ImageGallery
          items={imageList}
          showThumbnails={false}
          showFullscreenButton={false}
          autoPlay={true}
          showPlayButton={false}
        />
      </ImageBox>
    </MainContainer>
  );
};

export default AboutComponent;
