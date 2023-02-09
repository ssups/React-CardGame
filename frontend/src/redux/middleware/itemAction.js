import axios from "axios";
import { userAction } from "./userAction";

function openCardPack(id, setPopUp) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/open_card_pack",
      data: { id },
    });
    alert(response);
    if (response === "개봉완료") {
      dispatch(userAction.getUserCards(id));
      dispatch(userAction.getUserItems(id));
      setPopUp(false);
    } else alert("오류발생");
  };
}
function openRareCardPack(id, setPopUp) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/open_rare_card_pack",
      data: { id },
    });
    alert(response);
    if (response === "개봉완료") {
      dispatch(userAction.getUserCards(id));
      dispatch(userAction.getUserItems(id));
      setPopUp(false);
    } else alert("오류발생");
  };
}
function openUltraRareCardPack(id, setPopUp) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/open_ultraRare_card_pack",
      data: { id },
    });
    alert(response);
    if (response === "개봉완료") {
      dispatch(userAction.getUserCards(id));
      dispatch(userAction.getUserItems(id));
      setPopUp(false);
    } else alert("오류발생");
  };
}
function openPointPack(id, setPopUp, amount) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/open_point_pack",
      data: { id, amount },
    });
    alert(response);
    if (response === "개봉완료") {
      dispatch(userAction.getUserItems(id));
      dispatch({ type: "INCREASE_USER_POINT", payload: amount });
      setPopUp(false);
    } else alert("오류발생");
  };
}
function buyItem(id, setPopUp, item, price, buyAmount, play) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/buy_item",
      data: { id, item, price, buyAmount },
    });
    alert(response);
    if (response === "구매완료") {
      dispatch(userAction.getUserItems(id));
      dispatch({ type: "DECREASE_USER_POINT", payload: price * buyAmount });
      setPopUp(false);
      play();
    } else alert("오류발생");
  };
}
function giftPoint(id, targetId, setPopUp, item, price, giftAmount, play) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/gift_point",
      data: { id, targetId, item, price, giftAmount },
    });
    alert(response);
    if (response === "선물완료") {
      dispatch({ type: "DECREASE_USER_POINT", payload: price * giftAmount });
      setPopUp(false);
      play();
    }
  };
}

export const itemAction = {
  openCardPack,
  openPointPack,
  buyItem,
  giftPoint,
  openRareCardPack,
  openUltraRareCardPack,
};
