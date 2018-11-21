let div=document.getElementById(`mom`);
let cir=document.getElementById(`son`);
let count=0;
let incr=1;

let id=setInterval( ()=>{
	cir.style.top=`${count}px`;
	cir.style.left=`${count}px`;
	count+=incr;
	if(count>=320)incr=-1;
	if(count<=0)incr=1;
})
