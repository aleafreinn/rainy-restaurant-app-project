import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useItems } from "../store/ItemsContext";

const StickyDiv = styled.footer`
  position: sticky;
  bottom: 0;
  background-color: #000000cc;
  text-align: center;
  width: 100%;
  padding: 1rem 0rem;
  & > p {
    margin: 0;
  }
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
