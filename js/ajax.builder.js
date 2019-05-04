$.ajax( {  
	type :"post",  
	url : url_base+"request/get_version_apk_v2",  
	cache :false,
	dataType: 'json',
	data: {user_code:user_code},
	success : function(data) {				
		localStorage.setItem("apk_server_version", data.apk_server_version);
		localStorage.setItem("user_name", data.profile.user_name);
		localStorage.setItem("position_code", data.profile.position_code);
		sync_version_apk(data.apk_server_version);
	},  
	error : function() {
		if(!user_code){
			window.location = "new_login.html";
		}else{
			window.location = "dashboard.html";
		}
	},
	timeout: 8000
});