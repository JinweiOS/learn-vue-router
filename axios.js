const axios = require('axios')
const FormData = require('form-data')
const str = 'aaaaaaaa'
const url = 'name=12345&password=12345'
const object = {name: 1}
// 1.base64编码
const filePath = require('path').join(__dirname, './babel.config.js')
const stream = require('fs').createReadStream(filePath)
const fileForm = new FormData()
fileForm.append('file', stream)
axios.post('http://localhost:8082/file', fileForm)