import React from "react";
import { Wrap, CardDescription, CardImg, CardStatus } from "./style";
import { cards } from "../../images";

const Card = ({ data, setPopUp, setPurpose, stop, setCardData }) => {
  const attackColor =
    data.attack >= 25
      ? "rgb(212,175,55)"
      : data.attack < 25 && data.attack >= 15
      ? "rgb(170,169,173)"
      : "black";
  const defColor =
    data.def >= 25
      ? "rgb(212,175,55)"
      : data.def < 25 && data.def >= 15
      ? "rgb(170,169,173)"
      : "black";
  const averageColor =
    data.average >= 25
      ? "rgb(212,175,55)"
      : data.average < 25 && data.average >= 15
      ? "rgb(170,169,173)"
      : "black";
  const rarityColor =
    data.rarity === "UltraRare"
      ? "rgb(212,175,55)"
      : data.rarity === "Rare"
      ? "rgb(170,169,173)"
      : "black";
  function showCard(e) {
    console.log(e.currentTarget);
    stop();
    setPurpose("card");
    setPopUp(true);
    setCardData(data);
  }
  return (
    <Wrap style={{ backgroundColor: averageColor }} onClick={showCard}>
      <CardImg src={cards[data.img]}></CardImg>
      {/* <CardImg src="../../images/left_door.png"></CardImg> */}
      <CardDescription>
        <div>
          공격력:<span style={{ color: attackColor }}>{data.attack}</span>
        </div>
        <div>
          방어력:<span style={{ color: defColor }}>{data.def}</span>
        </div>
        <div style={{ width: "100px" }}>
          평균:<span style={{ color: averageColor }}>{data.average}</span>
        </div>
        <div>
          레어리티:<span style={{ color: rarityColor }}>{data.rarity}</span>
        </div>
      </CardDescription>
    </Wrap>
  );
};

export default Card;
