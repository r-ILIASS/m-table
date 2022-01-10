import http, { apiUrl } from "./httpService";

const apiEndpoint = apiUrl + "/auth";

export function login(user) {
  return http.post(apiEndpoint, user, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}
