

function removeEscapeCodes(input) {
  input = typeof input === 'string' ? input : input.toString();
  return input.replace(/\033\[\d{1,2}m/g,'');
}


function extractSteps(input) {

}

module.exports.removeEscapeCodes = removeEscapeCodes;
module.exports.extractSteps = extractSteps;