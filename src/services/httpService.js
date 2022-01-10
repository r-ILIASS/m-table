import axios from "axios";
import * as Sentry from "@sentry/react";
import { toast } from "react-toastify";
import config from "../config.json";

export const apiUrl = config.apiEndpoint;

axios.interceptors.response.use(null, (error) => {
  const expected =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expected) {
    console.error(error);
    Sentry.captureException(error);
    toast.error("An unexpected error occurred.", {
      autoClose: 5000,
    });
  }
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
