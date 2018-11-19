

let scroll=document.getElementById(`scroll`);
let inp=document.getElementById(`in`);
let field=document.getElementById(`field`);
let rec=document.getElementById(`rec`);

scroll.oninput= ()=>{
	rec.style.width=scroll.value+`px`;
	inp.value=scroll.value;
	field.innerHTML=scroll.value;
}

