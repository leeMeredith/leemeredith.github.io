//date
//var date_Time new Object();

var myVar;
var myDateTime;

var myId_Timer;
var setMil = 500;

var idMinWidthDTF = 0;
var idMinWidthDTFTest = 0;

//alertMatchMedia---------------------------------------_
function alertMatchMediaDTF() {
	if (window.matchMedia("(min-width: 320px)").matches) {//ms
		idMinWidthDTF = 0;
	}
	if (window.matchMedia("(min-width: 375px)").matches) {//mm
		idMinWidthDTF = 1;
	}
	if (window.matchMedia("(min-width: 425px)").matches) {//ml
		idMinWidthDTF = 2;
	}
	if (window.matchMedia("(min-width: 768px)").matches) {//t
		idMinWidthDTF = 3;	
	}
	if (window.matchMedia("(min-width: 1024px)").matches) {//l
		idMinWidthDTF = 4;	
	}
	if (window.matchMedia("(min-width: 1440px)").matches) {//ll
		idMinWidthDTF = 5;	
	}
	if (window.matchMedia("(min-width: 1440px)").matches) {//k
		idMinWidthDTF = 6;	
	}
	if(idMinWidthDTF != idMinWidthDTFTest){
		//console.log(idMinWidthDTF);
		idMinWidthDTFTest = idMinWidthDTF;
		return idMinWidthDTF;
	}
	
}

//setInterval---------------------------------------_
myVar = setInterval(myTimer, setMil);


//myTimer-------------------------------------------_
function myTimer() {
    
    var out;
	var now = new Date();
	var hour = now.getHours();
	var outHour = 0;
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
	var idMatchMediaDTF = 0;
	alertMatchMediaDTF();
	idMatchMediaDTF = idMinWidthDTF;
    
    //hour
    outHour=hour%12;
    if(outHour == 0){ outHour = 12}
    //outHour=(outHour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));

    //minute
    //minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));

    // second
    //second=(second*Math.PI/30);
    
	var all = "";
	var dT = "";
	
	if(minute < 10 && minute != 0){
		minute = "0" + minute.toString();
	}
	if(minute == 0){
		minute.toString();
		minute = "00";// + second.toString();
	}
	
	if(second < 10 && second != 0){
		second = "0" + second.toString();
	}
	if(second == 0){
		second.toString();
		second = "00";// + second.toString();
	}
	
	all += outHour.toString() + minute.toString();// + second.toString();
	
	var dTClassArr = [];
	for(var a = 0; a < all.length; a++) {
	
		//dT += '<div id = "divDT_0" class="dateTime xT4" >';//
		if(all.length == 1){dTClassArr[a] = '<div id = "divDT_1" class="dateTime xT1" >';}
		if(all.length == 2){dTClassArr[a] = '<div id = "divDT_2" class="dateTime xT2" >';}
		
		if(all.length == 3){dTClassArr[a] = '<div id = "divDT_3" class="dateTime xT3" >';}
		if(all.length == 4){dTClassArr[a] = '<div id = "divDT_4" class="dateTime xT4" >';}
		
		if(all.length == 5){dTClassArr[a] = '<div id = "divDT_5" class="dateTime xT5" >';}
		if(all.length == 6){dTClassArr[a] = '<div id = "divDT_6" class="dateTime xT6" >';}
		if(all.length == 7){dTClassArr[a] = '<div id = "divDT_7" class="dateTime xT7" >';}
		if(all.length == 8){dTClassArr[a] = '<div id = "divDT_8" class="dateTime xT8" >';}
	
	}
	
	var numOf = 0;
	for(var a = 0; a < all.length; a++) {
		if (idMinWidthDTF == 0) {
			if(all.length == 3){numOf = 8;}
			if(all.length == 4){numOf = 5;}
		}
		if (idMinWidthDTF == 1) {
			if(all.length == 3){numOf = 42;}
			if(all.length == 4){numOf = 30;}
		}
		if (idMinWidthDTF == 2) {
			if(all.length == 3){numOf = 54;}
			if(all.length == 4){numOf = 60;}
		}
		if (idMinWidthDTF == 3){
			if(all.length == 3){numOf = 84;}
			if(all.length == 4){numOf = 60;}
		}
		if (idMinWidthDTF == 4){
			if(all.length == 3){numOf = 114;}
			if(all.length == 4){numOf = 87;}
		}
		if (idMinWidthDTF == 5){
			if(all.length == 3){numOf = 165;}
			if(all.length == 4){numOf = 123;}
		}
		if (idMinWidthDTF == 6){
			if(all.length == 3){numOf = 153;}
			if(all.length == 4){numOf = 114;}
		}
		
		//if(all.length == 1){numOf = 0;}
		//if(all.length == 2){numOf = 0;}
		
/*
		if(all.length == 3){numOf = 68;}// all 102, 3 div 34
		if(all.length == 4){numOf = 50;}// 4 div 25 
*/
		
		//if(all.length == 5){numOf = 0;}
		//if(all.length == 6){numOf = 0;}
				
		dT += dTClassArr[a];
		dT += myTimeHeader(numOf,all[a]);
		dT += '</div>';
		
		//var test_me = "divDT_" + nId;
		
		//document.getElementById(testme).style.width = "500px";
	}
	
	//if(all.length >= 5){
		// var numLengthDv = 875/(all.length-1);
		// numLengthDv = Math.floor(numLengthDv);
		
		//document.getElementById("divDT_0").setAttribute("class","dateTime_1");
		//document.getElementById("divDT_0").style.width = "500px";
		//document.getElementById('divDT_0').setAttribute("style","width:500px");
		//document.getElementById("divDT_0").setAttribute("class","wide");
	//}
	
	//console.log(all.length +"   "+ outHour );
	out = '<div class="box boxColor0 xp9 colorBorder0 floatL">';
	
	out += dT;
	
	out += '</div>'
	out += '<div class="clearthefloats"></div>';//"<br>";

	//out = outHour + ":" + minute + ":" + second;

    document.getElementById(myId_Timer).innerHTML = out;
    //return out;
}

//myTimeHeader------------------------------------_
function myTimeHeader(numOf, str) { //numOf,
	var numInDiv = numOf;//all 102, 3 div 34, 4 div 24 
    var timeNum = str;

    var myClass = "";
    var out = "";
    
	out = '<p class="dateTimeP" >';
	for(var t = 0; t < numInDiv; t++) {
		out += timeNum;
	}
	out += '</p>';
    return out;
}
