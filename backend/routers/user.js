const router = require("express").Router();
const { User, Inventory } = require("../model");
const bcrypt = require("bcrypt");

router.post("/join", async (req, res) => {
  const { id, nickName, pw } = await req.body;
  // 어드민은 기본 포인트 십만
  const point = id === "admin" ? 100000 : 0;
  const idOverlap = await User.findOne({
    where: { user_id: id },
  });
  const nickOverlap = await User.findOne({
    where: { nick_name: nickName },
  });
  if (idOverlap) {
    res.send({ success: false, msg: "아이디 중복" });
    return;
  }
  if (nickOverlap) {
    res.send({ success: false, msg: "닉네임 중복" });
    return;
  }
  if (!idOverlap && !nickOverlap) {
    bcrypt.hash(pw, 10, (err, encrypted) => {
      User.create({
        user_id: id,
        nick_name: nickName,
        user_pw: encrypted,
        point,
      })
        .then(() =>
          Inventory.create({
            user_id: id,
            card_pack_basic: 2,
            point_5000: 1,
          })
        )
        .then(() => res.send({ success: true, msg: "가입 완료" }));
    });
  }
});

router.get("/get_users_point", async (req, res) => {
  const data = await User.findAll({ attributes: ["point", "user_id"], order: [["point", "desc"]] });
  res.send(data);
});

module.exports = router;
