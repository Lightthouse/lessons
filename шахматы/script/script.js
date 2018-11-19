/*
document.getElementById(`desk`).innerHTML=`<table cellpadding="0" cellspacing="0">
       <tr><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td></tr>
       <tr><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td></tr>
              <tr><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td></tr>
       <tr><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td></tr>
              <tr><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td></tr>
       <tr><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td></tr>
              <tr><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td></tr>
       <tr><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td><td class="white"></td><td class="black"></td></tr>
     </table>`;*/
     var table,tr,td,silverArr,blackArr;

	silverArr=[`silver`,`black`,`silver`,`black`,`silver`,`black`,`silver`,`black`];
	blackArr=[`black`,`silver`,`black`,`silver`,`black`,`silver`,`black`,`silver`];

	table=document.createElement(`table`);

	for (let i = 0; i < 8; i++) {

		tr=document.createElement(`tr`);

		if(i%2==0) {

			for (let i = 0; i < 8; i++) {
				td=document.createElement(`td`);
				td.classList.add(`gecks`);
				td.style.backgroundColor=silverArr[i];
				tr.appendChild(td);		
			}
		}	

		else{
			for (let i = 0; i < 8; i++) {
				td=document.createElement(`td`);
				td.classList.add(`gecks`);
				td.style.backgroundColor=blackArr[i];
				tr.appendChild(td);		
			}
		}

		table.appendChild(tr);
	}

	
	document.getElementById(`desk`).appendChild(table);
	table.setAttribute("cellpadding","0");
	table.setAttribute("cellspacing","0");

 
