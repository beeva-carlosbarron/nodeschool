(function(){
	'use strict';

	var http = require('http'),
			bl = require('bl'),
			url = process.argv[2];

	http.get(url, function(response){
		response.pipe(bl(function(err, buffer){
			if(err) {
				return console.log(err);
			}
			buffer = buffer.toString();
			console.log(buffer.length);
			console.log(buffer);
		}));
	});

}());
