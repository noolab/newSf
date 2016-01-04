//https://kica.shaparak.ir/epay/ info
Meteor.methods({
    testSoap: function(){
      console.log('soap ok');
      var url = 'https://SEP.shaparak.ir/payments/referencepayment.asmx?WSDL';
      var args = {String_1: 'abcdefghidklmnopqrstuvwxyz',String_2:'10443844'};//{RefNum: 'abcdefghidklmnopqrstuvwxyz',MID:'10443844'};

      try {
        var client = Soap.createClient(url);
        //console.log(client);
        var result = client.verifyTransaction(args);

        console.log(result);
        return result;
      }
      catch (err) {
        console.log('ERROR:');
        console.log(err);
        if(err.error === 'soap-creation') {
          console.log('SOAP Client creation failed');
        }
        else if (err.error === 'soap-method') {
          console.log('SOAP Method call failed');
        }
        return err;

}
    },
    api: function() {
    //console.log("MY ID "+apiId);
    //console.log("MY Amount "+amount);
    /*
    var answer=HTTP.call("POST", "https://sep.shaparak.ir/payment.aspx",
          {
            params: {
              //body: "ResNum=ABC&MID=10443844&RedirectURL=http%3A%2F%2Frequestb.in%2F1ckopdl1%3Finspect&Amount=10000"
              Amount: 10000, 
              ResNum:"ABCD",
              MID: "10443844",
              RedirectURL:"http://requestb.in/1grdetb1/"
           }
         });
    console.log(answer);*/
    var request = Meteor.npmRequire("request");
    var query = Meteor.npmRequire("querystring");

    /*
    var options={
      url:'https://sep.shaparak.ir/payment.aspx',
      method: 'POST',
      postData: {
        mimeType: 'application/x-www-form-urlencoded',
        params:[{
                    name: "Amount",
                    value: 10000
                    
            },
            {
                    name: "ResNum",
                    value: "ABCD"
                    
            },
            {
                    name: "MID",
                    value: "10443844"
                    
            },
            {
                    name: "RedirectURL",
                    value: "http://requestb.in/1grdetb1/"
                    
            }
            ]
      }
      
    };
    var options={
      url:'https://sep.shaparak.ir/payment.aspx',
      form: {
                    Amount: 10000, 
                    ResNum:"ABCD",
                    MID: "10443844",
                    RedirectURL:"http://requestb.in/wxzk9dwy"
      }
    };*/
    var postData={
                            Amount: 10000, 
                            ResNum:"ABCD",
                            MID: "10443844",
                            RedirectURL:"http://requestb.in/wxzk9dwy"
    };

    var options = {
        url: "https://sep.shaparak.ir/payment.aspx",
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:query.stringify(postData)

    };

    request.post(options,function callback(error, response, body) {
        console.log(error);
        console.log(response);
        console.log(body);
});
    return 1;
  }
  });

/*

Amount: 10000, 
                    ResNum:"ABCD",
                    MID: "10443844",
                    RedirectURL:"http://requestb.in/1grdetb1/"

                    */