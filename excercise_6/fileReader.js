(function(){
  
  'use strict';

  var fs = require('fs');
  var path = require('path');


  module.exports = function (dirName, extension, callback){

    fs.readdir(dirName, function(err, data) {

      if (err) {callback(err);}

      callback(null, data.filter((file) => path.extname(file) === '.' + extension));
    });

  };

}());
