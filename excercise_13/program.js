(function(){
	'use strict';

	var http = require('http'),
			url = require('url');

	var endPoints = {
		unixtime: '/api/unixtime',
		parsetime: '/api/parsetime'
	};

	var actions = {
		unixtime: unixTimeJson,
		parsetime: parseTimeJson
	};

	function parseTimeJson(data) {
		var date = new Date(data.query.iso);
		return {
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		};
	}

	function unixTimeJson(data) {
		return {
			'unixtime': new Date(data.query.iso).getTime()
		};
	}

	var server = http.createServer(function(request, response) {
		var endPoint = url.parse(request.url).pathname.split('api/')[1];

	if(endPoints[endPoint]) {
		response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(processRequest(url.parse(request.url, true))));
  } else {
		response.writeHead(404);
		response.end();
	}

	});
	server.listen(process.argv[2]);

	function processRequest(parsedRequest) {
		return actions[parsedRequest.pathname.split('api/')[1]](parsedRequest);
	}

}());
