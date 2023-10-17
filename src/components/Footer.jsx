import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useItems } from "../store/ItemsContext";

const StickyDiv = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
`;

const Footer = () => {
  const { togglePage, switchPage } = useItems();
  return (
    <>
      <StickyDiv>
        <p>This is the footer</p>
        <Link to={switchPage ? "/" : "/admin"}>
          <button onClick={togglePage}>click me to toggle user mode</button>
        </Link>
      </StickyDiv>
    </>
  );
};

export default Footer;
