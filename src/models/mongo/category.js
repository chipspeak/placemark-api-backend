import Mongoose from "mongoose";

const { Schema } = Mongoose;

// define the category schema
const categorySchema = new Schema({
  title: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Category = Mongoose.model("Category", categorySchema);
