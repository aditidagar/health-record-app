const chai = require('chai');
const chatHttp = require('chai-http');
const app = require('../index')
const server = app.app.listen(5000);

chai.use(chatHttp);
chai.should();


describe("Testing Basic Routes", () => {

    it("Check server is alive", (done) => {
        chai.request("http://localhost:5000")
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            server.close();
            done();
        });
    });

  });