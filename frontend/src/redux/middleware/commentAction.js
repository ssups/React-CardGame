import axios from "axios";

function getComments(postId) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/get_comments",
      data: { postId },
    });
    response
      ? dispatch({ type: "SET_POP_UP_POST_COMMENTS", payload: response })
      : dispatch({ type: "SET_POP_UP_POST_COMMENTS", payload: [] });
  };
}

function registerComment(postId, userId, text) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/register_comments",
      data: { postId, userId, text },
    });
    alert(response.msg);
    if (response.msg === "등록 완료") {
      dispatch({ type: "SET_POP_UP_POST_COMMENTS", payload: response.comments });
      dispatch({ type: "GET_ALL_POSTS", payload: response.allPosts });
    }
  };
}

function delComment(commentId, postId) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/del_comments",
      data: { commentId, postId },
    });
    alert(response.msg);
    if (response.msg === "삭제 완료") {
      dispatch({ type: "SET_POP_UP_POST_COMMENTS", payload: response.comments });
      dispatch({ type: "GET_ALL_POSTS", payload: response.allPosts });
    }
  };
}

const commetAction = { getComments, registerComment, delComment };
export default commetAction;
