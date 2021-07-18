export class Constants {

    /* User Managment APIS Start */
    static USER_LOGIN = "http://localhost:3001/app/login";
    static USER_SIGNUP = "http://localhost:3001/app/signup";
    static USER_FORGOT_PASSWORD = "http://localhost:3001/app/forgotpassword";
    static USER_GET = "http://localhost:3001/user/get/";
    static USER_UPDATE = "http://localhost:3001/user/update/";
    static USER_DELETE = "http://localhost:3001/user/delete/";
    /* User Managment APIS End */

    // Notification settings API start
    static GET_NOTIFICATION_SETTINGS = "http://localhost:3001/settigs/notifications/";
    static MODIFY_NOTIFICATION_SETTINGS = "http://localhost:3001/settings/notifications/";
    // Notification settings APIS End

    /* Depositor APIs Start*/
    static CREATE_DEPOSIT = "http://localhost:3001/depositor/createdeposit";
    static VIEW_DEPOSIT = "http://localhost:3001/depositor/getdeposits/";
    static UPDATE_DEPOSIT = "http://localhost:3001/depositor/updatedeposit/";
    static DELETE_DEPOSIT = "http://localhost:3001/depositor/deletedeposit/";
    /* Depositor APIs END*/
}