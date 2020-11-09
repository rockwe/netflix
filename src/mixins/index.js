import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';

const API_BASE_URL = 'https://storeclient-api.herokuapp.com/api/v1';

axios.interceptors.request.use((config) => {
    if (process.browser) {
        const token = localStorage.getItem('auth._token.local');
        if (token) {
            config.headers.Authorization = `Bearer ${token.replace('Bearer ', '')}`;
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

let getAPIBaseURL = () => {
    return API_BASE_URL;
};

let login = (params) => {
    return axios.post(API_BASE_URL + '/user/login', params)
};
let logout = () => {
    // unregisterFromPush();
    return axios.post(API_BASE_URL + '/user/logout')
};



export default {
    getAPIBaseURL,
    login,
    logout,
}
