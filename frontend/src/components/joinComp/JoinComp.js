import React, { useEffect, useRef } from "react";
import { Wrap, Legend, Item, Label, Input, Fieldset, Button } from "./style";
import { userAction } from "../../redux/middleware";
import { useDispatch } from "react-redux";

const JoinComp = ({ setSwitched }) => {
  const inputs = useRef();
  const dispatch = useDispatch();
  function register() {
    const idVal = inputs.id.value;
    const nickVal = inputs.nickName.value;
    const pwVal = inputs.pw.value;
    // 검사;
    if (idVal === "" || idVal.includes(" ")) {
      alert("아이디 공백없이 입력하세요");
      return;
    }
    if (nickVal === "" || nickVal.includes(" ")) {
      alert("닉네임 공백없이 입력하세요");
      return;
    }
    if (pwVal === "" || pwVal.includes(" ")) {
      alert("비밀번호 공백없이 입력하세요");
      return;
    }

    dispatch(userAction.join(idVal, nickVal, pwVal, setSwitched));
  }
  function cancle() {
    setSwitched(current => !current);
  }
  return (
    <Wrap>
      <Fieldset>
        <Legend>명부</Legend>
        <Item>
          <Label htmlFor="id">아이디: </Label>{" "}
          <Input type="text" ref={el => (inputs.id = el)}></Input>{" "}
        </Item>
        <Item>
          <Label htmlFor="nickName">닉네임: </Label>{" "}
          <Input type="text" ref={el => (inputs.nickName = el)}></Input>
        </Item>
        <Item>
          <Label htmlFor="pw">비밀번호:</Label>
          <Input type="text" ref={el => (inputs.pw = el)}></Input>
        </Item>
        <Item>
          <Button onClick={register}>기록</Button>
          <Button onClick={cancle}>입장</Button>
        </Item>
      </Fieldset>
    </Wrap>
  );
};

export default JoinComp;
