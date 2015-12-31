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
    }
  });