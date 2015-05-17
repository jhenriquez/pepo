function toString(input) {
  return typeof input === 'string' ? input : input.toString();
}

function removeEscapeCodes(input) {
  return toString(input).replace(/\033\[\d{1,2}m/g,'');
}

function extractSteps(input) {
  return toString(input).match(/this\.(Given|When|Then)(.|\s)+?\}\)\;\n/g).join('\n');
}

function addCommonJSCeremony(input) {
  return 'module.exports = function () {\n' + toString(input) + '\n};';
}

function processArguments(args, defaults) {
  var positiveOption = /^--(\w+)$/;
  var negativeOption = /^--no-(\w+)$/;
  var options = defaults || {};
  
  args.forEach(function (option) {
    var opt = option.match(positiveOption);
    
    if (opt) {
      options[opt[1]] = true;
      return; 
    }
    
    opt = option.match(negativeOption);
    
    if (opt) {
      options[opt[1]] = false; 
    }
  });
  
  return options;
}

module.exports.removeEscapeCodes = removeEscapeCodes;
module.exports.extractSteps = extractSteps;
module.exports.addCommonJSCeremony = addCommonJSCeremony;
module.exports.processArguments = processArguments;