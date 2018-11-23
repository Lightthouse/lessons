let div=document.getElementById(`mom`);
let cir=document.getElementById(`son`);
let butt=document.getElementById(`butt`);

let count=0;
let incr=1;
let go=false;


butt.onclick=()=>{
	if(go==true){
		go=false;
		butt.textContent="Go!";
	}
	else{
		go=true;
		butt.textContent="Stop!";
	}
	
	move();

}

function move(){
		let id=setInterval( ()=>{
		cir.style.top=`${count}px`;
		cir.style.left=`${count}px`;
		count+=incr;
		if(count>=320)incr=-1;
		if(count<=0)incr=1;
		if(go==false)clearInterval(id)
	})
}