import React, { useEffect, useRef, useState } from "react";
import { Whole } from "./style";
import { Board, PostingPop, PostPop } from "../../components/";
import { useDispatch } from "react-redux";
import { postAction } from "../../redux/middleware";

const PublicBoard = () => {
  const dispatch = useDispatch();
  const [isPosting, setIsPosting] = useState(false);
  const [ispostPop, setIsPostPop] = useState(false);
  const [order, setOrder] = useState("latest");
  // useEffect(() => {
  //   dispatch(postAction.getAllPosts());
  // }, []);

  return (
    <div className="contents">
      {ispostPop ? <PostPop setIsPostPop={setIsPostPop} setOrder={setOrder} /> : null}
      {isPosting ? <PostingPop setIsPosting={setIsPosting} setOrder={setOrder} /> : null}
      <Whole>
        <Board
          name="게시판"
          setIsPosting={setIsPosting}
          setIsPostPop={setIsPostPop}
          order={order}
          setOrder={setOrder}
        />
      </Whole>
    </div>
  );
};

export default PublicBoard;
