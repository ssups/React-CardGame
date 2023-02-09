import axios from "axios";

function login(id, pw, move) {
  return async (dispatch, getState) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/login",
      data: { id, pw },
    });
    if (response.success) {
      alert(response.msg);
      sessionStorage.setItem("access_token", response.access_token);
      sessionStorage.setItem("refresh_token", response.refresh_token);
      sessionStorage.setItem("user_id", id);
      sessionStorage.setItem("isLogin", true);
      dispatch({ type: "LOGIN", payload: response.data });
      move();
    } else alert(response.msg);
  };
}

function loginCheck() {
  // console.log("로그인 첵 실행");
  const access_token = sessionStorage.getItem("access_token");
  const refresh_token = sessionStorage.getItem("refresh_token");
  const user_id = sessionStorage.getItem("user_id");
  return async (dispatch, getState) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/loginCheck",
      data: { access_token, refresh_token, user_id },
    });
    if (response.re_access_token) sessionStorage.setItem("access_token", response.re_access_token);
    if (response.isLogin) {
      dispatch({ type: "LOGIN", payload: response.user });
    } else {
      //리프레쉬토큰 썩었을때
      sessionStorage.clear();
    }
  };
}

export const loginAction = { login, loginCheck };
