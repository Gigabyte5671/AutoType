var AutoTypeObjects = [];
function AutoType(elementID, word = "undefined", callback = function(){}){
  if(word == ""){word = "undefined"}
  var new_retype = {"word":word,"element":document.getElementById(elementID),"count":0};
  AutoTypeObjects.push(new_retype);
  var pos = AutoTypeObjects.length - 1;
  var i = 0;
  var intervalID = window.setInterval(function(){
    AutoTypeObjects[pos]["count"]++;
    AutoTypeObjects[pos]["element"].innerHTML = AutoTypeObjects[pos]["word"].substr(0,AutoTypeObjects[pos]["count"]);
    if(++i === word.length){
      window.clearInterval(intervalID);
      callback();
    }
  }, 50);
}