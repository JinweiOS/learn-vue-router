import http from './index'

function loginService(username, password) {
    return http.get(`/login`, { params: { username, password } });
}

export {
    loginService
}

