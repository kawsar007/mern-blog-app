import mongoose from "mongoose";

const favouritesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    }
  },
  { timestamps: true }
)

const Favourite = mongoose.model("Favourite", favouritesSchema);

export default Favourite;