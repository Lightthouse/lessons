$(document).ready(function(){

	$(`#txt`).val(t8);

});
	function t1(){
		let txt='';
		for (var i = 4; i < 401; i++) {
			txt+=i+' ';
		}
		return txt;
	};

	function t2(){
		let txt='';
		for (var i = 4; i < 15; i+=3) {
			txt+=i+' ';
		}
		return txt;
	};

	function t3(){
		let txt='';
		for (var i = 654; i >= 0; i--) {
			txt+=i+' ';
		}
		return txt;
	};

	function t4(){
		let txt='';
		for (var i = 1983; i < 2018; i++) {
			txt+=i+' ';
		}
		return txt;
	};

	function t5(){
		let txt='';
		for (var i = -4; i < 101; i+=2) {
			txt+=i+' ';
		}
		return txt;
	};

	function t6(){
		let txt='';
		for (var i = 1; i < 10; i++) {
			txt+=i*7+' ';
		}
		return txt;
	};

	function t7(){
		let txt='';
		for (var i = 1000; i < 2001; i++) {
			txt+=String.fromCharCode(i)+' ';
		}
		return txt;
	};

	function t8(){
		let txt='';
		let arr=[`привет`,`1221`,`-1`,`дл12`,`09эж`,`;210-ds`,`aa1cc`,`1;;'2,`,`/.,-21`,`;l-s22a`];
		for (var i = 0; i < arr.length; i++) {
			txt+=parseInt(arr[i])+' ';
		}
		return txt;
	};
	function t9(){
		let min=-10;
		let max=11;
		let numArr=[];
		for (var i = 0; i < 15; i++) {
			numArr=numArr.push( Math.floor(Math.random() * (max - min)) + min );
		};

		for (var i = 0; i < numArr.length; i++) {
			numArr[i]
		}
	};