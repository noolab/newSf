Template.translateproduct.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var description = $('#description').val();
		var code = $('#code').val();
		var brand = $('#brand').val();
		var metaTitle = $('#metaTitle').val(); 
		var metaKey = $('#metaKey').val(); 
		var productid=$('#idproduct').val();

		var obj ={
			title:title,
			description:description,
			brand:brand,
			code:code,
			metaTitle:metaTitle,
			metaKey:metaKey
		};
		console.log('MYOBJ'+JSON.stringify(obj));
		Meteor.call('insertTrad',obj,productid);
		alert("successfull add");
	}
});