

function removeColors(input) {
  input = typeof input === 'string' ? input : input.toString();
  return input.replace(/\033\[\d{1,2}m/g,''));
}


module.exports.removeColors = removeColors;