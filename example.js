AutoType("elem", "AutoType JS");

function usertext(){
	AutoBackspace("elem", 50, () =>{
		AutoType("elem", document.getElementById("usertext").value, 80);
	});
}