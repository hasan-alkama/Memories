import express from "express";
import { getposts, CreatePost } from "../controllers/post.js";
const router = express.Router();
router.get("/", getposts);
router.post("/", CreatePost);
export default router;
