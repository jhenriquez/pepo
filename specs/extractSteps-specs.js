var chai = require('chai'),
    pepo = require('../lib/pepo'),
    fs   = require('fs');

describe('Extracting individual steps.', function () {
  before(function () {
    chai.should();
  });

  it('should match all steps in sample file.', function (done) {
    fs.readFile('specs/samples/clean.sample', function (err, sample) {
      pepo.extractSteps(sample).replace(/this\.(Given|When|Then)(.|\s)+?\}\)\;\n/g,'').should.match(/[\s]+?/);
      done();
    });
  });

});