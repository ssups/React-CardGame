const router = require("express").Router();
const { User } = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();

router.post("/login", async (req, res) => {
  const { id, pw } = await req.body;
  const user = await User.findOne({
    where: { user_id: id },
    raw: true,
  });
  if (user) {
    bcrypt.compare(pw, user.user_pw, async (err, same) => {
      //   same 값은 true or false 로 뜬다.
      if (same) {
        await User.update({ login: true }, { where: { user_id: id } });
        // access token 발급
        const access_token = jwt.sign(
          {
            user_id: user.user_id,
            nick_name: user.nick_name,
            cards: user.cards,
          },
          process.env.ACCESS_TOKEN,
          {
            expiresIn: "15m",
          }
        );
        // refresh token 발급
        const refresh_token = jwt.sign(
          {
            user_id: user.user_id,
            nick_name: user.nick_name,
            cards: user.cards,
          },
          process.env.REFRESH_TOKEN,
          {
            expiresIn: "1h",
          }
        );
        res.send({
          msg: "로그인 성공",
          success: true,
          data: user,
          access_token,
          refresh_token,
        });
      } else {
        res.send({ msg: "비밀번호 틀림", success: false });
      }
    });
  } else res.send({ msg: "가입된 아이디가 없음", success: false });
});

router.post("/loginCheck", (req, res) => {
  const { access_token, refresh_token, user_id } = req.body;
  jwt.verify(access_token, process.env.ACCESS_TOKEN, async (acc_err, acc_success) => {
    if (acc_err) {
      jwt.verify(refresh_token, process.env.REFRESH_TOKEN, async (ref_err, ref_success) => {
        if (ref_err) {
          console.log("썩은 리프레쉬 토큰");
          res.send({ isLogin: false });
        } else {
          console.log("어세스토큰 재발급");
          const re_access_token = jwt.sign(
            {
              user_id: ref_success.user_id,
              nick_name: ref_success.nick_name,
              cards: ref_success.cards,
            },
            process.env.ACCESS_TOKEN,
            {
              expiresIn: "15m",
            }
          );
          const user = await User.findOne({
            where: { user_id },
          });
          res.send({ isLogin: true, re_access_token, user });
        }
      });
    } else {
      const user = await User.findOne({
        where: { user_id },
      });
      console.log("어세스토큰 살아있음");
      res.send({ isLogin: true, user });
    }
  });
});

module.exports = router;
