import axios from "axios";
import { toast } from "react-toastify";

import logger from "../services/loggingService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
