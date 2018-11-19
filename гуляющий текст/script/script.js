let div=document.querySelectorAll(`div`);
let txtArea=document.getElementsByTagName(`textarea`);


document.onclick=(event)=>{
	event=event || window.event;
	for (let i = 0; i < div.length; i++) {
		if (event.target==div[i]){
			selDiv(i);
		}
	}
}

function selDiv(i){
	for (let j = 0; j < div.length; j++) {
		if(i==j){
			txtArea[j].disabled=false;
			// txtArea[j].display="block";
			txtArea[j].style.opacity=1;
			txtArea[j].style.zIndex=999;
		}
		else{
			txtArea[j].disabled=true;
			// txtArea[j].display="none";
			txtArea[j].style.opacity=0;
			txtArea[j].style.zIndex=0;

		}
	}
}

/*div[0].onclick=()=>{
	txtArea[0].style.opacity=1;
	txtArea[0].disabled=false;

	txtArea[1].style.opacity=0;
	txtArea[2].style.opacity=0;	
}

div[1].onclick=()=>{
	txtArea[1].style.opacity=1;
	txtArea[1].disabled=false;

	txtArea[0].style.opacity=0;
	txtArea[2].style.opacity=0;
}

div[2].onclick=()=>{
	txtArea[2].style.opacity=1;
	txtArea[2].disabled=false;

	txtArea[0].style.opacity=0;
	txtArea[1].style.opacity=0;
}*/