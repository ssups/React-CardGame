const init = {
  sdf: 123,
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "GET_USER_ITEMS":
      return { ...payload };

    default:
      return state;
  }
}

export default reducer;
