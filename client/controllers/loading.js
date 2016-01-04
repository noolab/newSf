

Template.loading.helpers({
	srctime:function(){
		if(Number(Session.get('time'))>9)
			return "/img/A_Safir.gif?a=ojnoj";
		else if(Number(Session.get('time'))>8)
			return "/img/A_Safir.gif?a=sdffg";
		else if(Number(Session.get('time'))>7)
			return "/img/A_Safir.gif?a=nbvc";
		else if(Number(Session.get('time'))>6)
			return "/img/A_Safir.gif?a=poiuy";
		else
			return "/img/A_Safir.gif?a=azerty";
	}
});

Template.loading.rendered=function(){
	//$(".loadingAnim").attr('src','/img/A_Safir.gif?a=abcdfegsdsdip');
};