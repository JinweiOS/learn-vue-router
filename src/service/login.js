import http from './index'

function loginService(pathParams, username, password, data) {
    return http.post(`/pet/${pathParams}`, {
        body: '这里放body'
    }, { params: { username: '这里放查询参数' }, headers: { name: '这里放headers' } });
}

export {
    loginService
}

