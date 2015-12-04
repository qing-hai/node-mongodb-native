
var mongo = require('../index');

mongo.connect("mongodb://localhost/test",{server:{promoteLongs:false}}, function(err, db) {
	var bulk = db.collection("cats").initializeUnorderedBulkOp();
	bulk.insert({_id:"101"})
	bulk.insert({_id:"101"})
	bulk.insert({_id:"102"})
	bulk.insert({_id:"102"})
	bulk.execute().catch(function(err){
		console.log("err", err);
		process.exit();
	})
})