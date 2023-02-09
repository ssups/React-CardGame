const init = {
  all_users: [null],
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "GET_ALL_USERS_POINTS":
      return { ...state, all_users: [...payload] };

    default:
      return state;
  }
}

export default reducer;
