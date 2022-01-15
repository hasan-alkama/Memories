import express from 'express';
import {getpost} from "../controllers/post.js";
const router=express.Router();
router.get('/', getpost);

export default router;