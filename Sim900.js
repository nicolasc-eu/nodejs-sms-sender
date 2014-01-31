var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

function Sim900(com) {
	this.serialPort = com;
}

if(typeof Sim900.initialized == "undefined") {
	Sim900.prototype.send = function(sms) {
		var self = this;
		setTimeout(function(){
			self.serialPort.write('AT+CMGS="' + sms.getPhone() + '"\r')
			setTimeout(function(){
				self.serialPort.write(sms.getMessage() + '\r')
				setTimeout(function(){
					self.serialPort.write('\x1A')
				}, 100);
			}, 100);
		}, 100);
	}
}

module.exports = Sim900;