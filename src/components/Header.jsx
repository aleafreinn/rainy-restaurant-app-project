import Button from "@mui/material/Button";
import { yellow } from "@mui/material/colors";
import styled from "@emotion/styled";

const HeaderContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
    max-height: 600px;
    overflow: hidden;
    object-fit: cover;
  }
  & > .title-container {
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#22222200, #222222ff 100%);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
      font-size: 50pt;
      font-weight: lighter;
      color: #ffffff;
      filter: drop-shadow(0px 0px 20px #000000);
      letter-spacing: 0.5rem;
      margin: 0;
    }
    & > h2 {
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      font-weight: normal;
      margin: 0;
    }
    & > hr {
      border: 1px solid white;
      width: 50%;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 800px) {
      & > p {
        font-size: 35pt;
      }
      & > h2 {
        font-size: 12pt;
      }
      & > hr {
        margin-bottom: 1rem;
      }
    }

    @media screen and (max-width: 600px) {
      & > p {
        font-size: 25pt;
      }
      & > h2 {
        font-size: 9pt;
      }
      & > hr {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const FoodNavButton = styled(Button)`
  background-color: ${yellow[600]};
  color: #222222;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin: 3rem;
  filter: drop-shadow(0rem 0.5rem 10px #ffe55488);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${yellow[400]};
    filter: drop-shadow(0rem 0.5rem 20px #ffe55488);
  }
`;

const Header = () => {
  const imgHeaderLink = "https://i.ibb.co/SvscXFf/Japan-Anime-Food.jpg";

  function scrollToSection(id) {
    // event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <HeaderContainer>
        <div className="title-container">
          <p>
            rainy <span style={{ color: "#ffe554" }}>mae</span>&apos;s
          </p>
          <hr />
          <h2>your aesthetic anime delights come to real life</h2>
          <h2>現実の美的アニメ料理</h2>
          <FoodNavButton
            size="small"
            onClick={() => scrollToSection("food-list")}
          >
            tabemashou!
          </FoodNavButton>
        </div>
        <img src={imgHeaderLink} alt="image header" />
      </HeaderContainer>
    </>
  );
};

export default Header;
