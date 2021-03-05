var express = require('express')
var cors = require('cors')

const mode = process.env.MODE || 'production'
const app = express()

app.use(cors())
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const defaultHandler = (req, res) => {    
    let data = {
        ip: req.ip,
        url: req.url,
        cookies: req.cookies,
        method: req.method,
        params: req.params,
        query: req.query,
        headers: req.headers,
        body: req.body,
    }
    // do not log during test
    if (mode != 'test') console.log(data)
    let statusCode = 'code' in req.params ? req.params.code : 200
    res.status(statusCode).send(data)
}

// preflight
app.options('*', cors())

// trigger error
app.all('/error/:code', defaultHandler)

// other request
app.use(defaultHandler)

module.exports = app