import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    postedBy: { username: String },
    stats: {
      comments: Number,
      retuits: Number,
      likes: Number,
      dislikes: Number,
    },
    liked: Boolean,
    disliked: Boolean,
  },
  { collection: "tuits" }
);
export default schema;
