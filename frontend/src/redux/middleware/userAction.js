import axios from "axios";

function join(id, nickName, pw, setSwitched) {
  return async (dispatch, getState) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/join",
      data: { id, nickName, pw },
    });
    console.log(response);
    if (response.success) {
      alert(response.msg);
      setSwitched(current => !current);
    } else {
      alert(response.msg);
    }
  };
}

function getUserCards(id) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/get_user_cards",
      data: { id },
    });
    if (response) dispatch({ type: "GET_USER_CARDS", payload: { id, data: response } });
  };
}

function getUserItems(id) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/get_user_items",
      data: { id },
    });
    if (response) dispatch({ type: "GET_USER_ITEMS", payload: response });
  };
}

function getAllUsersPoints() {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      url: "http://localhost:4000/get_users_point",
    });
    response && dispatch({ type: "GET_ALL_USERS_POINTS", payload: response });
  };
}

export const userAction = { join, getUserCards, getUserItems, getAllUsersPoints };
