var fs = require('fs');
var strArray;
var person;
var birthDate1;
var birthDate2;
var birthDate3;
var birthDate4;
var birthDate5;
var days;

var counterFemale = 0;

function getAnswer(){
	var array = fs.readFileSync('public/addressBook.txt').toString().split("\n");
	for(i in array) {
    //console.log(array[i]);
	strArray = array[i];
	strArray = strArray.split(", ").join("\n")
	
	if(strArray.includes("Female")){
		counterFemale += 1;
	}
		if(i == 0){
		birthDate1 = strArray.substr(strArray.length - 3);
		//console.log(birthDate1);
	}else if(i == 1){
		birthDate2 = strArray.substr(strArray.length - 3);
		//console.log(birthDate2);
	}else if(i == 2){
		birthDate3 = strArray.substr(strArray.length - 3);
		//console.log(birthDate3);
	}else if(i == 3){
		birthDate4 = strArray.substr(strArray.length - 3);
		//console.log(birthDate4);
	}else if(i == 4){
		birthDate5 = strArray.substr(strArray.length - 2);
		//console.log("Date: "+birthDate5);
	}
	
		var array = fs.readFileSync('public/addressBook.txt').toString().split("\n");
		var birthdates = [birthDate1,birthDate2,birthDate3,birthDate4,birthDate5];
		for(i=0; i<birthdates.length; i++){
			//console.log(birthdates[i]);
			if(birthDate1>birthdates[i]){
				//Antwort
				person=array[i];
				//console.log("2. answer: "+person);
			}
		}
		
		for(i in array){
			strArray = array[i];
			strArray = strArray.split(", ").join("\n")
			if(i == 0){
				var birthDaay1 = strArray.substr(strArray.length - 9);
				var parts1 = birthDaay1.split("/");
				birthDaay1 =  new Date(parts1[2], parts1[1], parts1[0]);
				//console.log(birthDate1);
			}else if(i == 1){
				var birthDay2 = strArray.substr(strArray.length - 9);
				var parts2 = birthDay2.split("/");
				birthDay2 =  new Date(parts2[2], parts2[1], parts2[0]);
				//console.log(birthDate2);
			}
	
	days = Math.floor((birthDay2 - birthDaay1)/86400000);
	//console.log(days);
	
		}

}
}

module.exports = {
	questionsAction: questionsAction,
    questionAction: questionAction
};


function questionsAction (req, res) {
    res.type('text/plain');
	getAnswer();
	var antwort = "1. answer: "+counterFemale+'\n';
	var antwort2 = "2. answer: "+person+'\n';
	var antwort3 = "3. answer: "+days+'\n';
    res.send(antwort + antwort2 + antwort3);
	counterFemale = 0;
}

function questionAction(req, res){
	
	var antwort ="";
	getAnswer();
	if(req.params.id == "1"){
		antwort = "1. answer: "+counterFemale+'\n';
	}else if(req.params.id == "2"){
		antwort = "2. answer: "+person+'\n';
	}else if(req.params.id == "3"){
		antwort = "3. answer: "+days+'\n';
	}else{
		antwort="";
	}
	counterFemale = 0;
	res.send(antwort);
}


