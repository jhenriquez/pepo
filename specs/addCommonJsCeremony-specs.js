var chai = require('chai'),
    pepo = require('../lib/pepo');

describe('Adding CommonJS export ceremony', function () {
  before(function () {
    chai.should();
  });
  
  it('should wrap any input within a function and export it.', function () {
    pepo.addCommonJSCeremony('').should.eql('module.exports = function () {\n\n};');
  });
  
  it('should NOT touch the input if the wrap option is disabled.', function () {
    pepo.addCommonJSCeremony('',{ wrap: false }).should.eql('');
  }); 
});