var pic1Clicked = 0;
var pic2Clicked = 0;
var pic3Clicked = 0;
var pic4Clicked = 0;
var pic5Clicked = 0;

var clickPic1 = function() {
	if(pic1Clicked == 0) {
		slideBack();
    	$( "#about" ).slideDown( "slow" );
		pic1Clicked = 1;
	}
	else {
    	$( "#about" ).slideUp( "slow" );
		pic1Clicked = 0;
	}
	
};

var clickPic2 = function() {
	if(pic2Clicked == 0) {
		slideBack();
    	$( "#code" ).slideDown( "slow" );
		pic2Clicked = 1;
	}
	else {
    	$( "#code" ).slideUp( "slow" );
		pic2Clicked = 0;
	}
};

var clickPic3 = function() {
	var a = document.getElementById("resume").innerHTML;
	document.getElementById("display").innerHTML = a;
};

var clickPic4 = function() {
	if(pic4Clicked == 0) {
    	slideBack();
    	$( "#music" ).slideDown( "slow" );
		pic4Clicked = 1;
	}
	else {
    	$( "#music" ).slideUp( "slow" );
		pic4Clicked = 0;
	}
};

var clickPic5 = function() {
	if(pic5Clicked == 0) {
    	slideBack();
    	$( "#contact" ).slideDown( "slow" );
		pic5Clicked = 1;
	}
	else {
    	$( "#contact" ).slideUp( "slow" );
		pic5Clicked = 0;
	}
};

var slideBack = function() {
	if (pic1Clicked == 1) {
		pic1Clicked = 0;
		$( "#about" ).slideUp( "slow" );
	}
	else if (pic2Clicked == 1) {
		pic2Clicked = 0;
		$( "#code" ).slideUp( "slow" );
	}
	else if (pic4Clicked == 1) {
		pic4Clicked = 0;
		$( "#music" ).slideUp( "slow" );
	}
	else if (pic5Clicked == 1) {
		pic5Clicked = 0;
		$( "#contact" ).slideUp( "slow" );
	}
}


