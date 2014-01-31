var http = require('http');
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var SMS = require('./SMS.js');
var Sim900 = require('./Sim900.js');

var com = new SerialPort('/dev/cu.usbserial-A600eufu', {
	baudrate: 19200,
	parser: serialport.parsers.readline('\r')
}, false);


var sim900 = new Sim900(com);

com.open(function () {
	var server = http.createServer(function(req, res) {
		res.end('Yeah !');
		sim900.send(new SMS('+33612345678', 'Visiteur ayant pour IP ' + req.connection.remoteAddress));
	});

	server.listen(1337);
});