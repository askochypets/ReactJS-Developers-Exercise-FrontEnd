import axios from "axios";
import config from "../config/config.dev";

const api = {
  get: async (endpoint, params = {}) => {
    try {
      return await axios.get(config.API_URL + endpoint, {
        params: params
      });
    } catch (error) {
      console.error(error);
    }
  },
  post: async (endpoint, params = {}) => {
    try {
      return await axios.post(config.API_URL + endpoint, params);
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (endpoint, params = {}) => {
    try {
      return await axios.delete(config.API_URL + endpoint, params);
    } catch (error) {
      console.error(error);
    }
  }
};

export default api;
