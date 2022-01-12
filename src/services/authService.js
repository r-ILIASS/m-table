import http from "./httpService";

const apiEndpoint = "/auth";

export function login(user) {
  return http.post(apiEndpoint, user, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}
