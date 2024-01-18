AutoType("elem", "AutoType JS");

function usertext(){
	AutoBackspace("elem").then(() =>{
		AutoType("elem", document.getElementById("usertext").value);
	});
}