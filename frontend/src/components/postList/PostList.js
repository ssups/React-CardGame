import React from "react";
import { List, ThumbNail, Title } from "./style";
import parser from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { commetAction, postAction } from "../../redux/middleware";

const PostList = ({ data, LiNum, amountPerPage, setIsPostPop }) => {
  const dispatch = useDispatch();
  const loginUser = useSelector(state => state.loginReducer.id);
  const Html = <>parser(data?.main)</>;
  const time = new Date(data?.createdAt);
  // 달이 좀 이상함;
  const month = time.getMonth() + 1;
  function showPost() {
    dispatch({ type: "SET_POP_UP_POST_DATA", payload: data });
    dispatch(commetAction.getComments(data.id));
    if (data.user_id !== loginUser) {
      data.visited++;
      dispatch(postAction.increaseVisited(data.id));
    }
    setIsPostPop(true);
  }

  return (
    <>
      {data ? (
        <List>
          <span
            style={{
              width: "50px",
              fontSize: `${70 / (amountPerPage / 2)}px`,
              textAlign: "center",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            {LiNum}
          </span>
          <span style={{ width: "60%", display: "flex", alignItems: "center" }}>
            {data.thumb_nail ? (
              <ThumbNail src={data.thumb_nail} alt="" amountPerPage={amountPerPage}></ThumbNail>
            ) : (
              <div
                style={{
                  width: `calc((100vh - 300px) / ${amountPerPage} - 20px)`,
                  height: `calc((100vh - 300px) / ${amountPerPage} - 20px)`,
                  marginRight: "80px",
                }}
              ></div>
            )}
            <Title amountPerPage={amountPerPage} onClick={showPost}>
              {data.title} <span>({data.Comments?.length})</span>
            </Title>
          </span>
          <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: "100px" }}> {data.user_id} </div>
            <div style={{ width: "120px" }}>
              <div>{time.getFullYear() + "-" + month + "-" + time.getDate()}</div>
              <div>{time.getHours() + ":" + time.getMinutes()}</div>
            </div>
            <div style={{ width: "120px" }}> {data.visited} </div>
          </div>
        </List>
      ) : (
        <div style={{ height: "100%" }}></div>
      )}
    </>
  );
};

export default PostList;
