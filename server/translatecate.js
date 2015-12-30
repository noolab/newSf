Meteor.methods({
	insertTradeCategory: function(obj,idcate,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idcate);
		if(lang=="en")
			categories.update({"_id":idcate},{"$set":{"i18n.en":obj}});
		else
			categories.update({"_id":idcate},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertTradparentTag: function(obj,idparenttags,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idparenttags);
		if(lang=="en")
			parent_tags.update({"_id":idparenttags},{"$set":{"i18n.en":obj}});
		else
			parent_tags.update({"_id":idparenttags},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertTradTags: function(obj,idtags,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idtags);
		if(lang=="en")
			tags.update({"_id":idtags},{"$set":{"i18n.en":obj}});
		else
			tags.update({"_id":idtags},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertTradparentattr: function(obj,idParentattr,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idParentattr);
		if(lang=="en")
			parentattr.update({"_id":idParentattr},{"$set":{"i18n.en":obj}});
		else
			parentattr.update({"_id":idParentattr},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertTradAttri: function(obj,idattr,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idattr);
		if(lang=="en")
			attribute_value.update({"_id":idattr},{"$set":{"i18n.en":obj}});
		else
			attribute_value.update({"_id":idattr},{"$set":{"i18n.fa":obj}});
	}
});
Meteor.methods({
	insertTradshops: function(obj,idshops,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDPRODUCT: '+idshops);
		if(lang=="en")
			shops.update({"_id":idshops},{"$set":{"i18n.en":obj}});
		else
			shops.update({"_id":idshops},{"$set":{"i18n.fa":obj}});
	}
});
