Template.dailyPopup.helpers({
	getPopup:function(){
		var arr=[];
		var popup = list_product.findOne({title:"popup"}).products;
		for(var i=0;i<popup.length;i++){
			var product = products.findOne({_id:popup[i]});	
			arr.push(product);
		}
		return arr;
		},
		getWebzine:function(){
			return contents.find({typeid:"FuMaf3acLZwarAPwh"});
		},
		getWebzine1:function(){
			return contents.find({typeid:"FuMaf3acLZwarAPwh"},{limit:1});
		}
});