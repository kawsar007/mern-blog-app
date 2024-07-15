import express from "express";
import { create, getPosts } from "../controllers/post.controllar.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.post("/create", verifyToken, create);
router.get("/post", getPosts);

export default router;
