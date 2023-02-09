import React, { useRef, useEffect, useState } from "react";
import { Whole, Wrap, Items, Item } from "./style";
import { PopUp } from "../../components";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import svg from "../../icons/svgs";

const Shop = () => {
  const slide = useRef();
  const interval = useRef();
  const [popUp, setPopUp] = useState(false);
  const [speed, setSpeed] = useState(3);
  const [onGrab, setOnGrab] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [walk, setWalk] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [purpose, setPurpose] = useState(null);
  const [popUpSvg, setPopUpSvg] = useState(null);

  function moveSlide() {
    interval.current = setInterval(() => {
      // console.log("인터벌 실행중");
      // slide.current 값이 늦게들어올때가 있어서 조건문으로 오류 방지
      if (slide.current) {
        slide.current.scrollLeft += speed;
        // 최대 스크롤값 구하기 slide.current.scrollWidth - slide.current.offsetWidth
        if (slide.current.scrollLeft >= slide.current.scrollWidth - slide.current.offsetWidth + 2) {
          setSpeed(-3);
        }
        if (slide.current.scrollLeft < 3) {
          setSpeed(+3);
        }
      }
    }, 20);
  }

  useEffect(() => {
    clearInterval(interval.current);
    moveSlide();
    // 언마운트때 클리어인터벌 해주기
    return () => {
      clearInterval(interval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  function onMouseDown(e) {
    setWalk(0);
    setIsDown(true);
    // e.pageX -> 이벤트 내에서의 마우스 x좌표
    setStartX(e.pageX - slide.current.offsetLeft);
    setOnGrab(true);
    setScrollLeft(slide.current.scrollLeft);
    clearInterval(interval.current);
  }
  function onMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const currentX = e.pageX - slide.current.offsetLeft;
    setWalk((currentX - startX) * 3);
    slide.current.scrollLeft = scrollLeft - walk;
  }
  function onMouseUp(e) {
    setIsDown(false);
    setOnGrab(false);
  }
  function onMouseLeave() {
    // 팝업창 열려버리면 onMouseLeave로 인식하므로
    // 팝업창 꺼져있을때만 활성화
    if (!popUp) {
      setIsDown(false);
      setOnGrab(false);
      clearInterval(interval.current);
      moveSlide();
    }
  }
  function play() {
    clearInterval(interval.current);
    moveSlide();
  }
  function stop() {
    clearInterval(interval.current);
  }
  function showItem(e) {
    // 드래그했을때는 발동안하도록 조건검
    if (walk === 0) {
      // const e.cu
      console.log(e.currentTarget.dataset.item);
      setPurpose("shop");
      setPopUp(true);
      setPopUpSvg(svg[e.currentTarget.dataset.item]);
      stop();
      setPopUp(true);
    }
  }
  return (
    <Whole className="contents">
      {popUp ? (
        <PopUp setPopUp={setPopUp} play={play} purpose={purpose} popUpSvg={popUpSvg} />
      ) : null}
      <Wrap>
        <Items
          className={onGrab ? "ShopSlide active" : "ShopSlide"}
          // classToggle={onGrab}
          ref={slide}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <Item onClick={showItem} data-item="cardPack">
            {svg.cardPack}기본 카드팩(5장)
          </Item>
          <Item onClick={showItem} data-item="cardPack_rare">
            {svg.cardPack_rare}레어 카드팩(3장)
          </Item>
          <Item onClick={showItem} data-item="cardPack_ultraRare">
            {svg.cardPack_ultraRare}울레 카드팩(1장)
          </Item>
          <Item onClick={showItem} data-item="point_5000">
            {svg.point_5000}5,000 포인트팩
          </Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          {/* <Item ></Item> */}
          {/* <Item ></Item> */}
          {/* <Item ></Item> */}
          {/* <Item ></Item> */}
          {/* <Item ></Item> */}
          {/* <Item ></Item> */}
          {/* <Item ></Item> */}
        </Items>
      </Wrap>
    </Whole>
  );
};

export default Shop;
