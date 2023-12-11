import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0%;
  z-index: 10;
  background-color: #00000088;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingEffect = () => {
  return (
    <>
      <Background>
        <CircularProgress color="warning" />
      </Background>
    </>
  );
};

export default LoadingEffect;
