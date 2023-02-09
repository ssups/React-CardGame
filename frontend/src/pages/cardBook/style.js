import styled from "styled-components";
const Whole = styled.div`
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
const Wrap = styled.div`
  height: calc(100vh - 200px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* width: 90%; */
  width: max-content;
  /* width: fit-content; */
  max-width: 90%;
  background-color: white;
  margin: auto;
  padding: 20px 0 10px 20px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* justify-content: center; */
  overflow-y: scroll;
  border: 5px solid black;
`;
const CardWrap = styled.div`
  width: calc(20% - 12px);
  /* max-width: calc(20% - 12px); */
  max-width: 400px;
  min-width: 300px;
  height: 60%;
  min-height: 500px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  /* flex: auto; */
  align-items: center;
  justify-content: center;
  border: 6px solid black;
  position: relative;
  :nth-child(5n + 0) {
    margin-right: none;
  }
  :nth-child(n + 0) {
    /* margin-left: 10px; */
  }
`;
const CardCount = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(30%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardImg = styled.img`
  width: 90%;
  height: 80%;
  border: 4px solid black;
`;

export { Whole, Wrap, CardWrap, CardCount, CardImg };
