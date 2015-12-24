Template.translatecategory.events({
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