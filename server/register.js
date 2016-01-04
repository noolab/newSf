Meteor.methods({
 regUser:function(username,firstname, lastname, email, password, shipcard, point, rerole,country,city){
   targetUserId = Accounts.createUser({
    email: email,
    password: password,
    profile:{
      username:username,
      firstname:firstname,
      lastname:lastname,
      country:country,
      city:city,
      shipcard:{
        shipcardId:shipcard,
        point:point
      }
    }
   });
   //console.log(targetUserId);
   //Roles.setUserRoles(id, roleid, 'noolab')
   Roles.setUserRoles(targetUserId, [rerole], 'mygroup')
  }
});