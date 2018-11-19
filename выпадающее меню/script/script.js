let mainMenu=document.getElementsByClassName(`main-menu`);
let subMenu=document.getElementsByClassName(`sub-menu`);


mainMenu[0].onmouseover =function(){
	subMenu[0].style.opacity=1;
};

mainMenu[0].onmouseout  =function(){
	subMenu[0].style.opacity=0;
};

mainMenu[1].onmouseover =function(){
	subMenu[1].style.opacity=1;
};

mainMenu[1].onmouseout  =function(){
	subMenu[1].style.opacity=0;
};

mainMenu[2].onmouseover =function(){
	subMenu[2].style.opacity=1;
};

mainMenu[2].onmouseout  =function(){
	subMenu[2].style.opacity=0;
};