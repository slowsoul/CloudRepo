$(window).load(function(){
        $("[data-toggle]").click(function() {
          var toggle_el = $(this).data("toggle");
          $(toggle_el).toggleClass("open-sidebar");
        });
        $(".swipe-area").swipe({
            swipeStatus:function(event, phase, direction, distance, duration, fingers)
            {
                if (phase=="move" && direction =="right") {
                    $(".container").addClass("open-sidebar");
                    return false;
                }
                if (phase=="move" && direction =="left") {
                    $(".container").removeClass("open-sidebar");
                    return false;
                }
            }
        }); 
		
		//var login = getCookie("login");
		login = "user";

		if(login === ""){
			$(".sidebar-welcome").css("display", "none");
			$(".sidebar-util").css("display","block");
			$(".loginonly").css("display", "none");
		}
		else{
			$(".sidebar-util").css("display","none");
			$(".sidebar-welcome").html("Good afternoon, " + login);
			$(".loginonly").css("display", "block");
		}
		
		if(getCookie("login") == "")
			$(".container").addClass("open-sidebar");
});

function checkUserName(){
	if($("#name").val() == ""){
		$("#namePrompt").html("请输入用户名");
		return 0;
	}
	var re = new RegExp("^[a-zA-Z0-9_]{6,16}$");
	if ($("#name").val().search(re) == -1){
		$("#namePrompt").html("用户名只能包含数字，字母和下划线，长度6~16位");
		return 0;
	}
	$("#namePrompt").html("");
	return 1;
}

function checkPassword(){
	if($("#password").val() == ""){
		$("#passwordPrompt").html("请输入密码");
		return 0;
	}
	var re = new RegExp("^[\\w\.\@\/\-]{6,16}$");
	if ($("#password").val().search(re) == -1){
		$("#passwordPrompt").html("密码只能包含数字，字母和@._-/，长度6~16位");
		return 0;
	}
	$("#passwordPrompt").html("");
	return 1;
}

function checkPassword2(){
	if($("#password2").val() == ""){
		$("#password2Prompt").html("请再次输入密码");
		return 0;
	}
	var re = new RegExp("^[\\w\.\@\/\-]{6,16}$");
	if ($("#password2").val().search(re) == -1){
		$("#password2Prompt").html("密码只能包含数字，字母和@._-/，长度6~16位");
		return 0;
	}
	if($("#password").val() != "" && $("#password2").val() != "" && $("#password").val() != $("#password2").val()){
		$("#password2Prompt").html("两次密码不一致");
		return 0;
	}
	$("#password2Prompt").html("");
	return 1;
}

function logout(){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie("login");
    if(cval!=null) document.cookie= "login" + "="+cval+";expires="+exp.toGMTString();
	location.href="login.html";
}

function getCookie(name){   
	var cookieArray=document.cookie.split("; ");  
	var cookie=new Object();   
	for (var i=0;i<cookieArray.length;i++){   
		var arr=cookieArray[i].split("=");       
		if(arr[0]==name) return unescape(arr[1]);  
	}
	return "";
}
