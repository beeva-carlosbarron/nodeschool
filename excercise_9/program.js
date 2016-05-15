(function(){
	'use strict';

	var http = require('http'),
			bl = require('bl'),
			urls = [process.argv[2], process.argv[3], process.argv[4]];

			urls.forEach(function(url, index){
				http.get(url, function(response) {
					response.pipe(bl(function(err, data){
						if(err) {
							return console.log(err);
						}
						stackResponses(data.toString(), index, urls.length);
					}));
				});
			});

			function stackResponses(response, index, numCalls) {
				stackResponses.stack = stackResponses.stack || [];
				stackResponses.stack[index] = response;
				return stackResponses.stack.length === numCalls ?
									 stackResponses.stack.forEach((stack) => console.log(stack))
									 : 0;
			}
}());
