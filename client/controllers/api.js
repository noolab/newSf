
Template.api.events({
	'click #btnApi':function(e){
		e.preventDefault();
		var apiId= Random.id()+''+Random.id();
		var amount=10000;

		Meteor.call('api', apiId, amount, function(err,res){
			console.log(err);
			res=res.content;
			console.log(res);
			if(err){
				console.log(err);
			}else{
				$("#content").html(res);
			}
		});
	}
});