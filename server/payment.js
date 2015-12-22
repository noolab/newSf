//https://kica.shaparak.ir/epay/ info
Meteor.methods({
	// add categories
	pay: function() {
		console.log('Payment');
		var url ='http://kica.shaparak.ir/epay/info'; //'http://kica.shaparak.ir/epay/services/merchant.wsdl';
		var args = {
			/*merchantId: 'A45c',
			amount: 10000,
			paymentId: 'ABCD',
			revertURL: 'http://requestb.in/vjn3plvj'*/
		};

		try {
		  var client = Soap.createClient(url);
		  console.log('Client created');
		  var result = client.MyFunction(args);

		  console.log('Result:'+result);
		}
		catch (err) {
			console.log(JSON.stringify(err));
		  if(err.error === 'soap-creation') {
		    console.log('SOAP Client creation failed');
		  }
		  else if (err.error === 'soap-method') {
		    console.log('SOAP Method call failed');
		  }

		}
    }
});