import styled from "styled-components";

const Wrap = styled.div`
  border: 3px solid black;
  width: 200px;
  height: 100%;
  margin-right: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 15px 15px 5px rgba(0, 0, 0, 0.5);
  /* box-shadow: 10px rgba(0, 0, 0, 0.5); */
  transform: scaleX(1.2) rotateY(35deg);
  :first-child {
    margin-left: 20px;
  }
`;
const CardImg = styled.img`
  width: 150px;
  height: 150px;
  border: 3px solid black;
  background-color: white;
`;
const CardDescription = styled.div`
  background-color: white;
  width: 150px;
  height: 80px;
  margin-top: 10px;
  border: 3px solid black;
  flex-wrap: wrap;
  font-size: 17px;
  padding: 2px;
  display: flex;
  justify-content: space-between;
`;
const CardStatus = styled.div`
  /* width: 66px; */
`;

export { Wrap, CardDescription, CardImg, CardStatus };
