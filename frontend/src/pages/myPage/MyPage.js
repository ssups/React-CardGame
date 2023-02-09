import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrap, Inventory, InventoryWrap, Item } from "./style";
import { Card } from "../../components";
import { PopUp, PopUP } from "../../components";
import { itemAction, userAction } from "../../redux/middleware";
import AudioPlayer from "react-h5-audio-player";
import { myPageSound } from "../../sounds";
import svg from "../../icons/svgs";
const MyPage = () => {
  const userId = useSelector(state => state.loginReducer.id);
  // const userId = sessionStorage.getItem("user_id");
  const cards = useSelector(state => state.cardReducer);
  const items = useSelector(state => state.itemReducer);
  const [speed, setSpeed] = useState(3);
  const [purpose, setPurpose] = useState(null);
  const [popUpSvg, setPopUpSvg] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [cardData, setCardData] = useState(null);
  const dispatch = useDispatch();
  const slide = useRef();
  const interval = useRef();
  const audioRef = useRef();

  useEffect(() => {
    // console.log(items);
  }, [items]);
  useEffect(() => {
    dispatch(userAction.getUserCards(userId));
    // 밑에 아이템 가져오는거는 알림때 필요해서 header에서 실행시킴
    // dispatch(userAction.getUserItems(userId));
  }, []);
  useEffect(() => {
    clearInterval(interval.current);
    moveSlide();
    return () => clearInterval(interval.current);
  }, [speed]);

  function moveSlide() {
    interval.current = setInterval(() => {
      if (slide.current) {
        slide.current.scrollLeft += speed;
        if (
          slide.current.scrollLeft >=
          slide.current.scrollWidth - slide.current.offsetWidth - 10
        ) {
          setSpeed(-3);
        }
        if (slide.current.scrollLeft < 5) {
          setSpeed(+3);
        }
      }
    }, 20);
  }
  function play() {
    clearInterval(interval.current);
    moveSlide();
  }
  function stop() {
    clearInterval(interval.current);
  }
  function showItem(e) {
    // console.log(e.target.dataset.item);
    setPurpose("inventory");
    setPopUp(true);
    setPopUpSvg(svg[e.currentTarget.dataset.item]);
  }

  return (
    <div className="contents" style={{ position: "relative" }}>
      <AudioPlayer
        src={myPageSound}
        autoPlay={true}
        ref={audioRef}
        volume={1}
        style={{ display: "none" }}
      />
      {popUp ? (
        <PopUp
          setPopUp={setPopUp}
          popUpSvg={popUpSvg}
          purpose={purpose}
          play={play}
          cardData={cardData}
        ></PopUp>
      ) : null}
      <Wrap>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              width: "150px",
              textAlign: "center",
              border: "2px solid black",
              borderRadius: "30px",
            }}
          >
            인벤토리
          </div>
        </div>
        <Inventory>
          <InventoryWrap>
            {items.card_pack_basic > 0 ? (
              <Item onClick={showItem} data-item="cardPack">
                {svg.cardPack}
                <span>기본 카드팩(5장) X {items.card_pack_basic}</span>
              </Item>
            ) : null}
            {items.card_pack_rare > 0 ? (
              <Item onClick={showItem} data-item="cardPack_rare">
                {svg.cardPack_rare}
                <span>레어 카드팩(3장) X {items.card_pack_rare}</span>
              </Item>
            ) : null}
            {items.card_pack_ultraRare > 0 ? (
              <Item onClick={showItem} data-item="cardPack_ultraRare">
                {svg.cardPack_ultraRare}
                <span>울레 카드팩(1장) X {items.card_pack_ultraRare}</span>
              </Item>
            ) : null}
            {items.point_5000 > 0 ? (
              <Item onClick={showItem} data-item="point_5000">
                {svg.point_5000}
                <span>포인트팩(5,000) X {items.point_5000}</span>
              </Item>
            ) : null}
          </InventoryWrap>
        </Inventory>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              width: "150px",
              textAlign: "center",
              border: "2px solid black",
              borderRadius: "30px",
            }}
          >
            카드덱
          </div>
          {/* <button onClick={play}>재생</button>
          <button onClick={stop}>정지</button> */}
        </div>

        <Inventory>
          <InventoryWrap ref={slide}>
            {cards[userId]
              ? cards[userId]
                  .sort((a, b) => b.average - a.average)
                  .map((el, ind) => (
                    <Card
                      data={el}
                      key={ind}
                      setPopUp={setPopUp}
                      setPurpose={setPurpose}
                      stop={stop}
                      setCardData={setCardData}
                    />
                  ))
              : null}
          </InventoryWrap>
        </Inventory>
      </Wrap>
    </div>
  );
};

export default MyPage;
