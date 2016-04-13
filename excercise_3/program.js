var fs         = require('fs');
var pathToFile = process.argv[2];

function getLines(pathToFile) {

	var fileContent = fs.readFileSync(pathToFile, 'utf8');
	var lines       = fileContent.split('\n').length - 1;

	return lines; 
}

console.log(getLines(pathToFile));