$(document).ready(function(){
	$("img").click(function(){
		$(this).toggleClass("border");
	});
	$("img").mousemove(function(evt){
		evt = window.event ? window.event : evt;
		$("#ofX").html(evt.clientX);
		$("#ofY").html(evt.clientY);
	});

});