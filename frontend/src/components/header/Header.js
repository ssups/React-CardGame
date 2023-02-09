import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Whole,
  Wrap,
  Logo,
  Menu,
  MenuLi,
  MenuContents,
  MenuImg,
  User,
  UserContents,
  Alarm,
  AlarmNum,
} from "./style";
import { userAction } from "../../redux/middleware";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  logo,
  flower_greyblue,
  flower_purple,
  flower_red,
  flower_skyblue,
  flower_yellow,
} from "../../images";

const Header = ({ setOnLoad }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userData = useSelector(state => state.loginReducer);
  const items = useSelector(state => state.itemReducer);
  const itemsAmount = Object.values(items).reduce((acc, cur) => {
    let numCur = 0;
    if (typeof cur === "number") numCur = cur;
    return acc + numCur;
  }, 0);
  function move(path) {
    setOnLoad(true);
    nav(`${path}`);
  }
  function logout() {
    sessionStorage.clear();
    dispatch({ type: "LOGOUT" });
    setOnLoad(true);
    // nav("/");
  }
  useEffect(() => {
    // 로그아웃했을때 로그인 페이지에서 userId state값을 못받아오는경우의 에러 방지
    if (userData.id) dispatch(userAction.getUserItems(userData.id));
  }, []);
  return (
    <div className="Header">
      <Whole>
        <Wrap>
          <Logo data-path="/main" onClick={e => move(e.currentTarget.dataset.path)}>
            <img style={{ width: "80px" }} src={logo} alt="" />
            <div style={{ width: "120px", textAlign: "center" }}>페이지 이름</div>
          </Logo>
          <Menu>
            <MenuLi data-path="/shop" onClick={e => move(e.currentTarget.dataset.path)}>
              <MenuContents>
                <MenuImg src={flower_red} alt="" />
                <span>상점</span>
              </MenuContents>
            </MenuLi>
            <MenuLi>
              <MenuContents>
                <MenuImg src={flower_greyblue} alt="" />
                <span>게임</span>
              </MenuContents>
            </MenuLi>
            <MenuLi data-path="/card_book" onClick={e => move(e.currentTarget.dataset.path)}>
              <MenuContents>
                <MenuImg src={flower_purple} alt="" />
                <span>카드북</span>
              </MenuContents>
            </MenuLi>
            <MenuLi data-path="/public_board" onClick={e => move(e.currentTarget.dataset.path)}>
              <MenuContents>
                <MenuImg src={flower_skyblue} alt="" />
                <span>게시판</span>
              </MenuContents>
            </MenuLi>
            <MenuLi data-path="/notice_board" onClick={e => move(e.currentTarget.dataset.path)}>
              <MenuContents>
                <MenuImg src={flower_yellow} alt="" />
                <span>공지사항</span>
              </MenuContents>
            </MenuLi>
          </Menu>
          <User>
            <UserContents data-path="/mypage" onClick={e => move(e.currentTarget.dataset.path)}>
              마이페이지
              <Alarm>
                <FontAwesomeIcon icon={faBell} className={itemsAmount ? "active" : ""} />
                <AlarmNum style={{ color: itemsAmount ? "red" : "" }}>{itemsAmount}</AlarmNum>
              </Alarm>
            </UserContents>
            /
            <UserContents data-path="/logout" onClick={logout}>
              로그아웃
            </UserContents>
            <UserContents style={{ fontSize: "20px" }}>
              {/* <span style={{ fontWeight: "900" }}>{userData.id}</span>님 */}
              <span style={{ marginRight: "10px" }}> 보유 포인트:</span>
              {userData.point?.toLocaleString()}P
            </UserContents>
          </User>
        </Wrap>
      </Whole>
    </div>
  );
};

export default Header;
