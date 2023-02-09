import styled from "styled-components";

const Title = styled.div`
  width: 200px;
  height: 70px;
  /* margin-top: 20px; */
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  background-color: white;
  transform: translateY(25%);
  border: 2px solid black;
  border-radius: 20px;
`;
const Selection = styled.select`
  position: absolute;
  right: 0px;
  width: 50px;
  height: 100%;
  font-family: "arirang";
  font-size: 25px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  font-family: "arirang";
  font-size: 25px;
  box-sizing: border-box;
  border: 2px solid black;
  position: absolute;
  right: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 250px);
  border: 2px solid black;
  background-color: white;
`;
const Description = styled.div`
  width: 90%;
  height: 50px;
  margin: auto;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
const PostsWrap = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  flex-direction: column;
  /* padding-bottom: 15px; */
  /* background-color: red; */
`;

const Attributes = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const PageNum = styled.span`
  border-left: 2px solid rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  :first-child {
    border: none;
  }
  &.active {
    color: red;
  }
`;

export { Wrap, Title, Selection, PostsWrap, Description, Attributes, PageNum, Button };
