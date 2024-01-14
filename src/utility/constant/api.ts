/***
API CONSTANTS  
***/
const SERVER_BASE_URL = "/api"; //"http://localhost:5000/api"
const AUTH = "/auth";
const SIGNUP_API = `${SERVER_BASE_URL}${AUTH}/register`;
const LOGIN_API = `${SERVER_BASE_URL}${AUTH}/login`;

export {
    SIGNUP_API,
    LOGIN_API
}
