import http from "./httpService";

const apiEndpoint = "/rentals";

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
