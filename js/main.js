// Scroll to top button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// 	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
// 		document.getElementById("scrollTop").style.display = "block"
	
// 	else {
// 		document.getElementById("scrollTop").style.display = "none"
// 	}
// }

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

var timeOut;
function scrollToTop() {
	if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
		window.scrollBy(0,-100);
		timeOut=setTimeout('scrollToTop()',10);
		document.getElementById("scrollToTop").style.display = "block";
	}
	else clearTimeout(timeOut);
	document.getElementById("scrollToTop").style.display = "none";
}

// function scrollToTop() {
// 	var scrollToTop = document.getElementById("scrollToTop");
// 	    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
// 	        window.scrollBy(0, -200);
// 	        requestAnimationFrame(scrollToTop);
// 	        document.getElementById("scrollToTop").style.display = "block";
// 	    } else {
// 	    	document.getElementById("scrollToTop").style.display = "none";
// 	    }
// 	}