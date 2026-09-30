//myNavUpper---------------------------------------_
function myNavUpper(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '" title="' + arr[i].displayTitle + '">' + arr[i].display + '</a>';
    }
    return out;
}

//myNavMain---------------------------------------_
function myNavMain(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
    	//<a href="artTest_0.html" title="artTest_0"><img src="img/myIcons/MET_ART_0.jpg" alt="HTML tutorial" style="width:140px;height:140px;border:0;"></a>
        out += '<a href="' + arr[i].url + '" title="' + arr[i].displayTitle + '"><img src="' + arr[i].img + '" alt="' + arr[i].alt + '" style="' + arr[i].style + '"></a>';
    }
    return out;
}

//myNavBottom---------------------------------------_
function myNavBottom(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '" title="' + arr[i].displayTitle + '">' + arr[i].display + '</a>';
    }
    return out;    
}

//myNavSocial---------------------------------------_
function myNavSocial(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<div id="myDIV_6_1" class="box floatL social"><a href="' + arr[i].url + '" onclick="window.scrollTo(0, 0)" target="_blank" rel="noopener noreferrer" title="' + arr[i].displayTitle + '"><img src="' + arr[i].img + '" alt="' + arr[i].alt + '" style="' + arr[i].style + '"></a></div>';
    }
    return out;
}

//myNavSocial---------------------------------------_
function myNavSocialBody(arr) {
    var outBody = "";
    var i;
    for(i = 0; i < arr.length; i++) {
    	
    	if(i == 0){
	        outBody += '<div class="box floatL social- social-m-"><a href="' + arr[i].url + '" onclick="myOpenSelf(\''+arr[i].url+'\');return false;" target="_blank" rel="noopener noreferrer" title="' + arr[i].displayTitle + '"><img src="' + arr[i].img + '" alt="' + arr[i].alt + '" style="' + arr[i].style + '"></a></div>';
    	}else{
		outBody += '<div class="box floatL social- social-m-"><a href="' + arr[i].url + '" onclick="window.scrollTo(0, 0)" target="_blank" rel="noopener noreferrer" title="' + arr[i].displayTitle + '"><img src="' + arr[i].img + '" alt="' + arr[i].alt + '" style="' + arr[i].style + '"></a></div>';
    	}
        
        //outBody += '<div class="box socialBody"><a href="' + arr[i].url + '" onclick="window.scrollTo(0, 0)" target="_blank" rel="noopener noreferrer" title="' + arr[i].displayTitle + '"><img src="' + arr[i].img + '" alt="' + arr[i].alt + '" style="' + arr[i].style + '"></a></div>';
    }
    return outBody;
}

//myNavMain---------------------------------------_
function myNavMainFormIng(arr) {//add action
	var myMethod = "get";
	var myType = "image";
	var width = "140";
	var height = "140";
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
  		/*
		<form action="index.html" method="get">
		<input type="image" src="home.gif" onclick="alert('Don\'t forget to press the back button to return!')" width="72" height="41" />
		</form>
		*/
		out += '<div id=\"myDIV_NavMain" class="boxZero xMainNavPic floatL\"><form action="' + arr[i].url + '"method="'+myMethod+'"><input type="'+myType+'" src="' + arr[i].img + '" onclick="'+alert('wheeee')+'window.scrollTo(0, 0)" width="'+width+'" height="'+height+'"></form></div>';
    }
    return out;
}

//myNavMain---------------------------------------_
function myNavMainFormIngTest(arr, fun) {//add action
	var myMethod = "get";
	var myType = "image";
	var width = "140";
	var height = "140";
	var onclick = 0;//fun + "return false";
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
    	onclick = i;
		out += '<div id=\"myDIV_NavMain" class="boxZero xMainNavPic floatL \"><form action="' + arr[i].url + '"method="'+myMethod+'"><input type="'+myType+'" src="' + arr[i].img + '"onclick="'+onclick+' window.scrollTo(0, 0) return false" width="'+width+'" height="'+height+'"></form></div>';
    }
    return out;
}

//myOpenSelf--------------------------_
function myOpenSelf(str) {
    window.open(str, "_self");
}
