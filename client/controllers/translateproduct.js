Template.translateproduct.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var description = $('#description').val();
		var code = $('#code').val();
		var brand = $('#brand').val();
		var metaTitle = $('#metaTitle').val(); 
		var metaKey = $('#metaKey').val(); 
		var lang = $('#lang').val(); 
		var productid=this._id;

		var obj ={
			title:title,
			description:description,
			brand:brand,
			code:code,
			metaTitle:metaTitle,
			metaKey:metaKey
		};
		var object={
			productid:productid,
			i18n:{en:obj}
		}
		console.log('MYOBJ'+JSON.stringify(obj));
		Meteor.call('insertTran',object,lang, function(err){
			if(err){
				console.log(err+reason);
			}else{
				alert("successfull");
				Router.go("/manageproduct");
			}
		});
		
	}
});