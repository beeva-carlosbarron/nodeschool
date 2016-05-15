(function(){
	'use strict';

	var http = require('http'),
			map = require('through2-map');

	var server = http.createServer(function(request, response) {
		if(request.method === 'POST') {
			console.log(response);
			request.pipe(upperCaseStream()).pipe(response);
		}
	});
	server.listen(process.argv[2]);

	function upperCaseStream() {
		return map(function(chunk){
			return chunk.toString().toUpperCase();
		});
	}


}());
