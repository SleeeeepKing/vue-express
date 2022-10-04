const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const config = {
    user: 'luo',
    host: 'localhost',
    database: 'MicroSer',
    password: '666666',
    dialect: 'postgres',
    port: 5432
}
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'luo',
    host: 'localhost',
    database: 'MicroSer',
    password: '666666',
    dialect: 'postgres',
    port: 5432
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is runing on PORT ' + port + ' !!!');
})

// 查询
//每次进行query操作都要connect一遍
pool.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database !")
    })
})

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

app.post('/addUser', (req, res) => {
    // express add user
    const user = req.body;
    pool.connect((err, client, release) => {
        if (err) {
            return console.error(
                'Error acquiring client', err.stack)
        }
        const sqlString = 'insert into users (user_name) values ($1)';
        client.query(sqlString, [user.username], function (err, data) {
            if (err) {
                return console.error('插入失败', err);
            } else {
                console.log(data);
            }
            client.end();
        });
    })
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