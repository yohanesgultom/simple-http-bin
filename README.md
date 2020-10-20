# simple-http-bin

Simple HTTP server to handle all your stupid requests

* Log all request and return some details (method, body, header) in response
* Return specified status code using `/error/{code}` eg. `/error/401`

## Setup

Dependencies:

* Node.js >= 12

Steps:

* Install dependencies: `npm install`
* Run `npm start`
* Access from `http://localhost:5000` (set env var `PORT` to change port)