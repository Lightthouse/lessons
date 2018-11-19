$(document).ready(function(){
	delayStart();
});
	function delayStart(){
		setTimeout( ()=>{
			if(localStorage.getItem(`accBut`)!=1){
				$('#exampleModal').modal('show');
				$(`#accBut`).click( ()=>{
					localStorage.setItem(`accBut`,1);
					$('#exampleModal').modal('hide')
				} );
		}	}, 1000);
	}