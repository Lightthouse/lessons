$(document).ready(function(){

	//getStatistic();
	//getHistoryStatistic();
	$(`input[type=date]`).on(`change`,getHistoryStatistic);
});

	function getStatistic(){
		$.get("https://api.coindesk.com/v1/bpi/currentprice.json", (data)=>{
			$(`#out`).val( data );
		});
	};

	function getHistoryStatistic(){
		$.get("https://api.coindesk.com/v1/bpi/historical/close.json",{
			"start":$("#fd").val(),
			"end":$("#sd").val()
		}, (data)=>{
			$(`#out`).val( data );
		});
	};