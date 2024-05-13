import { placemarkApi } from "./api/placemark-api.js";
import { userApi } from "./api/user-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "DELETE", path: "/api/users/{id}", config: userApi.deleteOne },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "PUT", path: "/api/users/{id}", config: userApi.update },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/placemarks", config: placemarkApi.find },
  { method: "GET", path: "/api/placemarks/{id}", config: placemarkApi.findOne },
  { method: "POST", path: "/api/getWeather", config: placemarkApi.getWeather },
  { method: "POST", path: "/api/getWeatherForecast", config: placemarkApi.getWeatherForecast },
  
  { method: "POST", path: "/api/users/createViaFirebase", config: userApi.createViaFirebase },

  { method: "POST", path: "/api/users/authenticateViaFirebase", config: userApi.authenticateViaFirebase },

    { method: "POST", path: "/api/users/authenticateViaFirebase", config: userApi.authenticateViaFirebase },

  
  { method: "PUT", path: "/api/placemarks/{id}", config: placemarkApi.update },
  { method: "POST", path: "/api/users/placemarks", config: placemarkApi.create },
  { method: "DELETE", path: "/api/placemarks", config: placemarkApi.deleteAll },
  { method: "DELETE", path: "/api/placemarks/{id}", config: placemarkApi.deleteOne },
  { method: "DELETE", path: "/api/placemarks/deleteImage/{image}", config: placemarkApi.deleteImage },
];