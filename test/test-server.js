var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);


describe('Strings', function() {
    it('should retorn same string', function(done) {
        chai.request(server)
        .post('/api/ping')
        .send({'string': 'Java'})
        .end(function(err, res){
          res.should.have.status(200);
          
          done();
        });
      });
});