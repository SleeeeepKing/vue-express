const { Client } = require('pg');
// const dotenv = require("dotenv")
// dotenv.config()
const express = require('express');

const router = express.Router();
const connectDb = async () => {
  try {
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'MicroSer',
      password: '666666',
      port: 5432,
    });

    await client.connect();
    const res = await client.query(
      'SELECT username,point FROM score order by point desc limit 10;'
    );
    console.log(res);
    await client.end();
    return res;
  } catch (error) {
    return null;
  }
};
router.get('/', function (req, res, next) {
  connectDb().then((data) => {
    if (data != null) console.log(data.rows);
    res.send(data.rows);
  });
});
const InsertDb = async (username, point) => {
  try {
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'guessword',
      password: 'postgrespw',
      port: 5432,
    });

    await client.connect();
    const res = await client.query(
      `Insert into score values('${username}',${point});`
    );
    console.log(res);
    await client.end();
    return res;
  } catch (error) {
    return null;
  }
};
router.post('/', function (req, res, next) {
  const { username } = req.body;
  const { score } = req.body;
  console.log(username);
  console.log(score);
  getDb(username).then((data) => {
    console.log('debug_data');
    console.log(data.rows[0]);
    if (data.rows[0] == undefined) {
      InsertDb(username, score).then((data) => {
        if (data != null) console.log(data);
        res.send(data);
      });
    } else if (score > data.rows[0].point) {
      console.log('test_bug');
      console.log(data.rows[0].point);
      updateDb(username, score);
    }
  });
});
const updateDb = async (username, score) => {
  try {
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'guessword',
      password: 'postgrespw',
      port: 5432,
    });

    await client.connect();
    const res = await client.query(
      `update score set point=${score} where username='${username}';`
    );
    console.log(res);
    await client.end();
    return res;
  } catch (error) {
    return null;
  }
};
const getDb = async (username) => {
  try {
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'guessword',
      password: 'postgrespw',
      port: 5432,
    });

    await client.connect();
    const res = await client.query(
      `select point from score where username='${username}';`
    );
    console.log('debug');
    console.log(res);
    await client.end();
    return res;
  } catch (error) {
    return null;
  }
};

module.exports = router;
