
//For file handling
var fs = require('fs')
var execSync = require('child_process').execSync;


module.exports = function(app, passport) {
	//Upload - To upload to CUNIX server
   // TO render the upload page
    app.post('/run', function(req, res){
        console.log(req.body);
        code = execSync('echo '+req.body.data+' > ./replPrg.plt; ./plt ./replPrg.plt');
        res.json({"code":"success","name":"replPrg"});
    });
    // Load the home page for others apart from api
    app.get('/*', function(req, res){
		
		res.sendfile('public/index.html');	
		
	});
	
};
