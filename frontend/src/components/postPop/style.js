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
  height: 730px;
  margin: auto;
  background-color: white;
  border: 2px solid black;
  overflow: scroll;
`;
const InnerWrap = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
const TitleWrap = styled.div`
  width: 100%;
  height: 80px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
`;
const Title = styled.div`
  width: 400px;
  height: 40px;
  font-family: "arirang";
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  margin-left: 20px;
  border: none;

  /* border-bottom: 1px solid black; */
  :focus-visible {
    outline: none;
  }
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
  /* flex-direction: row-reverse; */
  align-items: center;
  justify-content: space-between;
  /* & > span {
    margin-left: 20px;
  } */
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
  overflow: scroll;
  :focus-visible {
    outline: none;
  }
  border: 1px solid black;
  & .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    height: 459px;
  }
  & img {
    /* width: 400px;
    height: 400px; */
  }
`;
const CommentWrap = styled.details`
  width: 100%;
  margin-top: 20px;
  /* border-bottom: 1px solid black; */
  &[open] {
    & > div {
      :nth-child(3) {
        border: 1px solid black;
      }
    }
    & > summary {
      /* margin-bottom: 20px; */
    }
  }
`;
const CommentInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
`;
const CommentInput = styled.input`
  /* width: 90%; */
  flex-grow: 1;
  max-width: 90%;
  margin: 0 15px 0 15px;
  border: none;
  border-bottom: 1px solid black;
  padding-left: 10px;
  font-family: "arirang";
  font-size: 23px;
  :focus-visible {
    outline: none;
  }
`;
const CommentBtn = styled.button`
  font-family: "arirang";
  font-size: 23px;
  width: 55px;
`;
const Comments = styled.div`
  padding: 20px;
`;
const CommentsButton = styled.button`
  width: 23px;
  height: 23px;
  background-color: white;
  border: none;
  cursor: pointer;
`;
const ButtonWrap = styled.div`
  width: 100%;
  /* height: 70px; */
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* margin-top: 20px; */
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
  TitleWrap,
  Title,
  InputTitle,
  SubTitle,
  TextArea,
  CommentWrap,
  CommentInputWrap,
  CommentInput,
  CommentBtn,
  Comments,
  CommentsButton,
  ButtonWrap,
  Button,
  ImgArea,
};
