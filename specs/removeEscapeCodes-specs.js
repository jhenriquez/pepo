var chai    = require('chai'),
    pepo    = require('../lib/pepo');

describe('Handling ANSI escape codes', function () {
  before(function () {
    chai.should();
  });

  it('should remove color escape codes.', function () {
    pepo.removeEscapeCodes('[33mI [0mam[33m [0m[33mclean[0m[33m[0m[33m').should.eql('I am clean');
  });

  it('should remove any escape code.', function () {
    pepo.removeEscapeCodes('I[0m[1m[4m[5m[8m[30m[31m[32m[33m[34m am[35m clean[36m[37m[40m[41m[42m[43m[44m[45m[46m[46m').should.eql('I am clean');
  });
});