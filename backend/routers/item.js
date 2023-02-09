const router = require("express").Router();
const { User, Inventory } = require("../model");

router.post("/get_user_items", async (req, res) => {
  console.log("들어옴");
  const { id } = req.body;
  const data = await Inventory.findOne({
    where: { user_id: id },
    raw: true,
  });
  res.send(data);
});

router.post("/open_point_pack", async (req, res) => {
  console.log("포인트팩 열기 실행");
  const { id, amount } = req.body;
  const obj = {};
  obj[`point_${amount}`] = 1;
  await Inventory.decrement({ ...obj }, { where: { user_id: id } });
  await User.increment({ point: amount }, { where: { user_id: id } });
  res.send("개봉완료");
});

router.post("/buy_item", async (req, res) => {
  const { id, item, price, buyAmount } = req.body;
  const obj = {};
  obj[item] = buyAmount;
  await Inventory.increment({ ...obj }, { where: { user_id: id } });
  await User.decrement({ point: price * 1 * buyAmount * 1 }, { where: { user_id: id } });
  res.send("구매완료");
});

router.post("/gift_point", async (req, res) => {
  const { id, targetId, item, price, giftAmount } = req.body;
  const targetUser = await User.findOne({ where: { user_id: targetId } });
  if (targetUser) {
    const obj = {};
    obj[item] = giftAmount;
    await Inventory.increment({ ...obj }, { where: { user_id: targetId } });
    await User.decrement({ point: price * giftAmount }, { where: { user_id: id } });
    res.send("선물완료");
  } else {
    res.send(`${targetId}는 존재하지 않는 아이디 입니다.`);
  }
});
module.exports = router;
