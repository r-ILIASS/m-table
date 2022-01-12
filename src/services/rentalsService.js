import http, { apiUrl } from "./httpService";

const apiEndpoint = apiUrl + "/rentals";

export function addRental(movieId, customerId) {
  return http.post(
    apiEndpoint,
    { movieId, customerId },
    {
      validateStatus: function (status) {
        return status < 500;
      },
    }
  );
}

export function getRentals() {
  return http.get(apiEndpoint);
}
