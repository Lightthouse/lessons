var inTxt=document.getElementById(`in`);
var outTxt=document.getElementById(`out`);
var tmp;
var pattern=/[А-яA-z]/;

inTxt.onkeyup= ()=>{
	change();

};

function change(){
	tmp=inTxt.value.split("");
	for (var i = 0; i < tmp.length; i++) {
		if( pattern.test(tmp[i]) ) {
			tmp[i]=tmp[i].charCodeAt(0);
			tmp[i]=String.fromCharCode(tmp[i]+3);
		}
	}
	outTxt.value=tmp.join("");
};