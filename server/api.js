Meteor.methods({
	api: function(apiId, amount) {
		console.log("MY ID "+apiId);
		console.log("MY Amount "+amount);

		var answer=HTTP.call("POST", "https://sep.shaparak.ir/payments.aspx",
          {
          	data: {
	          	Amount: 10000, 
	          	MID: "10443844",
	          	ResNum:'ABCD',
	          	RedirectURL:"http://requestb.in/1grdetb1/"
           }
         });
		console.log(answer);
		return answer;
	}
});