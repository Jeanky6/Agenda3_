const express = require('express')
const {port: APP_PORT, port} = require ('./config/config')
const cors = require('cors')
const morgan = require('morgan')
const routerApi = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

routerApi(app)

app.listen(APP_PORT, () => {
    console.log(` App runing on port ${APP_PORT}`)
})