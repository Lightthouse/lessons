let prev=document.getElementsByTagName(`button`)[0];
let next=document.getElementsByTagName(`button`)[1];
let divi=document.getElementById(`forPic`);
let count=1;

prev.onclick=()=>{
	count++;
	if (count>5)count=1;
	divi.style.backgroundImage=`url('images/p${count}.jpg')`;

}

next.onclick=()=>{
	count--;
	if (count<1)count=5;
	divi.style.backgroundImage=`url('images/p${count}.jpg')`;

	
}