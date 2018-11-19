$(document).ready(function(){
	let perc=1;

	$("#fire").click(function(){
		let time=$("#dateIN").val();
		let oneTick=time*1000/100;
		let id=setInterval( plusSize,Number(oneTick) );
	});

	function plusSize(){
		if(perc>=100){
			$("#myBar").css("width",`100%`);
			clearInterval(id);
		}
		else{
			perc++;
			$("#myBar").html(`${perc}%`);
			$("#myBar").css("width",`${perc}%`);}
		};
});
