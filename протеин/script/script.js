$(document).ready(function(){
	
	$(`#calc`).click(()=>{
			time( );
		});	
});

	function time(){
		$(`#txt`).val( "" );
		let rightNow=new Date();
		let every3=0;
		let dose=0;

		for (var i = 5; i < +$(`#period`).val()+5; i++) {
			rightNow.setDate(i);
			every3++;

			if(every3==3 ){

				if(rightNow.getDay()==0 || rightNow.getDay()==6 ){
					every3=0;
					dose+=100;	
					$(`#txt`).val( $(`#txt`).val()+dose+" " );
				
				}
				else{
					every3=0;
					dose+=200;
					$(`#txt`).val( $(`#txt`).val()+dose+" " );
				}
			}
		}		
	};

