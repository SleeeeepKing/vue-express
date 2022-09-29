const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/getAnswer', (req, res) => {
    console.log('进入端口')
    res.send(getAnswer())
})

app.get('/checkAnswer', (req, res) => {
    const inputStr = req.query.answer;
    if (inputStr.length < getAnswer().length) {
        res.send({
            Flag: 1,
            Msg: 'Please enter ' + getAnswer().length + ' words'
        })
    } else if (inputStr !== getAnswer()) {
        const inputArr = toArr(inputStr);
        const ansArr = toArr(getAnswer());
        const resArr = [];
        inputArr.forEach((item, index) => {
            if (item === ansArr[index]) {
                resArr.push(item)
            } else {
                if (ansArr.includes(item)) {
                    resArr.push([item, 'yellow'])
                } else {
                    resArr.push('-')
                }
            }
        })
        res.send({
            Flag: 2,
            resArr: resArr
        })
    } else {
        res.send({
            Flag: 0,
            Msg: 'You are right !!!!!!'
        });
    }
})

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log('Server is runing on PORT ' + port + ' !!!');
})

function getAnswer() {
    return 'WELCOME'
}

function toArr(str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charAt(i));
    }
    return arr;
}