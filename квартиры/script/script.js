$(document).ready(function(){
	let number;
	// $(`.pod`).eq(1).css(`visibility`,`visible`);
	$(`#find`).click( ()=>{
		hideAll();
		let num=$(`#num`).val();
		if(num<1){$(`.pod`).eq(0).css(`visibility`,`visible`);}
		if(num>=1 && num<15){$(`.pod`).eq(1).css(`visibility`,`visible`);}
		if(num>=15 && num<31){$(`.pod`).eq(2).css(`visibility`,`visible`);}
		if(num>=31 && num<45){$(`.pod`).eq(3).css(`visibility`,`visible`);}
		if(num>45){$(`.pod`).eq(4).css(`visibility`,`visible`);}
	});
});
	function hideAll (){
		$(`.pod`).eq(0).css(`visibility`,`hidden`);
		$(`.pod`).eq(1).css(`visibility`,`hidden`);
		$(`.pod`).eq(2).css(`visibility`,`hidden`);
		$(`.pod`).eq(3).css(`visibility`,`hidden`);
		$(`.pod`).eq(4).css(`visibility`,`hidden`);
	}