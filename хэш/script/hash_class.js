
class generateHash{

	constructor(hashLength) {
		this.firstNum=33;
		this.lastNum=122;
		this.hashLength=parseInt(hashLength);
	}


	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	hash(){
		this.hash="";
		for (let i = 0; i < this.hashLength; i++) {
			this.hash+=String.fromCharCode( this.getRandomInt(this.firstNum,this.lastNum) );
		}
		return this.hash;
	}
}
