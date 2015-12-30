Template.translate_category.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var cateid=this._id;
		var lang = $('#lang').val(); 
		var obj ={
			title:title
		};
		
		var object={
			cateid:cateid,
			i18n:{en:obj}
		}

		Meteor.call('insertTradeCategory',object,cateid,lang, function(err){
			if(err){
				console.log(err);
			}else{
				alert("Successful update");
				Router.go('/managecategory');
			}
		});
	}
});
Template.translateparentTag.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var parenttagid=this._id;
		var lang = $('#lang').val(); 
		var obj ={
			title:title
		};
		
		var object={
			parenttagid:parenttagid,
			i18n:{en:obj}
		}

		Meteor.call('insertTradparentTag',object,parenttagid,lang, function(err){
			if(err){
				console.log(err);
			}else{
				alert("Successful update");
				Router.go('/manageparenttag');
			}
		});
	}
});
Template.translatTags.events({
	'submit form':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var tagid=this._id;
		var lang = $('#lang').val(); 

		var obj ={
			title:title
		};
		
		var object={
			tagid:tagid,
			i18n:{en:obj}
		}

		Meteor.call('insertTradTags',object,tagid,lang, function(err){
			if(err){
				console.log(err);
			}else{
				alert("Successful update");
				Router.go('/managetag');
			}
		});
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