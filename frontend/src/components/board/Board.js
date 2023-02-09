import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../../components";
import {
  Wrap,
  Title,
  Selection,
  PostsWrap,
  Description,
  Attributes,
  PageNum,
  Button,
} from "./style";
import { postAction } from "../../redux/middleware";
const Board = ({ name, setIsPosting, setIsPostPop, setOrder, order }) => {
  let allPosts = useSelector(state => state.postReducer.allPosts);
  const loginUserId = useSelector(state => state.loginReducer.id);
  const pageNumRef = useRef([]);
  const [amountPerPage, setAmountPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [dateSortColor, setDateSortColor] = useState("black");
  const [viewSortColor, setViewSortColor] = useState("black");
  const postsAmount = name === "게시판" ? allPosts?.length : null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postAction.getAllPosts());
  }, []);

  function onChange(e) {
    setAmountPerPage(e.target.value * 1);
    setCurrentPage(1);
  }
  function pageChange(e) {
    setCurrentPage(e.currentTarget.innerText * 1);
  }
  function sortByDate() {
    if (order === "old") {
      dispatch({ type: "SORT_POSTS_BY_NEW" });
      setOrder("latest");
    } else {
      dispatch({ type: "SORT_POSTS_BY_OLD" });
      setOrder("old");
    }
  }
  function sortByVisited() {
    if (order === "moreVisited") {
      dispatch({ type: "SORT_POSTS_BY_DOWN_VISITED" });
      setOrder("lessVisited");
    } else {
      dispatch({ type: "SORT_POSTS_BY_UP_VISITED" });
      setOrder("moreVisited");
    }
  }
  useEffect(() => {
    pageNumRef.current.forEach(el => el?.classList.remove("active"));
    pageNumRef.current[currentPage - 1]?.classList.add("active");
  }, [currentPage]);
  useEffect(() => {
    // 게시판 제일 마지막페이지에서 하나남은 글 삭제했을때 자동으로 전 페이지로 이동시키기
    if (amountPerPage * (currentPage - 1) >= allPosts.length)
      setCurrentPage(current => current - 1);
  }, [allPosts]);
  useEffect(() => {
    console.log(order);
    setDateSortColor(order === "latest" || order === "old" ? "red" : "black");
    setViewSortColor(order === "moreVisited" || order === "lessVisited" ? "red" : "black");
  }, [order]);
  return (
    <div>
      <Title>{name}</Title>
      <div
        style={{
          height: "30px",
          position: "relative",
          marginBottom: "10px",
          // display: "flex",
          // flexDirection:"",
        }}
      >
        {name === "게시판" ? (
          <Button onClick={() => setIsPosting(true)}>글쓰기</Button>
        ) : loginUserId === "admin" ? (
          <Button onClick={() => setIsPosting(true)}>공지쓰기</Button>
        ) : null}
        <Selection name="" id="" onChange={onChange}>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </Selection>
      </div>
      <Wrap>
        <Description>
          <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <div style={{ width: "50px", marginLeft: "40px", marginRight: "40px" }}>번호</div>{" "}
            <div style={{ width: "100%" }}> 제목</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "100px" }}> 작성자 </div>
            <div
              style={{ width: "120px", cursor: "pointer", color: dateSortColor }}
              onClick={sortByDate}
            >
              날짜 {order === "latest" ? "⇧" : order === "old" ? "⇩" : null}
            </div>
            <div
              style={{ width: "120px", cursor: "pointer", color: viewSortColor }}
              onClick={sortByVisited}
            >
              조회수 {order === "moreVisited" ? "⇧" : order === "lessVisited" ? "⇩" : null}
            </div>
          </div>
        </Description>
        {name === "게시판" ? (
          <PostsWrap>
            {Array(amountPerPage)
              .fill(0)
              .map((el, ind) => (
                <PostList
                  key={allPosts[ind + (currentPage - 1) * amountPerPage]?.id || -ind}
                  data={allPosts[ind + (currentPage - 1) * amountPerPage]}
                  LiNum={ind + (currentPage - 1) * amountPerPage + 1}
                  amountPerPage={amountPerPage}
                  setIsPostPop={setIsPostPop}
                />
              ))}
          </PostsWrap>
        ) : null}
        <Attributes>
          {Array(Math.ceil(postsAmount / amountPerPage))
            .fill(0)
            .map((el, ind) => (
              <PageNum key={ind} onClick={pageChange} ref={el => (pageNumRef.current[ind] = el)}>
                {ind + 1}
              </PageNum>
            ))}
        </Attributes>
      </Wrap>
    </div>
  );
};

export default Board;
