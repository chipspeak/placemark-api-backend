import Joi from "joi";

// joi schemas for the user objects as per labs
export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
  })
  .label("User Credentials");

export const UserUpdateSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpsons.com").required(),
  })
  .label("User Update");

export const UserSpecPlus = UserCredsSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("Full User Details");

export const FirebaseUserCreds = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
  })
  .label("Firebase User Credentials");

export const FirebaseSpecPlus = FirebaseUserCreds.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("Full User Details");

export const AuthSpec = Joi.object()
.keys({
  _id: IdSpec,
  email: Joi.string().email().example("homer@simpsons.com").required(),
}).label("User details returned via auth");


export const UserArray = Joi.array().items(UserSpecPlus).label("User Array");

// array of allowed placemarks for user in the placemarks schema
const allowedCategories = ["Park", "Castle", "Ancient Ruin", "Walk", "Beach", "River", "Lake", "Waterfall", "Hike", "Cave", "Ringfort", "Dolmen", "Monument", "National Park"];

// spread operator is used to spread the allowedCategories array into the valid() function ensuring user has to use one of the allowed categories
export const PlacemarkSpec = Joi.object()
  .keys({
    title: Joi.string().example("Phoenix Park").required(),
    description: Joi.string().example("Beautiful park with numerous attractions and plenty of parking").max(200).required(),
    location: Joi.string().example("Dublin, Ireland").required(),
    latitude: Joi.number().example("53.360001").min(-90).max(90).required(),
    longitude: Joi.number().example("-6.325000").min(-180).max(180).required(),
    category: Joi.string()
      .example("Park")
      .valid(...allowedCategories)
      .required(),
    img: Joi.array().items(Joi.string().example("phoenix-park.jpg")).optional(),
  })
  .label("Placemark Details");

export const PlacemarkPlusSpec = PlacemarkSpec.keys({
  userId: IdSpec,
  _id: IdSpec,
  __v: Joi.number(),
}).label("Expanded Placemark Details");

export const ImageSpec = Joi.string();

export const PlacemarkArraySpec = Joi.array().items(PlacemarkPlusSpec).label("Placemark Array");

export const imageSpec = Joi.string().example("https://res.cloudinary.com/dyi6tqhuo/image/upload/v1715532802/placemark/euclldknh0lsn3h7a8zs.png").required();

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    email: Joi.string().email().required(),
    _id: IdSpec,
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("Jwt Authentification");
