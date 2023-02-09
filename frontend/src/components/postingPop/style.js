import styled from "styled-components";

const Whole = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 999;
`;
const Wrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  min-width: 1000px;
  height: 700px;
  margin: auto;
  background-color: white;
  border: 2px solid black;
`;
const InnerWrap = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
`;
const Title = styled.div`
  width: 100%;
  height: 80px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputTitle = styled.input`
  width: 400px;
  height: 50px;
  font-family: "arirang";
  font-size: 30px;
  text-align: center;
  margin-left: 20px;
  border: none;
  border-bottom: 1px solid black;
  :focus-visible {
    outline: none;
  }
`;
const SubTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
const ImgArea = styled.img`
  width: 50%;
  height: 500px;
  border: 1px solid black;
`;
const TextArea = styled.div`
  width: 100%;
  height: 500px;
  font-size: 25px;
  font-family: "arirang";
  :focus-visible {
    outline: none;
  }
  border: 1px solid black;
  /* border-left: none; */
  & .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    height: 459px;
  }
  & img {
    /* width: 400px;
    height: 400px; */
  }
`;
const ButtonWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 70px;
  height: 50px;
  font-family: "arirang";
  font-size: 30px;
  :nth-child(2) {
    margin-left: 80px;
  }
`;

export {
  Whole,
  Wrap,
  InnerWrap,
  Title,
  InputTitle,
  SubTitle,
  TextArea,
  ButtonWrap,
  Button,
  ImgArea,
};
