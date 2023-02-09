const { Comment, Post } = require("../model");

const router = require("express").Router();

router.post("/get_comments", async (req, res) => {
  const { postId } = req.body;
  const comments = await Comment.findAll({
    where: { post_id: postId },
    raw: true,
    order: [["updatedAt", "desc"]],
  });
  // console.log(comments);
  res.send(comments);
});

router.post("/register_comments", async (req, res) => {
  const { postId, userId, text } = req.body;
  await Comment.create({ post_id: postId, writer: userId, text });
  const comments = await Comment.findAll({
    where: { post_id: postId },
    raw: true,
    order: [["updatedAt", "desc"]],
  });
  const allPosts = await Post.findAll({
    order: [["createdAt", "desc"]],
    include: { model: Comment },
  });
  res.send({ msg: "등록 완료", comments, allPosts });
});

router.all("/del_comments", async (req, res) => {
  const { commentId, postId } = req.body;
  await Comment.destroy({ where: { id: commentId } });
  const comments = await Comment.findAll({
    where: { post_id: postId },
    raw: true,
    order: [["updatedAt", "desc"]],
  });
  const allPosts = await Post.findAll({
    order: [["createdAt", "desc"]],
    include: { model: Comment },
  });
  res.send({ msg: "삭제 완료", comments, allPosts });
});

module.exports = router;
