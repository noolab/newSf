Meteor.methods({
	insertTrade: function(obj,idcate){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idcate);
		categories.update({"_id":idcate},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertparentTag: function(obj,idparenttags){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idparenttags);
		parent_tags.update({"_id":idparenttags},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertTags: function(obj,idtags){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idtags);
		tags.update({"_id":idtags},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertparentattr: function(obj,idParentattr){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idParentattr);
		parentattr.update({"_id":idParentattr},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertAttri: function(obj,idattr){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idattr);
		attribute_value.update({"_id":idattr},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertshops: function(obj,idshops){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idshops);
		shops.update({"_id":idshops},{"$set":{"i18n.fa":obj}});
	}
});
