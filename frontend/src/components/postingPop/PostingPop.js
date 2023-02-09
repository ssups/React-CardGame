import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Whole,
  Wrap,
  InnerWrap,
  Title,
  InputTitle,
  SubTitle,
  TextArea,
  ButtonWrap,
  Button,
} from "./style";
import Editor from "../editor/Editor";
import { postAction } from "../../redux/middleware";
// import { CKEditor } from "@ckeditor/ckeditor5-react";

const PostingPop = ({ setIsPosting, setOrder }) => {
  const dispatch = useDispatch();
  const writer = useSelector(state => state.loginReducer.id);
  const tittleRef = useRef();
  const [postData, setPostData] = useState();
  //   const [postData, setPostData] = useState({ title: "", main: "" });
  function closePostingPop(e) {
    if (e.target.dataset.for === "backGround") setIsPosting(false);
  }
  function register() {
    const titleVal = tittleRef.current.value;
    if (titleVal === "" || undefined) {
      alert("제목을 적어주세요");
      return;
    }
    dispatch(postAction.registerPost(writer, titleVal, postData, setIsPosting, setOrder));
  }

  return (
    <Whole data-for="backGround" onClick={closePostingPop}>
      <Wrap>
        <InnerWrap>
          <Title>
            제목 : <InputTitle ref={tittleRef}></InputTitle>
          </Title>
          <SubTitle> 작성자: {writer}</SubTitle>
          <div style={{ display: "flex" }}>
            <TextArea>
              <Editor setPostData={setPostData} />
            </TextArea>
          </div>
          <ButtonWrap>
            <Button onClick={register}>작성</Button>
            {/* <Button>취소</Button> */}
          </ButtonWrap>
        </InnerWrap>
      </Wrap>
    </Whole>
  );
};

export default PostingPop;
