Meteor.methods({
	insertTradeCategory: function(obj,cateid,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('Cateid: '+cateid);
		if(lang=="en")
			translation.insert(obj);
		else
			translation.insert(obj);
	}
});
Meteor.methods({
	insertTradparentTag: function(obj,parenttagid,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('parenttagid: '+parenttagid);
		if(lang=="en")
			translation.insert(obj);
		else
			translation.insert(obj);
	}
});
Meteor.methods({
	insertTradTags: function(obj,tagid,lang){
		console.log('MY CALL'+JSON.stringify(obj));
		console.log('IDTAG: '+tagid);
		if(lang=="en")
			translation.insert(obj);
		else
			translation.insert(obj);
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
