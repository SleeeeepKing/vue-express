const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const config = {
  user: 'luo',
  host: 'localhost',
  database: 'MicroSer',
  password: '666666',
  dialect: 'postgres',
  port: 5432,
};
const { Pool } = require('pg');

const pool = new Pool(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runing on PORT ${port} !!!`);
});

// 查询
// 每次进行query操作都要connect一遍
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (queryErr) => {
    release();
    if (queryErr) {
      return console.error('Error executing query', queryErr.stack);
    }
    console.log('Connected to Database !');
  });
});

function getAnswer() {
  return 'WELCOME';
}

function toArr(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr.push(str.charAt(i));
  }
  return arr;
}
app.get('/getAnswer', (req, res) => {
  res.send(getAnswer());
});

app.get('/checkAnswer', (req, res) => {
  const inputStr = req.query.answer;
  if (inputStr.length < getAnswer().length) {
    res.send({
      Flag: 1,
      Msg: `Please enter ${getAnswer().length} words`,
    });
  } else if (inputStr !== getAnswer()) {
    const inputArr = toArr(inputStr);
    const ansArr = toArr(getAnswer());
    const resArr = [];
    inputArr.forEach((item, index) => {
      if (item === ansArr[index]) {
        resArr.push(item);
      } else if (ansArr.includes(item)) {
        resArr.push([item, 'yellow']);
      } else {
        resArr.push('-');
      }
    });
    res.send({
      Flag: 2,
      resArr,
    });
  } else {
    res.send({
      Flag: 0,
      Msg: 'You are right !!!!!!',
    });
  }
});

app.post('/addUser', (req, res) => {
  // express add user
  const user = req.body;
  pool.connect((err, client) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    const sqlString = 'insert into users (username, password) values ($1,$2)';
    // todo
    client.query('select username from users', (queryErr, result) => {
      result.rows.forEach((item) => {
        if (item.username === user.username) {
          return res.send({
            Flag: 1,
            Msg: 'User already exists',
          });
        }
      });
    });
    client.query(sqlString, [user.username, '123'], (queryErr) => {
      if (queryErr) {
        res.send({
          Flag: 1,
        }); // error
        console.error('插入失败', queryErr);
      }
      console.log('插入成功！');
      res.send({
        Flag: 0,
      });
      client.end();
    });
  });
});
