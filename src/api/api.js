import axios from "axios";
import config from "../config/config.dev";

const api = {
  get: async (endpoint, params = {}) => {
    try {
      return await axios.get(_urlBuilder() + endpoint, {
        params: params
      });
    } catch (error) {
      console.error(error);
    }
  },
  post: async (endpoint, params = {}) => {
    try {
      return await axios.post(_urlBuilder() + endpoint, params);
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (endpoint, params = {}) => {
    try {
      return await axios.delete(_urlBuilder() + endpoint, params);
    } catch (error) {
      console.error(error);
    }
  }
};
const _urlBuilder = () => {
  const API_ENV = config.API_ENV;
  let protocol = "https";

  if (~API_ENV.indexOf("localhost")) {
    protocol = "http";
  }
  console.log(API_ENV);

  return `${protocol}://${API_ENV}`;
};

export default api;
