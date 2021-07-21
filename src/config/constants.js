const BASE_URL = 'https://envicleanapi.herokuapp.com';
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
}
//"https://envicleanapi.herokuapp.com/"