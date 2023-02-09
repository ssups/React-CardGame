import React, { useEffect, useRef } from "react";
import { Wrap, Legend, Item, Label, Input, Fieldset, Button } from "./style";
import { userAction } from "../../redux/middleware";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/middleware";
import { useNavigate } from "react-router-dom";

const LoginComp = ({ setOnLoad, setSwitched, setIsLoginPage }) => {
  const inputs = useRef();
  const dispatch = useDispatch();
  const nav = useNavigate();
  function move() {
    setOnLoad(true);
    // dispatch({ type: "ON_LOAD" });
    setIsLoginPage(false);
    nav("/main");
  }
  function login() {
    const idVal = inputs.id.value;
    const pwVal = inputs.pw.value;
    // 검사;
    if (idVal === "") {
      alert("아이디 입력하세요");
      return;
    }
    if (pwVal === "") {
      alert("비밀번호 입력하세요");
      return;
    }
    dispatch(loginAction.login(idVal, pwVal, move));
  }
  function cancle() {
    setSwitched(current => !current);
  }
  return (
    <Wrap>
      <Fieldset>
        <Legend>방명록</Legend>
        <Item>
          <Label htmlFor="id">아이디: </Label>{" "}
          <Input type="text" ref={el => (inputs.id = el)}></Input>{" "}
        </Item>
        <Item>
          <Label htmlFor="pw">비밀번호:</Label>
          <Input type="text" ref={el => (inputs.pw = el)}></Input>
        </Item>
        <Item>
          <Button onClick={login}>입장</Button>
          <Button onClick={cancle}>가입</Button>
        </Item>
      </Fieldset>
    </Wrap>
  );
};

export default LoginComp;
