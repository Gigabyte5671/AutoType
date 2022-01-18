let AutoTypeObjects = [];
let AutoBackspaceObjects = [];

function AutoType(elementID, word = "undefined", delay = 80, callback = function(){}){
	if(word == ""){word = "undefined"}
	let new_retype = {"word":word,"element":document.getElementById(elementID),"count":0};
	AutoTypeObjects.push(new_retype);
	let pos = AutoTypeObjects.length - 1;
	let i = 0;
	let intervalID = window.setInterval(function(){
		AutoTypeObjects[pos]["count"]++;
		AutoTypeObjects[pos]["element"].innerHTML = AutoTypeObjects[pos]["word"].substr(0,AutoTypeObjects[pos]["count"]);
		if(++i === word.length){
			window.clearInterval(intervalID);
			callback();
		}
	}, delay);
}

function AutoBackspace(elementID, delay = 50, callback = function(){}){
	let new_retype = {"word":document.getElementById(elementID).innerHTML,"element":document.getElementById(elementID),"count":document.getElementById(elementID).innerHTML.length};
	AutoBackspaceObjects.push(new_retype);
	let pos = AutoBackspaceObjects.length - 1;
	let i = AutoBackspaceObjects[pos]["word"].length;
	let intervalID = window.setInterval(function(){
		AutoBackspaceObjects[pos]["count"]--;
		AutoBackspaceObjects[pos]["element"].innerHTML = AutoBackspaceObjects[pos]["word"].substr(0,AutoBackspaceObjects[pos]["count"]);
		if(--i === 0){
			window.clearInterval(intervalID);
			(typeof AutoTypeObjects[pos] !== 'undefined' ? AutoTypeObjects[pos]["element"].innerHTML = "&ZeroWidthSpace;" : false);
			callback();
		}
	}, delay);
}
