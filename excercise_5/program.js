var fs         = require('fs');
var pathToFile = process.argv[2];

fs.readFile(pathToFile, 'utf8', (err, data) => {
	if (err) throw err;

	console.log(data.split('\n').length - 1);
});
