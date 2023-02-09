import styled from "styled-components";

const Wrap = styled.div`
  width: 1300px;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Fieldset = styled.fieldset`
  width: 300px;
  background-image: url(https://t4.ftcdn.net/jpg/04/42/46/77/360_F_442467734_W92zH01PvvXXw3xZy2G5K8U6c5beGGnO.jpg);
  display: flex;
  flex-direction: column;
  border-radius: 10%;
  padding: 20px;
`;
const Legend = styled.legend`
  font-size: 40px;
  text-align: center;
`;
const Item = styled.div`
  margin-top: 5px;
  margin-bottom: 30px;
  width: 250px;
  /* height: 50px; */

  display: flex;
  justify-content: space-between;
  :last-child {
    margin-bottom: 10px;
  }
`;
const Label = styled.label`
  height: 30px;
`;
const Input = styled.input`
  width: 150px;
`;
const Button = styled.button`
  width: 70px;
  font-family: "arirang";
  font-size: 25px;
`;
export { Wrap, Legend, Item, Label, Input, Fieldset, Button };
