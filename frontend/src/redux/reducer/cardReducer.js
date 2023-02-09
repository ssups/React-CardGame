const init = {
  default: "dfer",
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "GET_USER_CARDS":
      state[payload.id] = payload.data;
      // state 값이 객체일 경우 객체의 특정 키에 해당하는 value가 바뀌더라도 리액트는 인식하지 못하기 때문에
      // 여기서 그냥 return state 해버리면 새로운 원소가 추가된 객체를 return시키지 못한다.
      return { ...state };
    case "UPDATE_USER_CARDS":
      return;

    default:
      return state;
  }
}

export default reducer;
