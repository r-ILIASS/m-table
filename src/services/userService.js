import http, { apiUrl } from "./httpService";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, user, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}
