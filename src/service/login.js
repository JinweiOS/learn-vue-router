import http from './index'

function loginService(pathParams, username, password, data) {
    return http.post(`/pet/${pathParams}`, {
        params: {
            name: username,
            password,
        },
        data,
    });
}

export {
    loginService
}