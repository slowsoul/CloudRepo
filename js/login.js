function submitL(){
	if(checkUserName() + checkPassword() == 2){
		$.post("login.jsp", {"username":$("#name").val(),"password":$("#password").val()},function(data){
			switch(data.trim()){
				case "y": location.href="search.html"; break;
				case "n": alert("用户名或密码错误，请重试！"); break;
			}
		});
	}
}

$(window).load(function (){
	$("#namePrompt").html("");
	$("#passwordPrompt").html("");
	
	document.onkeydown=function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==13){ 
			submitL();       
		}
	}; 
});

