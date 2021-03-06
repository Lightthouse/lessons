let modal=document.getElementById(`modal`);// блок модального окна
let butt=document.getElementById(`butt`);// кнопка модального окна-добавление книги
let cancel=document.getElementById(`cancel`);//кнопка отмены вызова модального окна
let addBook=document.getElementById(`addBook`);//кнопка вызова модального окна
let shelf=document.getElementById(`bookshelf`);//книжная полка
let over=document.getElementById(`over`);//затемнение
let editBook=-1;//флаг редактирования книги

let name=document.querySelectorAll(`#right input`)[0];
let author=document.querySelectorAll(`#right input`)[1];
let date=document.querySelectorAll(`#right input`)[2];
let img=document.querySelectorAll(`#right input`)[3];

function baseValues(){
	name.value=`Секреты космоса`;
	author.value=`Робинс`;
	date.value=( new Date() ).toDateString();
	img.value="file:///E:/Step/JS/IMG/lessons/%D0%BA%D0%BD%D0%B8%D0%B6%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BE%D0%BB%D0%BA%D0%B0/images/img.jpg";
}


addBook.onclick=()=>{
	modal.style.display='flex';
	over.classList.add(`over`);
	baseValues();

}

cancel.onclick=()=>{
	modal.style.display='none';
	over.classList.remove(`over`);
}

butt.onclick=()=>{

	if(editBook>-1){

		let edit=document.getElementsByClassName(`edit`);
		let bookAuth=document.getElementsByClassName(`bookAuth`);
		let bookImg=document.getElementsByClassName(`bookImg`);
		let bookName=document.getElementsByClassName(`bookName`);
		let bookDate=document.getElementsByClassName(`bookDate`);

		bookName[editBook].textContent=name.value;
		bookAuth[editBook].textContent=author.value;
		bookDate[editBook].textContent=date.value;
		bookImg[editBook].style.backgroundImage=img.value;

		editBook=-1;
	}

	else{	

		let mom=document.createElement(`div`);
		let son1=document.createElement(`div`);
		let son2=document.createElement(`div`);
		let son3=document.createElement(`div`);
		let son4=document.createElement(`div`);
		let edit=document.createElement(`button`);
		let del=document.createElement(`button`);

		mom.classList.add(`book`);
		son1.classList.add(`bookImg`);
		son2.classList.add(`bookName`);
		son3.classList.add(`bookDate`);
		son4.classList.add(`bookAuth`);
		edit.classList.add(`edit`);
		del.classList.add(`del`);

		edit.textContent="изменить";
		del.textContent="удалить";
		son1.style.backgroundImage=`url(${img.value})`;
		son2.textContent=name.value;
		son3.textContent=date.value;
		son4.textContent=author.value;

		mom.appendChild(son1);
		mom.appendChild(son2);
		mom.appendChild(son3);
		mom.appendChild(son4);
		mom.appendChild(edit);
		mom.appendChild(del);

		shelf.appendChild(mom);
	}

	modal.style.display='none';
	over.classList.remove(`over`);

}
	
document.onclick=(event)=>{
	event=event || window.event;

	if(event.target.className=='del'){
		let dels=document.getElementsByClassName(`del`);
		let moms=document.getElementsByClassName(`book`);
		for (let i = 0; i < dels.length; i++) {
			if(dels[i]==event.target)moms[i].remove();
		}
	}	

	if(event.target.className=='edit'){

		let edit=document.getElementsByClassName(`edit`);
		let bookAuth=document.getElementsByClassName(`bookAuth`);
		let bookImg=document.getElementsByClassName(`bookImg`);
		let bookName=document.getElementsByClassName(`bookName`);
		let bookDate=document.getElementsByClassName(`bookDate`);

		modal.style.display='flex';

		for (let i = 0; i < edit.length; i++) {
			if(edit[i]==event.target){
				let pattern=/"url\('\w{1,}'\)"/;
				editBook=i;
				name.value=bookName[i].textContent;
				author.value=bookAuth[i].textContent;
				date.value=bookDate[i].textContent;
				img.value=bookImg[i].style.backgroundImage.replace(pattern,'');
				over.classList.add(`over`);

			}
		}	
	}
}
