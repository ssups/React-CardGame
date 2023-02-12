const init = {
  isSoundOn: true,
};
function reducer(state = init, { type, payload }) {
  switch (type) {
    case 'SOUND_OFF':
      return { ...state, isSoundOn: false };
    case 'SOUND_ON':
      return { ...state, isSoundOn: true };
    default:
      return state;
  }
}

export default reducer;
