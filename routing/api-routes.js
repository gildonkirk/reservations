var tableData = require('../data/table-data.js');
var waitlistData = require('../data/waitlist-data.js');

module.exports = function(app) {
	app.get('/api/viewres', function(req, res) {
		res.json(tableData);
	});
	app.get('/api/waitlist', function(req, res) {
		res.json(waitlistData);
	});
	app.post('/api/viewres', function(req, res) {
		if(tableData.length < 5) {
			tableData.push(req.body);
			res.json(true);
		} else {
			waitlistData.push(req.body);
			res.json(false);			
		};
	});
}