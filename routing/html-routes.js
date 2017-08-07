var path = require('path');

module.exports = function(app) {
	app.get('/viewres', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/viewres.html'));
	});
	app.get('/booking', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/booking.html'));
	});
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});
};