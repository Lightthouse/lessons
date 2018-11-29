

let inp=document.querySelector(`input`);
let butt=document.querySelector(`button`);
let div=document.querySelectorAll(`div`)[1];
let tryGenerat

butt.onclick=()=>{
	tryGenerate=new generateHash(inp.value);
	div.innerHTML=tryGenerate.hash();
}