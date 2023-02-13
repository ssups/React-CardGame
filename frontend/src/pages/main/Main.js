import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { commetAction, postAction, userAction } from '../../redux/middleware';
import { ImgSlide } from './style';
import AudioPlayer from 'react-h5-audio-player';
import { mainSound } from '../../sounds';
import {
  Wrap,
  BoardWrap,
  CenterBoard,
  RightBoard,
  LeftBoard,
  Title,
  BoardContents,
  BoardList,
} from './style';
import { PostPop } from '../../components';

const Main = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const rankData = useSelector(state => state.pointReducer.all_users);
  const boardData = useSelector(state => state.postReducer.topPosts);
  const isSoundOn = useSelector(state => state.soundReducer.isSoundOn);
  const loginUser = useSelector(state => state.loginReducer.id);
  const audioRef = useRef();

  // states
  const [ispostPop, setIsPostPop] = useState(false);
  const [order, setOrder] = useState('latest');

  // useEffects
  useEffect(() => {
    dispatch(userAction.getAllUsersPoints());
    dispatch(postAction.getTopPosts());
  }, []);

  useEffect(() => {
    const audio = audioRef.current.audio.current;
    isSoundOn ? audio.play() : audio.pause();
  }, [isSoundOn]);

  // functions
  function showPost(postData) {
    dispatch({ type: 'SET_POP_UP_POST_DATA', payload: postData });
    dispatch(commetAction.getComments(postData.id));
    if (postData.user_id !== loginUser) {
      postData.visited++;
      dispatch(postAction.increaseVisited(postData.id));
    }
    setIsPostPop(true);
  }

  return (
    <div className="contents">
      <AudioPlayer
        src={mainSound}
        autoPlay={true}
        ref={audioRef}
        volume={1}
        style={{ display: 'none' }}
        loop={true}
      />
      {ispostPop ? (
        <PostPop setIsPostPop={setIsPostPop} setOrder={setOrder} height={'calc(100% + 100px)'} />
      ) : null}
      <Wrap>
        <ImgSlide
          onMouseEnter={e => (e.target.style.filter = 'invert()')}
          onMouseLeave={e => (e.target.style.filter = 'none')}
        ></ImgSlide>
        <BoardWrap>
          <LeftBoard>
            <Title>공지사항</Title>
            <BoardContents>
              <BoardList>첫번째글</BoardList>
              <BoardList>두번째글</BoardList>
              <BoardList>세번째글</BoardList>
              <BoardList>네번째글</BoardList>
            </BoardContents>
          </LeftBoard>
          <CenterBoard>
            <Title>랭킹</Title>
            <BoardContents>
              <BoardList>
                <span style={{ width: '100%' }}>등수</span>
                <span style={{ width: '100%', textAlign: 'center' }}>아이디</span>
                <span style={{ width: '100%', textAlign: 'right' }}>점수</span>
              </BoardList>
              {rankData.map((el, ind) => {
                return (
                  <BoardList key={el && el.user_id}>
                    <span style={{ width: '100%' }}>{ind + 1}</span>
                    <span style={{ width: '100%', textAlign: 'center' }}>{el?.user_id}</span>
                    <span style={{ width: '100%', textAlign: 'right' }}>
                      {el?.point?.toLocaleString() + '점'}
                    </span>
                  </BoardList>
                );
              })}
            </BoardContents>
          </CenterBoard>
          <RightBoard>
            <Title>게시판</Title>
            <BoardContents>
              <BoardList>
                <span style={{ width: '100%' }}></span>
                <span style={{ width: '100%', textAlign: 'center' }}>제목</span>
                <span style={{ width: '100%', textAlign: 'right' }}>조회수</span>
              </BoardList>
              {boardData.length > 0 &&
                boardData.map((el, ind) => {
                  console.log(boardData.length);
                  return (
                    <BoardList
                      key={el.id}
                      onClick={() => showPost(el)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span style={{ width: '100%' }}>{ind + 1}</span>
                      <span
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {el.title}
                      </span>
                      <span style={{ width: '100%', textAlign: 'right' }}>{el.visited}</span>
                    </BoardList>
                  );
                })}
            </BoardContents>
          </RightBoard>
        </BoardWrap>
      </Wrap>
    </div>
  );
};

export default Main;
