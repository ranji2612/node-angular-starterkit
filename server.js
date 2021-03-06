//Initial configuration
var express  = require('express');
var app      = express(); 								// create our app w/ express
var port  	 = process.env.OPENSHIFT_INTERNAL_PORT || 8080; 				//
var ipaddr 	 =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";



//Middle-tier configuration
var bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// All the minified files will be stored in dist Eg. dist/js/app.min.js 
app.use(express.static(__dirname + '/public')); 	// set the static files location


//route file
require('./app/routes/routes.js')(app);


//Start the awesomeness
app.listen( port, ipaddr, function() {	
	console.log('Magic happens on port ', port, ipaddr); 
});
