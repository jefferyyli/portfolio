// Scroll to top button
var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-10);
		timeOut=setTimeout('scrollToTop()',10);
		requestAnimationFrame(scrollToTop);
		document.getElementById("scrollToTop").style.display = "block";
	}
	else clearTimeout(timeOut);
}