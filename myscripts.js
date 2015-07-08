var pic1Clicked = 0;
var pic2Clicked = 0;
var pic3Clicked = 0;
var pic4Clicked = 0;
var pic5Clicked = 0;

var clickPic1 = function() {
	if(pic1Clicked == 0) {
		var a = document.getElementById("about").innerHTML;
		document.getElementById("display").innerHTML = a;
		setToZero();
		pic1Clicked = 1;
	}
	else {
		document.getElementById("display").innerHTML="";
		pic1Clicked = 0;
	}
	
};

var clickPic2 = function() {

	if(pic2Clicked == 0) {
		var a = document.getElementById("code").innerHTML;
		document.getElementById("display").innerHTML = a;
		setToZero();
		pic2Clicked = 1;
	}
	else {
		document.getElementById("display").innerHTML="";
		pic2Clicked = 0;
	}
};

var clickPic3 = function() {
	var a = document.getElementById("resume").innerHTML;
	document.getElementById("display").innerHTML = a;
};

var clickPic4 = function() {
	if(pic4Clicked == 0) {
		var a = document.getElementById("music").innerHTML;
		document.getElementById("display").innerHTML = a;
		setToZero();
		pic4Clicked = 1;
	}
	else {
		document.getElementById("display").innerHTML="";
		pic4Clicked = 0;
	}
};

var clickPic5 = function() {
	if(pic5Clicked == 0) {
		var a = document.getElementById("contact").innerHTML;
		document.getElementById("display").innerHTML = a;
		setToZero();
		pic5Clicked = 1;
	}
	else {
		document.getElementById("display").innerHTML="";
		setToZero();
	}
};

var setToZero = function() {
	pic1Clicked = 0;
	pic2Clicked = 0;
	pic3Clicked = 0;
	pic4Clicked = 0;
	pic5Clicked = 0;
}


// $( "p" ).click(function() {
//   $( this ).slideUp();
// });

// <p>Hey there! I'm <a href = "2015-07-07.pdf">Kristin</a>, and welcome to my website!  </p>
//
//
//				<p>So what brought you here?  Maybe you saw the link on my <a href = "https://instagram.com/kaybeezeee/">instagram</a>,  <a href = "https://twitter.com/kaybeezee">twitter</a>, or <a href = "https://www.linkedin.com/pub/kristin-beese/a4/424/901">linkedin</a>?  Maybe I begged you to take a look at it and now you are finally doing it?  Or maybe you are just creeping.  That's cool too.</p>
//				<p>The point is that I am just happy to have you here!  So who even is Kristin?  Well I can answer your questions. (current work in progress) </p>