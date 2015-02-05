var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var app = express();

 
/* GET home page. */
router.get('/', function(req, res, next) {

	var date = new Date();
	var previousCookieTime = req.cookies['last-request-time'] 
 	// set a new value
	res.cookie('last-request-time', date.getTime() ) ;
 	res.render('index', { title: 'Cookie Project'});
	// what is current value
	//console.log("cookie check  2 " + req.cookies['last-request-time'] );
 	console.log("Seconds since last visit = " +  
 		(date.getTime() - previousCookieTime)/1000  );
});

 //epoch

module.exports = router;
