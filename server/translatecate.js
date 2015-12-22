Meteor.methods({
	insertTrade: function(obj,idcate){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idcate);
		categories.update({"_id":idcate},{"$set":{"i18n.fa":obj}});
	}
});