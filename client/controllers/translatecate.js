Template.translate_category.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var cateid=$('#idcate').val();
		var lang = $('#lang').val(); 
		var obj ={
			title:title
		};
		Meteor.call('insertTradeCategory',obj,cateid,lang);
		alert("Successful update");
	}
});
Template.translateparentTag.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var parenttagid=$('#idparenttags').val();
		var lang = $('#lang').val(); 
		var obj ={
			title:title
		};
		Meteor.call('insertTradparentTag',obj,parenttagid,lang);
		alert("Successful update");
	}
});
Template.translatTags.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var tagid=$('#idtags').val();
		var lang = $('#lang').val(); 
		var obj ={
			title:title
		};
		Meteor.call('insertTradTags',obj,tagid,lang);
		alert("Successful update");
	}
});
Template.translatParent_attr.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var parentattrid=$('#idParentattr').val();
		var lang = $('#lang').val(); 
		var obj ={
			title:title
		};
		Meteor.call('insertTradparentattr',obj,parentattrid,lang);
		alert("Successful update");
	}
});
Template.transleattribute_value.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var attrid=$('#idattr').val();
		var lang = $('#lang').val(); 
		var obj ={
			title:title
		};
		Meteor.call('insertTradAttri',obj,attrid,lang);
		alert("Successful update");
	}
});
Template.transleshops.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var shopid=$('#idshops').val();
		var lang = $('#lang').val(); 
		var obj ={
			title:title
		};
		Meteor.call('insertTradshops',obj,shopid,lang);
		alert("Successful update");
	}
});