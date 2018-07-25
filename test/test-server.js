var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


describe('Strings', function() {
    it('should retorn same string', function(done) {
        chai.request("http://localhost:3001")
        .post('/api/ping')
        .send({'params':{'string': 'Toolbox'}})
        .end(function(err, res){
          res.should.have.status(200);    
          res.body.should.equal('Toolbox');     
          done();
        });
      });
});