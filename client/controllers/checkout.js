Session.set("total", 0);

Template.checkout.helpers({
	getCart: function(){
		var mycart = '';
		if(Meteor.userId()){
			userid = Meteor.userId();
			if( userid ){
				mycart = cart.find({userId:userid});
			}
		}else{
			userid = Session.get('userId');
			if( userid ){
				mycart = cart.find({userId:userid});
			}
		}
		var total = 0;
		console.log("MyCart"+JSON.stringify(mycart.fetch()[0]));
		mycart.forEach( function(value,index){
			total = total + value.subtotal;
		});
		Session.set("total", total);
		 
		return mycart;
	},	
	getProductInfo: function(productid){
 		return products.findOne({_id:productid});	
	},
	getImage: function(id){
		var image=products.findOne({_id:id}).image;
		
		var res = image.replace("uploads", "upload"); 
		return res;
	},
	getShopName: function(id){
		return shops.findOne({"_id":id}).name;
	},
	getProname:function(id){
		return products.findOne({_id:id}).title;
 	},
 	getPrice:function(id){
		return products.findOne({_id:id}).price;
 	},
	getTotal: function(){
		return Session.get("total");
	},
	getImageid:function(id){

		return products.findOne({_id:id}).image;
	}
});
Template.checkout.events({
	"change .qty":function(e,tmp){
		//alert("Changing qty");
		var qty = $(e.currentTarget).val();
		var id =this._id; //$(e.currentTarget).attr("data-id");
		var productid =this.id_product; $(e.currentTarget).attr("pro-id");
		var pro = products.findOne({_id:productid});
		var subtotal = 0;
		if( pro ){
			subtotal = parseInt(pro.price) * parseInt(qty);
		}
		Meteor.call('updateCart',id,qty,subtotal);
		
		
		var mycart = '';
		if(Meteor.userId()){
			userid = Meteor.userId();
			if( userid ){
				mycart = cart.find({userId:userid});
			}
		}else{
			userid = Session.get('userId');
			if( userid ){
				mycart = cart.find({userId:userid});
			}
		}
		var total = 0;
		
		mycart.forEach( function(value,index){
			total = total + value.subtotal;
		});
		Session.set("total", total);
		//Meteor._reload.reload();
	},
	"click .remove":function(e,tmp){
		var itemid = $(e.currentTarget).attr("data-remove");
		if(Meteor.userId()){
			userid = Meteor.userId();
			
		}else{
			userid = Session.get('userId');
			
		}
		Meteor.call('removecart',itemid,userId);
		
	}
});
