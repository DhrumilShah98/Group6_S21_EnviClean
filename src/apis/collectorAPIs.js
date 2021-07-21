/* Parth Thummar */
import axios from "axios";

const BASE_URL = "https://envicleanapi.herokuapp.com";

export const getCollectionRequestByPincode = () => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/collector/getalldeposits`,
  });
};

export const getPickedCollectionRequest = (userEmailId) => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/collector/getpickeddeposits/${userEmailId}`,
  });
};

export const pickDeposit = (id, userId) => {
  return axios({
    method: "PUT",
    url: `${BASE_URL}/collector/pickdeposits/${id}/${userId}`,
  });
};

export const updatestatus = (id) => {
  return axios({
    method: "PUT",
    url: `${BASE_URL}/collector/updatestatus/${id}`,
  });
};

export const discardPickedDeposit = (id) => {
  return axios({
    method: "PUT",
    url: `${BASE_URL}/collector/discarddeposits/${id}`,
  });
};
