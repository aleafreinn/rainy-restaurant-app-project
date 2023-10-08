import styled from "@emotion/styled";

const StickyDiv = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <>
      <StickyDiv>This is the footer</StickyDiv>
    </>
  );
};

export default Footer;
