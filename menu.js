$(document).ready(function(){
	$("#menu").on("click", function(){
		$("nav ul").toggleClass("open");
	});
});
function mainchange(){
	var T1=document.getElementById("LI1").innerHTML;
	var T2=document.getElementById("LI2").innerHTML;
	var T3=document.getElementById("LI3").innerHTML;
	document.getElementById("p1").innerHTMl = T3;
}
