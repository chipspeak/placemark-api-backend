import Mongoose from "mongoose";
import Boom from "@hapi/boom";

const { Schema } = Mongoose;

// define the user schema
const userSchema = new Schema({
  email: String,
});

const firebaseUserSchema = new Schema({
  email: String,
})

firebaseUserSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email});
};

userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email });
};


export const User = Mongoose.model("User", userSchema);

export const FirebaseUser = Mongoose.model("FirebaseUser", firebaseUserSchema);
