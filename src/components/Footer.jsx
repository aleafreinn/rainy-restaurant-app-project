import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useItems } from "../store/ItemsContext";
import { imageFooterURL } from "../constants/imageConstants";

const StickyDiv = styled.footer`
  position: sticky;
  bottom: 0;
  background-color: #000000cc;
  text-align: center;
  width: 100%;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 5;
  & > p {
    margin: 0;
  }
`;

const Footer = () => {
  const { togglePage, switchPage } = useItems();
  return (
    <>
      <StickyDiv>
        {switchPage ? (
          <img src={imageFooterURL} alt="footer" style={{ width: "10%" }} />
        ) : (
          ""
        )}
        <Link to={switchPage ? "/" : "/admin"}>
          <button onClick={togglePage}>
            Toggle {switchPage ? "user" : "admin"} mode
          </button>
        </Link>
      </StickyDiv>
    </>
  );
};

export default Footer;
