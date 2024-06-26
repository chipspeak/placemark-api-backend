import { db } from "../models/db.js";

// export categoryController object
export const categoryController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      // eslint-disable-next-line prefer-destructuring
      const category = request.query.category;
      // get placemarks by user id and category (retrieved above)
      const placemarks = await db.placemarkStore.getPlacemarksByUserIdAndCategory(loggedInUser._id, category);
      // pass the results to view
      const viewData = {
        title: "Categories",
        user: loggedInUser,
        placemarks: placemarks,
      };
      console.log("showing category view...");
      return h.view("category-view", viewData);
    },
  },
};
