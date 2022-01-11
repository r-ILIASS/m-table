import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.json";

import logger from "../services/loggingService";

export const apiUrl = config.apiEndpoint;

axios.interceptors.response.use(null, (error) => {
  const expected =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expected) {
    console.error(error);
    logger.log(error);
    toast.error("An unexpected error occurred.", {
      autoClose: 5000,
    });
  }
});

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("jwt");

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
