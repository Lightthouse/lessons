
let inp=document.querySelectorAll(`input`);
let div=document.querySelector(`div`);

eqValue();

inp[0].oninput=()=>{
	eqValue();
};
inp[2].oninput=()=>{
	eqValue();
};
inp[4].oninput=()=>{
	eqValue();
};
inp[6].oninput=()=>{
	eqValue();
};

function eqValue(){
	for (let i = 1; i < inp.length; i+=2) {
		inp[i].value=inp[i-1].value;
	};
	div.style.borderRadius=`${inp[0].value}px ${inp[2].value}px ${inp[4].value}px ${inp[6].value}px`;
};