const express = require('express')
require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const app = express()
const port = 3000

app.use(({res}) => {
const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
res.status(404).json({message})
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))