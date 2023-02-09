import styled from "styled-components";
import { login } from "../../images";

const Whole = styled.div`
  animation: intro 2s;
`;
const BackGround = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -999;
  image-rendering: optimizeQuality;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: relative;
`;

export { Wrap, BackGround, Whole };
