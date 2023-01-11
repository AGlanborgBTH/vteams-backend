const { expect } = require('chai');
const { port, database, io, bodyParser } = require('../app.js');


describe("Backend Server Tests", () => {
  describe("Port Tests", () => {
    it("should listen to port 3000", () => {
      expect(port).to.equal('3000');
    });
  });

  describe("Database Tests", () => {
    it("should connect to the database", () => {
      expect(database.readyState).to.equal(2);
    });
  });

  describe("Cors Tests", () => {
    it('should allow requests from all origins', () => {
      expect(io.opts.cors.origins).to.equal('*');
    });
  });

  describe("BodyParser Tests", () => {
    it("should parse request bodies", () => {
      expect(bodyParser.json()).to.be.a('function');
      expect(bodyParser.urlencoded({ extended: true })).to.be.a('function');
    });
  });


});
