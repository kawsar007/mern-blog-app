import express from "express";

import { addToFavourites, getFavourites, removeFromFavourites } from "../controllers/favourites.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.post("/add", verifyToken, addToFavourites);
router.post("/remove", verifyToken, removeFromFavourites);
router.get("/", verifyToken, getFavourites);

export default router;