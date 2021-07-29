/* Author Vishal Dipak Parmar */
const BASE_URL = 'http://localhost:3001';
export class Constants {

    /* User Managment APIS Start */
    
    static USER_LOGIN = `${BASE_URL}/app/login`;
    static USER_SIGNUP = `${BASE_URL}/app/signup`;
    static USER_FORGOT_PASSWORD = `${BASE_URL}/app/forgotpassword`;
    static USER_GET = `${BASE_URL}/user/get/`;
    static USER_UPDATE = `${BASE_URL}/user/update/`;
    static USER_DELETE = `${BASE_URL}/user/delete/`;
    /* User Managment APIS End */

    // Notification settings API start
    static GET_NOTIFICATION_SETTINGS = `${BASE_URL}/settings/notifications/`;
    static MODIFY_NOTIFICATION_SETTINGS = `${BASE_URL}/settings/notifications/`;
    // Notification settings APIS End

    /* Depositor APIs Start*/
    static CREATE_DEPOSIT = `${BASE_URL}/depositor/createdeposit`;
    static VIEW_DEPOSIT = `${BASE_URL}/depositor/getdeposits/`;
    static UPDATE_DEPOSIT = `${BASE_URL}/depositor/updatedeposit/`;
    static DELETE_DEPOSIT = `${BASE_URL}/depositor/deletedeposit/`;
    /* Depositor APIs END*/

    //Blog API's Start

    static CREATE_BLOG = `${BASE_URL}/blogs/create`;
    static GET_ALL_BLOGS = `${BASE_URL}/blogs/get`;
    static UPDATE_BLOG = `${BASE_URL}/blogs/`;
    static DELETE_BLOG = `${BASE_URL}/blogs/`;
}
