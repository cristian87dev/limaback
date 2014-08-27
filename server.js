var http = require('http');
var path = require('path');
var express = require('express');

var conf = require('./js/config.js');
conf.readFile();

var router = express();
var server = http.createServer(router);

//router.use(express.static(path.resolve(__dirname, 'client')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
  
    var test = require('./js/states.js');
    test.writeXML({dispo1 : {name: "00100101A1", i1 : 0, i2 : 1, i3 : 1, i4 : 0, i5 : 1}, dispo2 : {name: "1110A10100", i1 : 0, i2 : 1, i3 : 0}});

});