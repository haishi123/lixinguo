//totop按钮
var sdelay=0;
function fadeTop() {
    if (document.body.scrollTop >850) {
        document.getElementById("totop").style.display = "block";
    } else {
        document.getElementById("totop").style.display = "none";
    }
}
function returnTop() {
	window.scrollBy(0,-100);
	if(document.body.scrollTop>0) { 
		sdelay = setTimeout('returnTop()',15);
	}
}