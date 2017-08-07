var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

require('./routing/html-routes.js')(app);

app.listen(PORT, function() {
	console.log('Listening to PORT ' + PORT);
});