import styled, { keyframes } from "styled-components";

const itemMotion = keyframes`
  50%{
    transform: scale(1.23);
  }
  100%{
    transform: scale(1);
  }
`;
const popMotion = keyframes`
  0%{
    opacity: 0;
    width: 0;
    height: 0;
    color: transparent;
  }
  100%{
    width: 500px;
    opacity: 1;    
  }
`;
const Whole = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  /* height: calc(100vh - 100px); */
  height: 100%;
  z-index: 999;
  /* 배경 흐리게 */
  backdrop-filter: blur(5px);
`;
const Wrap = styled.div`
  /* border: 2px solid black; */
  width: 500px;
  height: ${props => (props.purpose === "card" ? "700px" : "500px")};
  /* height: 700px; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.75);
  animation: ${popMotion} 1s linear;
  & > svg {
    width: 70%;
    height: 70%;
    animation: ${itemMotion} 2s infinite;
  }
`;
const Attribute = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  & > div {
    font-size: 30px;
  }
  & > div > input {
    font-size: 30px;
    width: 40%;
    /* height: 50px; */
  }
`;
const Button = styled.button`
  /* width: 200px; */
  width: 50%;
  /* height: 10%; */
  height: 50px;
  font-family: "arirang";
  font-size: 30px;
  overflow: hidden;
  word-break: keep-all;
`;
const CardWrap = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 6px solid black;
`;
const CardDescription = styled.div`
  background-color: white;
  width: 90%;
  height: 110px;
  font-size: 30px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 6px solid black;
  overflow: hidden;
  word-break: keep-all;
`;
const CardStatusWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Whole, Wrap, Attribute, Button, CardWrap, CardDescription, CardStatusWrap };
