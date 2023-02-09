import styled, { keyframes } from "styled-components";

const Whole = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 100px;
  /* border-bottom: 2px solid black; */
  background-color: white;
`;
const Wrap = styled.div`
  width: 90%;
  min-width: 1250px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const spin = keyframes`
100%{
  transform: rotate(360deg);
}
`;
const Logo = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 23px;
  :hover {
    transform: scale(1.1);
    & img {
      animation: ${spin} 1s linear infinite;
    }
  }

  /* background-color: yellow; */
`;
const Menu = styled.ul`
  width: max-content;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  list-style: none;
`;
const MenuLi = styled.li`
  /* width: 100%; */
  width: max-content;
  height: 40px;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  :last-child {
    border-right: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
  padding-right: 15px;
`;
const MenuContents = styled.div`
  display: flex;
  align-items: center;
  :hover {
    transform: scale(1.25);
    & img {
      animation: ${spin} 1s linear infinite;
    }
  }
`;
const MenuImg = styled.img`
  height: 30px;
  margin-right: 5px;
`;
const User = styled.div`
  width: 232px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  /* background-color: yellow; */
`;
const UserContents = styled.span`
  display: flex;
  align-items: center;
  :first-child {
    margin-right: 10px;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
    }
  }
  :nth-child(2) {
    margin-left: 10px;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
    }
  }
  :last-child {
    position: absolute;
    bottom: 6px;
  }
`;
const alarmMotion = keyframes`
  25%{
    transform: rotate(-20deg);
  }
  75%{
    transform: rotate(20deg);
  }
`;
const Alarm = styled.div`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;

  & > svg {
    height: 35px;
    /* animation: ${alarmMotion} 1s infinite linear; */
    /* animation-timing-function: linear; */
  }
  & > .active {
    animation: ${alarmMotion} 1s infinite linear;
    color: red;
  }
  /* :hover {
    transform: scale(1.1);
  } */
`;
const AlarmNum = styled.span`
  font-size: 15px;
  position: absolute;
  /* right: 11px; */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
export {
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
};
