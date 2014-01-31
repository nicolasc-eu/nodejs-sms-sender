function SMS(phone, message) {
	this.phone = phone;
	this.message = message;
}

if(typeof SMS.initialized == "undefined") {
	SMS.prototype.setMessage = function(message) {
		this.message = message;
	}

	SMS.prototype.getPhone = function() {
		return this.phone;
	}

	SMS.prototype.getMessage = function() {
		return this.message;
	}
}

module.exports = SMS;