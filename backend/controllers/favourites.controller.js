

import Favourite from '../models/favourites.model.js';
import { errorHandler } from "../utils/error.js";

export const addToFavourites = async (req, res, next) => {
  try {
    const { postId } = req.body;

    if (!postId) {
      return next(errorHandler(400, "Post ID is required"));
    }

    const existing = await Favourite.findOne({ postId, userId: req.user.id });
    if (existing) {
      return next(errorHandler(400, "Post is already in favourites"));
    }

    const favourite = new Favourite({
      postId,
      userId: req.user.id,
    });

    await favourite.save();
    res.status(200).json({ message: "Post added to favourites" });

  } catch (error) {
    next(error)
  }
}

export const removeFromFavourites = async (req, res, next) => {
  try {
    const { postId } = req.body;
    if (!postId) {
      return next(errorHandler(400, "Post ID is required"));
    }

    await Favourite.findOneAndDelete({ postId, userId: req.user.id });
    res.status(200).json({ message: "Post removed from favourites" });
  } catch (error) {
    next(error)
  }
}

export const getFavourites = async (req, res, next) => {
  try {
    const favourites = await Favourite.find({ userId: req.user?.id }).populate('postId');
    res.status(200).json(favourites.map((fav) => fav.postId));
  } catch (error) {
    console.log(error)
    next(error)
  }
}
