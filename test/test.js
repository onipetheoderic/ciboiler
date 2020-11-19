var request = require('supertest');

var app = require('../index.js');

describe('GET', function(){
    it('responds with hello world', function(done){
        //we want to navigate to the root and check the response is hello world
        request(app).get('/').expect('hello world', done);
    })
})