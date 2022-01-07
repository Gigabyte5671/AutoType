AutoType("elem", "AutoType JS");

function usertext(){
	AutoBackspace("elem", 50, () =>{
		AutoType("elem", 80, document.getElementById("usertext").value);
	});
}