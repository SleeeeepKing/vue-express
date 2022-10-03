/*
const {Client} = require('pg')
const client = new Client({
    user: 'luo',
    host: 'localhost',
    database: 'MicroSer',
    password: '666666',
    dialect: 'postgres',
    port: 5432
})
client.connect((err, client, release) => {
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
});
export default client;*/
