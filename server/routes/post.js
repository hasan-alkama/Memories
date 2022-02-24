import express from "express";
import { getposts, CreatePost, updatePost,likePost,deletePost } from "../controllers/post.js";
const router = express.Router();
router.get("/", getposts);
router.post("/", CreatePost);

// patch is used to update the existing documents but we need id to update that particular post
router.patch("/:id", updatePost);
router.patch("/:id/likePost", likePost);
router.delete("/:id", deletePost);
export default router;
