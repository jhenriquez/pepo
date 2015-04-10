var through = require('through');

function removeColors(input) {
  this.queue(input.toString().replace(/\033\[\d{1,2}m/g,''));
}

process.stdin.pipe(through(removeColors)).pipe(process.stdout);
