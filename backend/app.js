const express = require("express");
const app = express();
const PORT = 4000;
const { sequelize } = require("./model");
const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const dot = require("dotenv");
const path = require("path");

dot.config();

// 서버열기
app.listen(PORT, () => {
  console.log(PORT, "번 포트에 서버 열림");
});

// 디비연결
sequelize
  .sync({ force: false })
  .then(() => console.log("디비 연결 잘됨"))
  .catch(err => console.log(err));

// 프론트 구동중인 포트 접근 허용해주기
const options = {
  origin: "http://localhost:3000",
};
app.use(cors(options));
app.use(express.json()); // 객체형태 전달받을때 해석해주는 기능

// 세션 설정
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    // store: new FileStore(),
    // cookie: {
    //   domain: "localhost",
    //   path: "/",
    //   maxAge: 24 * 6 * 60 * 10000,
    //   sameSite: "none",
    //   httpOnly: true,
    //   secure: true,
    // },
  })
);

// 라우터
const { user, login, card, item, image, post, comment } = require("./routers");
app.use(user);
app.use(login);
app.use(card);
app.use(item);
app.use(image);
app.use(post);
app.use(comment);

// 정적폴더 경로설정
app.use("/images", express.static(path.join(__dirname, "/images")));
