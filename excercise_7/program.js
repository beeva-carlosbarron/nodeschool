(function(){
	'use strict';

	var http = require('http'),
			url = process.argv[2];

	http.get(url, function(response){
		response.setEncoding('utf8');
		response.on('data', console.log);
	});

}());
