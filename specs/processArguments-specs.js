var chai = require('chai'),
    pepo = require('../lib/pepo');
    
describe('#processArguments', function () {
  before(function () {
    chai.should(); 
  });
  
  it('should match options and mark them true (--option)', function () {
      pepo
        .processArguments(['--option1', '--option2'])
        .should
        .eql({
            "option1": true,
            "option2": true
        });
  });
  
  it('should match negative options and mark them false (--no-option)', function () {
    pepo
        .processArguments(['--option1', '--option2', '--no-option3'])
        .should
        .eql({
            "option1": true,
            "option2": true,
            "option3": false
        });
  });
  
  it('should accept default options', function () {
    var options = {
      "option1": true,
      "option2": true
    };
    
    pepo
        .processArguments(['--no-option3'], options)
        .should
        .eql({
            "option1": true,
            "option2": true,
            "option3": false
        });
  });
});
    