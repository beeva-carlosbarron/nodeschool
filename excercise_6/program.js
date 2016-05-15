(function(){
	'use strict';

	var fileReader = require('./fileReader'),
			pathDir = process.argv[2],
			extension = process.argv[3];

	fileReader(pathDir, extension, function(err, data) {

		if(err) {throw err;}

		data.forEach((fileExtension) => {console.log(fileExtension);});

	});

}());
