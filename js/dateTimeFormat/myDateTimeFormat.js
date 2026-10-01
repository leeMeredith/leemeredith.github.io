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
	
	// One column per digit, each filled with exactly three full rows of that
	// digit. The count is measured, not fixed: how many copies of this digit
	// (a "1" is narrower than an "8") fit across this column at the current
	// text size, times three. So the rows stay full at every window width.
	var box = document.getElementById(myId_Timer);
	var key = all + "|" + box.clientWidth;
	if (key === lastClockKey) return;
	lastClockKey = key;

	var dT = "";
	for (var a = 0; a < all.length; a++) {
		dT += '<div class="dateTime xT' + all.length + '"><p class="dateTimeP"></p></div>';
	}
	box.innerHTML = '<div class="box boxColor0 xp9 colorBorder0 floatL">' + dT + '</div><div class="clearthefloats"></div>';

	var cells = box.querySelectorAll(".dateTimeP");
	for (var c = 0; c < cells.length; c++) {
		var digit = all[c];
		var width = cells[c].clientWidth;
		var perRow = Math.max(1, Math.floor((width - 1) / digitWidth(digit, cells[c])));
		cells[c].textContent = new Array(perRow * CLOCK_ROWS + 1).join(digit);
	}
}

var CLOCK_ROWS = 3;
var lastClockKey = "";
var measureCanvas = null;

// The width of one digit in the clock's own font, measured.
function digitWidth(digit, el) {
	measureCanvas = measureCanvas || document.createElement("canvas");
	var ctx = measureCanvas.getContext("2d");
	var cs = getComputedStyle(el);
	ctx.font = cs.fontStyle + " " + cs.fontWeight + " " + cs.fontSize + " " + cs.fontFamily;
	var w = ctx.measureText(new Array(21).join(digit)).width / 20;
	return w + (parseFloat(cs.letterSpacing) || 0);
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
