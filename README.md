# simple-http-bin

![Test and Deploy](https://github.com/yohanesgultom/simple-http-bin/actions/workflows/main.yml/badge.svg)

Simple HTTP server to handle all your stupid requests https://tongsampah.herokuapp.com

* Log all request and return some details (method, body, header) in response
* Return specified status code using `/error/{code}` eg. `/error/401`

## Setup

Dependencies:

* Node.js >= 12

Steps:

* Install dependencies: `npm install`
* Run `npm start`
* Access from `http://localhost:3000` (set env var `PORT` to change port)

## Heroku

Easily deploy to Heroku (assuming Heroku CLI is installed)

```
heroku login
heroku create
git push heroku main
```

## API

**ANY /**

Description: return request details as response

Example:

```bash
curl -i -X GET 'http://localhost:3000'
```


```json
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 161
ETag: W/"a1-/bIA42mQstVSYZxT+5lOx2YfvEI"
Date: Fri, 05 Mar 2021 00:25:41 GMT
Connection: keep-alive
Keep-Alive: timeout=5


{
    "ip": "::ffff:127.0.0.1",
    "url": "/",
    "method": "GET",
    "params": {},
    "query": {},
    "headers": {
        "host": "localhost:3000",
        "user-agent": "curl/7.68.0",
        "accept": "*/*"
    },
    "body": {}
}
```

**ANY /error/:code**

Description: return request details as response with given status code

Example:

```bash
curl -i -X GET 'http://localhost:3000/error/419'
```

```json
HTTP/1.1 419 unknown
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 182
ETag: W/"b6-kHfCAY7JcpauMMcyM3pr6QtaWYc"
Date: Fri, 05 Mar 2021 00:23:06 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "ip": "::ffff:127.0.0.1",
    "url": "/error/419",
    "method": "GET",
    "params": {
        "code": "419"
    },
    "query": {},
    "headers": {
        "host": "localhost:3000",
        "user-agent": "curl/7.68.0",
        "accept": "*/*"
    },
    "body": {}
}
```