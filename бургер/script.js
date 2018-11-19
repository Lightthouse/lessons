$(document).ready(function(){
	let clac=0;
	let money=0;
	$("#calc").click(function(){
		for (var i = 0; i < 6; i++) {
			if( $("input")[i].checked ){
				clac+=50;
				money+=30;
			}
		}
		$("#total").val(`цена: ${money}\nкалорий:${clac}`);
	});
});
