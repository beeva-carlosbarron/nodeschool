var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
	console.log(process.argv[2]);
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});
