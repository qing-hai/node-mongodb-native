
var mongo = require('../index');

mongo.connect("mongodb://localhost/test",{server:{promoteLongs:false}}, function(err, db) {
	db.collection("test4").
	findOne(mongo.ObjectId("56034dae9b835b3ee6a52cb7"),{int64:1})
	.then(function(rst) {
		console.log(rst);
		process.exit();
	})
})