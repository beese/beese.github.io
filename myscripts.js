var pic1Clicked = 0;
var pic2Clicked = 0;
var pic3Clicked = 0;
var pic4Clicked = 0;
var pic5Clicked = 0;

var prevPage = 0;

var lastClicked = null;

$(function(){ //when document is ready run this function
	$("#pretty a").click(function(e){
		var href = $(this).attr("href");
		if(href[0] !== "#") { //click on resume
			return true;
		}
		//now handle the different cases
		$(this).parents("#pretty").addClass("active");
		$(this).parents("#pretty").find("img").removeClass("active");
		$(this).find("img").addClass("active");
		var $this = $(this);

		if(lastClicked !== null) {
			$(lastClicked).slideUp("slow", function(){
				if(lastClicked !== href) {
					$(href).slideDown("slow");
					lastClicked = href;
				}
				else {
					$this.find("img").removeClass("active");
					$this.parents("#pretty").removeClass("active");
					lastClicked = null;
				}
			});
		}
		else {
			$(href).slideDown("slow");
			lastClicked = href;
		}
	});
	return false;
});