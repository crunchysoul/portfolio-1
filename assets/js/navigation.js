/* Navigation for Sections */
function navigate(btn) {
	
	if (btn == "#homebtn") {
		$('html, body').animate({
			scrollTop: $("#hero").offset().top
		}, 1000);
		// Top of the page -- Hide Colored Mobile Nav Since Home is top of the page
		$('nav.primary-nav').removeClass('nav-down').removeClass('nav-up').addClass('nav-top');;
	}
	else if (btn == "#aboutbtn") {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1000);
	}
	else if (btn == "#socialbtn") {
		$('html, body').animate({
			scrollTop: $("#social").offset().top
		}, 1000);
	}
	else if (btn == "#techbtn") {
		$('html, body').animate({
			scrollTop: $("#tech").offset().top
		}, 1000);
	}
	else if (btn == "#projectsbtn") {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 1000);
	}
	else if (btn == "#contactbtn") {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	}
	else if (btn == "#resumebtn") {
		$('html, body').animate({
			scrollTop: $("#resume").offset().top
		}, 1000);
	}
	else if (btn == "#homebtn2") {
		$('html, body').animate({
			scrollTop: $("#hero").offset().top
		}, 1000);
		hide_mobile_navigation();
		// Top of the page -- Hide Colored Mobile Nav Since Home is top of the page
		$('nav.primary-nav').removeClass('nav-down').removeClass('nav-up').addClass('nav-top');;
	}
	else if (btn == "#aboutbtn2") {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1000);
		hide_mobile_navigation();
	}
	else if (btn == "#socialbtn2") {
		$('html, body').animate({
			scrollTop: $("#social").offset().top
		}, 1000);
		hide_mobile_navigation();
	}
	else if (btn == "#techbtn2") {
		$('html, body').animate({
			scrollTop: $("#tech").offset().top
		}, 1000);
		hide_mobile_navigation();
	}
	else if (btn == "#projectsbtn2") {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 1000);
		hide_mobile_navigation();
	}
	else if (btn == "#contactbtn2") {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
		hide_mobile_navigation();
	}
	else if (btn == "#resumebtn2") {
		$('html, body').animate({
			scrollTop: $("#resume").offset().top
		}, 1000);
		hide_mobile_navigation();
    }
    else if (btn == "#backbtn") {
        $('html, body').animate({
			scrollTop: $("#hero").offset().top
		}, 1000);
		hide_mobile_navigation();
		// Top of the page -- Hide Colored Mobile Nav Since Home is top of the page
		$('nav.primary-nav').removeClass('nav-down').removeClass('nav-up').addClass('nav-top');;
    }
}