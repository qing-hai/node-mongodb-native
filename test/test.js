
var mongo = require('../index');

mongo.connect("mongodb://localhost:27017/admin",
	{server:{promoteLongs:false,sslValidate:false}}, function(err, db) {
	if (err)
		console.log(err);
	else
		console.log("success");
		
	process.exit();
})