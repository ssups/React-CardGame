const init = {
  // 여기서 allPosts 값 빈배열로 쓰면 맨처음 브라우저 접속하고 로그인했을때 allPosts 값 업데이트 되도
  // 게시판 리렌더링 안된다. 빈배열로쓰면 값 바뀐거 인식 못하는듯 그래서 배열안에 null 넣어줌
  allPosts: [null],
  popUpPost: null,
  popUpPost_comments: [null],
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "GET_ALL_POSTS":
      // const sorted = payload.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      // 이런식으로 스프레드로 안적고 그냥 sorted 배열 자체를 넣어버리면 값이 바뀐지 인지못함
      return { ...state, allPosts: [...payload] };
    case "SORT_POSTS_BY_OLD":
      const oldOrder = state.allPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      return { ...state, allPosts: [...oldOrder] };
    case "SORT_POSTS_BY_NEW":
      const newOrder = state.allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return { ...state, allPosts: [...newOrder] };
    case "SORT_POSTS_BY_UP_VISITED":
      const upVisited = state.allPosts.sort((a, b) => b.visited - a.visited);
      return { ...state, allPosts: [...upVisited] };
    case "SORT_POSTS_BY_DOWN_VISITED":
      const downVisited = state.allPosts.sort((a, b) => a.visited - b.visited);
      return { ...state, allPosts: [...downVisited] };
    case "SET_POP_UP_POST_DATA":
      return { ...state, popUpPost: { ...payload } };
    case "SET_POP_UP_POST_COMMENTS":
      const latestOrder = payload.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return { ...state, popUpPost_comments: [...latestOrder] };
    default:
      return state;
  }
}

export default reducer;
