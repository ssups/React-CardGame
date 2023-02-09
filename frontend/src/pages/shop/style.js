import styled from "styled-components";

const Whole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Wrap = styled.div`
  width: 1300px;
  margin: auto;
  padding-top: 50px;
`;
const Items = styled.div`
  display: flexbox;
  height: 400px;
  padding: 30px;
  width: 100%;
  border: 5px solid black;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  /* background: rgba(255, 255, 255, 0.1); */
  font-size: 0;
  perspective: 1000px;
  ::-webkit-scrollbar {
    display: none;
  }
  &.active {
    background: rgba(255, 255, 255, 0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`;
const Item = styled.div`
  padding: 10px;
  width: 300px;
  height: 340px;
  /* display: inline-flex; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 35px;
  /* 테두리 색 */
  /* box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15); */
  box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  :nth-child(even) {
    transform: scaleX(1.31) rotateY(40deg);
  }
  :nth-child(odd) {
    transform: scaleX(1.31) rotateY(-40deg);
  }
  :last-child {
    margin-right: 60px;
  }
  & > svg {
    height: 70%;
  }
  /* transform: translateX(0); */
`;

export { Whole, Wrap, Items, Item };
