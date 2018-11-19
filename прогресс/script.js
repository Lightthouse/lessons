$(document).ready(function(){
	var pr=0;
	var time;
	$(`#start`).click(()=>{
		time=$(`#num`).val();
		let id=setInterval( ()=>{
				$(`#prBar`).val(pr+=1);
				if( $(`#prBar`).val()>=100 )clearInterval(id);
			},time/100*1000);
		}
	)	
});
