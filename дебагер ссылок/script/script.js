let links=document.getElementsByTagName(`a`);
let txt= document.getElementById(`txt`);

for (var i = 0; i < links.length; i++) {
	txt.value+=links[i]+' ';
}
// txt.value=links;