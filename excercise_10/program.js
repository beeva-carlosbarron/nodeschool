(function(){
	'use strict';

	var strftime = require('strftime'),
			net = require ('net');

			var server = net.createServer(function(socket) {
				var date = strftime('%F %H:%M', new Date()) + '\n';
				socket.end(date);
			});

			server.listen(process.argv[2]);


}());
