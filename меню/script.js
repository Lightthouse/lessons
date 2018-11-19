$(document).ready(function(){
	$("#calculate").click(checkIng);

});
	function checkIng(){
		let cost=0;
		let cal=0;
		for (var i = 0; i < 5; i++) {
			if( $(`input`)[i].checked ){
				cost+=50;
				cal+=i*10;
			}
		}
		$(`#total`).val(`Цена: ${cost}\nКалории: ${cal}`);
	};
