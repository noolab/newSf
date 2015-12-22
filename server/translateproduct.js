Meteor.methods({
	insertTrad: function(obj,idproduct){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idproduct);
		products.update({"_id":idproduct},{"$set":{"i18n.fa":obj}});
	}
});