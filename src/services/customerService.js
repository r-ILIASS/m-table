import http, { apiUrl } from "./httpService";

const apiEndpoint = apiUrl + "/customers";

export function addCustomer(user) {
  return http.post(apiEndpoint, user, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}

export function getCustomers() {
  return http.get(apiEndpoint);
}

export function deleteCustomer(customerId) {
  return http.delete(`${apiEndpoint}/${customerId}`);
}