const express = require('express')
const fs = require('fs');
const pg = require('pg');
const url = require('url');
require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const app = express()
console.log(process.env.PORT)
const port = process.env.PORT || 3000

app.use(({res}) => {
const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
res.status(404).json({message})
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DB,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./ca.pem").toString(),
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});