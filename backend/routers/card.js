const router = require("express").Router();
const { User, Inventory } = require("../model");
const { Card, RareCard, UltraRareCard } = require("../functions/Card");

router.post("/get_user_cards", async (req, res) => {
  console.log("겟유저카드실행");
  const { id } = req.body;
  const data = await User.findOne({
    where: { user_id: id },
    attributes: ["cards"],
    raw: true,
  });
  //   .then(el => console.log(el));
  //   console.log(data);
  res.send(data?.cards);
});

router.post("/open_card_pack", async (req, res) => {
  console.log("카드팩 열기 실행");
  const { id } = req.body;
  console.log(id);
  const init = await User.findOne({
    where: { user_id: id },
    attributes: ["cards"],
    raw: true,
    include: {
      model: Inventory,
      // attributes: ["card_pack_basic"],
    },
  });
  console.log(init);
  const initCards = init.cards ? JSON.parse(init.cards) : [];
  const initCardPackBasic = init["Inventories.card_pack_basic"];
  console.log("처음카드", initCards);
  const newCards = Array(5)
    .fill(0)
    .map(el => new Card());
  const newCardSet = [...initCards, ...newCards];
  await User.update(
    {
      cards: JSON.stringify(newCardSet),
    },
    {
      where: { user_id: id },
    }
  );
  await Inventory.update({ card_pack_basic: initCardPackBasic - 1 }, { where: { user_id: id } });
  res.send("개봉완료");
});

router.post("/open_rare_card_pack", async (req, res) => {
  console.log("레어 카드팩 열기 실행");
  const { id } = req.body;
  const init = await User.findOne({
    where: { user_id: id },
    attributes: ["cards"],
    raw: true,
    include: {
      model: Inventory,
      attributes: ["card_pack_rare"],
    },
  });
  const initCards = init.cards ? JSON.parse(init.cards) : [];
  const initCardPackRare = init["Inventories.card_pack_rare"];
  //   console.log("처음카드", initCards);
  const newCards = Array(3)
    .fill(0)
    .map(el => new RareCard());
  const newCardSet = [...initCards, ...newCards];
  await User.update(
    {
      cards: JSON.stringify(newCardSet),
    },
    {
      where: { user_id: id },
    }
  );
  await Inventory.update({ card_pack_rare: initCardPackRare - 1 }, { where: { user_id: id } });
  res.send("개봉완료");
});

router.post("/open_ultraRare_card_pack", async (req, res) => {
  console.log("울레 카드팩 열기 실행");
  const { id } = req.body;
  const init = await User.findOne({
    where: { user_id: id },
    attributes: ["cards"],
    raw: true,
    include: {
      model: Inventory,
      attributes: ["card_pack_ultraRare"],
    },
  });
  const initCards = init.cards ? JSON.parse(init.cards) : [];
  const initCardPackUltraRare = init["Inventories.card_pack_ultraRare"];
  //   console.log("처음카드", initCards);
  const newCards = new UltraRareCard();
  const newCardSet = [...initCards, newCards];
  await User.update(
    {
      cards: JSON.stringify(newCardSet),
    },
    {
      where: { user_id: id },
    }
  );
  await Inventory.update(
    { card_pack_ultraRare: initCardPackUltraRare - 1 },
    { where: { user_id: id } }
  );
  res.send("개봉완료");
});

module.exports = router;
