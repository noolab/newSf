Template.translate_category.events({
	'click #btnAdd':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var cateid=$('#idcate').val();
		var obj ={
			title:title
		};
		Meteor.call('insertTrade',obj,cateid);
		alert("Successful update");
	}
});
Template.translateparentTag.events({
	'click #btnAdd':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var parenttagid=$('#idparenttags').val();
		var obj ={
			title:title
		};
		Meteor.call('insertparentTag',obj,parenttagid);
		alert("Successful update");
	}
});
Template.translatTags.events({
	'click #btnAdd':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var tagid=$('#idtags').val();
		var obj ={
			title:title
		};
		Meteor.call('insertTags',obj,tagid);
		alert("Successful update");
	}
});
Template.translatParent_attr.events({
	'click #btnAdd':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var parentattrid=$('#idParentattr').val();
		var obj ={
			title:title
		};
		Meteor.call('insertparentattr',obj,parentattrid);
		alert("Successful update");
	}
});
Template.transleattribute_value.events({
	'click #btnAdd':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var attrid=$('#idattr').val();
		var obj ={
			title:title
		};
		Meteor.call('insertAttri',obj,attrid);
		alert("Successful update");
	}
});
Template.transleshops.events({
	'click #btnAdd':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var shopid=$('#idshops').val();
		var obj ={
			title:title
		};
		Meteor.call('insertshops',obj,shopid);
		alert("Successful update");
	}
});