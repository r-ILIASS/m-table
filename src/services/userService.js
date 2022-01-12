import http from "./httpService";

const apiEndpoint = "/users";

export function register(user) {
  return http.post(apiEndpoint, user, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}

export function getUser(token) {
  return http.get(`${apiEndpoint}/me`, {
    headers: { "x-auth-token": token },
    validateStatus: function (status) {
      return status < 500;
    },
  });
}
