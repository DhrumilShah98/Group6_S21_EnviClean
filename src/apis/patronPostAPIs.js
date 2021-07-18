/* Dhrumil Amish Shah */
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const makePatronMember = (userId) => {
    return axios({
        method: "PUT",
        url: `${BASE_URL}/patron/member/${userId}`
    });
};

export const getPatronPosts = () => {
    return axios({
        method: "GET",
        url: `${BASE_URL}/patron/posts`,
    });
};

export const createPatronPost = (patronPostData) => {
    return axios({
        method: "POST",
        url: `${BASE_URL}/patron/post`,
        data: patronPostData,
        headers: { "Content-Type": "multipart/form-data" },
    });
}

export const deletePatronPost = (userId, patronPostId) => {
    return axios({
        method: "DELETE",
        url: `${BASE_URL}/patron/post/${userId}/${patronPostId}`
    });
};

export const fullFillPatronPost = (patronPostId) => {
    return axios({
        method: "PUT",
        url: `${BASE_URL}/patron/post/${patronPostId}`
    });
}