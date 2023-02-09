import styled from "styled-components";

const LeftDoor = styled.img`
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  width: 50%;
  height: 100%;
  animation: leftMove 2.1s;
  @keyframes leftMove {
    35% {
      transform: translate(0);
      opacity: 1;
    }
    60% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0.5;
    }
  }
`;
const RightDoor = styled.img`
  position: absolute;
  right: 0;
  transform: translate(100%);
  width: 50%;
  height: 100%;
  animation: rightMove 2.1s;
  @keyframes rightMove {
    35% {
      transform: translate(0);
      opacity: 1;
    }
    60% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0.5;
    }
  }
`;

export { LeftDoor, RightDoor };
