const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
    console.log(data)
    let statusCode = 'code' in req.params ? req.params.code : 200
    res.status(statusCode).send(data)
}

app.all('/error/:code', defaultHandler)
app.use(defaultHandler)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})