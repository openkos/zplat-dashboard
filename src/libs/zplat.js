import axios from "axios";
import { Notification } from 'element-ui';

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response) {
        Notification.error(error.response.data.msg)
    }

    return Promise.reject(error);
});

let zplat = {
    signup(body) {
        return axios.post('/api/v1/users', body)
    },
    activate(email, token) {
        let body = { token: token, activated: true };
        return axios.patch(`/api/v1/users/${email}`, body)
    },
    passwordReset(email, token, newpwd) {
        let body = { token: token, password: newpwd };
        return axios.patch(`/api/v1/users/${email}`, body)
    },
    applyPasswordReset(email) {
        let body = { email: email };
        return axios.post('/api/v1/tokens', body)
    },
    signin(body) {
        return axios.post('/api/v1/tokens', body)
    },
    signout() {
        return axios.delete('/api/v1/tokens')
    },
    profileGet() {
        return axios.get('/api/v1/user')
    },
    updateProfile(body) {
        return axios.put('/api/v1/user/profile', body)
    },
    updatePassword(body) {
        return axios.put('/api/v1/user/password', body)
    },
    find(username) {
        return axios.get(`/api/v1/users/${username}`)
    },
    install(key, database) {
        return axios.put(`/api/v1/configs/${key}`, database)
    }
}

export default zplat;
