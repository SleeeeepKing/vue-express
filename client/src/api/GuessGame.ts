import axios from "axios";
import qs from "qs";

export function test(type: any, score: any) {
    return new Promise((resolve, reject) => {
        axios.post('/api/getStudents', qs.stringify({
            type, score
        })).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    })
}

export function getAnswer() {
    return axios.get('/api/getAnswer')
}

export function checkAnswer(answer: any) {
    return axios.get('/api/checkAnswer', { params: answer })
}

export function addUser(username: any) {
    return axios.post('/api/addUser', qs.stringify(username))
}
