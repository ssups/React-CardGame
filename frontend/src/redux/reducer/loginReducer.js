const init = {
  id: null,
  nickName: null,
  cards: null,
  point: null,
  isLogin: false,
};
function reducer(state = init, { type, payload }) {
  switch (type) {
    case "LOGIN":
      const { user_id: id, nick_name: nickName, cards, point } = payload;
      return { id, nickName, cards, point, isLogin: true };

    case "LOGOUT":
      return { isLogin: false };
    case "INCREASE_USER_POINT":
      return { ...state, point: state.point + payload };
    case "DECREASE_USER_POINT":
      return { ...state, point: state.point - payload };
    default:
      return state;
  }
}

export default reducer;

// 로그인하면 백에서 토큰발급
// 프론트 app.js 에서 useEffect 빈객체 써서 로그인 체크하는 액션 실행
// 액션에서 axios get방식으로 백으로 넘어가서 토큰검사하고 로그인 체크해서 보내주기
// 받아온걸로 isLogin state 업데이트하기
