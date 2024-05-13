import { User } from "./user.js";
import { FirebaseUser } from "./user.js";

import { placemarkMongoStore } from "./placemark-mongo-store.js";

// export userMongoStore object
export const userMongoStore = {
  async getAllUsers() {
    const users = await User.find().lean();
    return users;
  },

  // function to get user by id
  async getUserById(id) {
    if (id) {
      const user = await User.findOne({ _id: id }).lean();
      return user;
    }
    return null;
  },
  

  // function to add a user
  async addUser(user) {
    const newUser = new User(user);
    const userObj = await newUser.save();
    const u = await this.getUserById(userObj._id);
    return u;
  },
  

  // function to get user by email
  async getUserByEmail(email) {
    const user = await User.findOne({ email: email }).lean();
    return user;
  },

  // function to delete a user by id
  async deleteUserById(id) {
    // retrieving the user's placemarks
    const userPlacemarks = await placemarkMongoStore.getPlacemarksByUserId(id);
    // creating an array of promises to delete each placemark from the userPlaceMarks array
    await Promise.all(
      userPlacemarks.map(async (placemark) => {
        await placemarkMongoStore.deletePlacemark(placemark._id);
      })
    );
    // deleting the user
    await User.deleteOne({ _id: id });
  },

  // function to get the number of placemarks for a user
  async getNumberOfPlacemarks(id) {
    const user = await this.getUserById(id);
    return user.placemarks.length;
  },

  // function to delete all users
  async deleteAll() {
    await User.deleteMany({});
  },
  
    // function to get user by id
  async getUserById(id) {
    if (id) {
      const user = await User.findOne({ _id: id }).lean();
      return user;
    }
    return null;
  },
  
      // function to get user by id
  async getFirebaseUserById(id) {
    if (id) {
      const user = await FirebaseUser.findOne({ _id: id }).lean();
      return user;
    }
    return null;
  },
  
    // function to get user by email
  async getFirebaseUserByEmail(email) {
    const user = await FirebaseUser.findOne({ email: email }).lean();
    return user;
  },
  
  
   async addFirebaseUser(user) {
    const newUser = new FirebaseUser(user);
    const userObj = await newUser.save();
    const u = await this.getFirebaseUserById(userObj._id);
    return u;
  },

  
  // function to update a user
  async updateUser(userId, updatedUser) {
    const currentUser = await User.findOne({ _id: userId });
    currentUser.email = updatedUser.email;
    const updatedUserObject = await currentUser.save();
    return updatedUserObject;
  },
};
