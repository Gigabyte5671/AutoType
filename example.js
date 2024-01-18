AutoType("elem", "AutoType JS");

function type () {
	AutoBackspace("elem").then(() =>{
		AutoType("elem", document.getElementById("usertext").value);
	});
}