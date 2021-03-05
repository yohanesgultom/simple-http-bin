process.env.MODE = 'test'

var chai = require('chai')
var chaiHttp = require('chai-http')

const server = require('./app')
const should = chai.should()

chai.use(chaiHttp)

describe('simple-http-bin', () => {

    describe('ANY /', () => {
        
        it('it should return success response', async () => {
            const res = await chai.request(server).get('/')
            res.should.have.status(200)
        })

        it('it should contain query', async () => {
            const res = await chai.request(server).get('/?a=1&b=2')
            res.should.have.status(200)
            res.body.query.should.deep.equal({a:'1', b: '2'})
        })

        it('it should contain body', async () => {
            const payload = {a: 1, b: true, c: 'yes'}
            const res = await chai.request(server).post('/').send(payload)
            res.should.have.status(200)
            res.body.headers['content-type'].should.equal('application/json')
            res.body.body.should.deep.equal(payload)
        })
        
        it('it should contain headers', async () => {
            const payload = {a: 1, b: true, c: 'yes'}
            const res = await chai.request(server).put('/').set('X-API-Key', 'zzzz').send(payload)
            res.should.have.status(200)
            res.body.headers['x-api-key'].should.equal('zzzz')
        })        

        it('it should accept form body', async () => {
            const payload = {a: 1, b: true, c: 'yes'}
            const res = await chai.request(server).post('/').type('form').send(payload)
            res.should.have.status(200)
            res.body.headers['content-type'].should.equal('application/x-www-form-urlencoded')
            res.body.body.should.deep.equal({a: '1', b: 'true', c: 'yes'})
        })

        it('it should allow cors', async () => {
            const res = await chai.request(server).get('/')
            res.should.have.status(200)
            res.headers['access-control-allow-origin'].should.equal('*')
        })
    })

    describe('ANY /error/:code', () => {
        
        it('it should return expected code', async () => {
            const res = await chai.request(server).get('/error/400')
            res.should.have.status(400)
        })

    })

})