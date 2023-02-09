import React from "react";
import { Whole } from "./style";
import { Board } from "../../components";

const NoticeBoard = () => {
  return (
    <div className="contents">
      <Whole>
        <Board name="공지사항" />
      </Whole>
    </div>
  );
};

export default NoticeBoard;
