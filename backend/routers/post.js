const router = require("express").Router();
const { Post, Comment } = require("../model");
const parser = require("html-react-parser");
const { raw } = require("express");

router.get("/get_all_posts", async (req, res) => {
  const allPosts = await Post.findAll({
    order: [["createdAt", "desc"]],
    include: { model: Comment },
  });
  res.send(allPosts);
});

router.post("/posting", async (req, res) => {
  const { id, title, main } = req.body;
  // console.log("원본" + main);
  // console.log("펄스한거" + parser(main));
  const thumb_nail =
    // 문제점: 글중간에 안뛰우고 바로 사진첨부하면 img태그가 p태그 안으로 들어가버려서 썸네일 사진으로 인식안됨
    parser(main).length >= 2
      ? parser(main).filter(el => el.props.className === "image")[0]?.props.children.props.src
      : parser(main).props.className === "image"
      ? parser(main).props.children.props.src
      : null;
  await Post.create({
    user_id: id,
    title,
    main,
    thumb_nail,
  });
  const allPosts = await Post.findAll({
    order: [["createdAt", "desc"]],
    include: { model: Comment },
  });

  res.send({ msg: "등록 완료", data: allPosts });
});

router.post("/modify_post", async (req, res) => {
  const { postId, modifiedTitle, modifiedMain } = req.body;
  const parserdMain = parser(modifiedMain);
  // console.log(modifiedMain);
  const modifiedThumbNail =
    parserdMain.length >= 2
      ? parserdMain.filter(el => el.props.className === "image")[0]?.props.children.props.src
      : parserdMain.props.className === "image"
      ? parserdMain.props.children.props.src
      : null;
  await Post.update(
    {
      title: modifiedTitle,
      main: modifiedMain,
      thumb_nail: modifiedThumbNail,
    },
    { where: { id: postId } }
  );
  const allPosts = await Post.findAll({
    order: [["createdAt", "desc"]],
    include: { model: Comment },
  });
  const modifiedPost = await Post.findOne({ where: { id: postId } });
  res.send({ msg: "수정 완료", data: allPosts, modifiedPost });
});

router.post("/del_post", async (req, res) => {
  const { postId } = req.body;
  await Post.destroy({ where: { id: postId } });
  const allPosts = await Post.findAll({
    order: [["createdAt", "desc"]],
    include: { model: Comment },
  });
  res.send({ msg: "삭제 완료", data: allPosts });
});

router.post("/increase_visited", async (req, res) => {
  const { postId } = req.body;
  await Post.increment({ visited: 1 }, { where: { id: postId } });
  res.send({ success: true });
});

module.exports = router;
