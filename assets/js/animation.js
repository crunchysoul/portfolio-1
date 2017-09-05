/*
*	Hide nav bar on scroll down
*	Show nav bar on scroll up
*/
var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('nav.primary-nav').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();
	
	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
	
	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st <= 25) {
		// Top of the page
		$('nav.primary-nav').removeClass('nav-down').removeClass('nav-up').addClass('nav-top');;
	}
	else if (st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		$('nav.primary-nav').removeClass('nav-top').removeClass('nav-down').addClass('nav-up');
	} else {
		// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$('nav.primary-nav').removeClass('nav-top').removeClass('nav-up').addClass('nav-down');
		}
	}
	
	lastScrollTop = st;
}

/* Load first icon */
$(window).scroll(function() {
	$('#dev').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("fadeIn");
		}
	});
});

/* Load second icon */
$(window).scroll(function() {
	$('#des').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("fadeIn2");
		}
	});
});

/* Load third icon */
$(window).scroll(function() {
	$('#agi').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("fadeIn3");
		}
	});
});

/* Load fourth icon */
$(window).scroll(function() {
	$('#tpl').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("fadeIn4");
		}
	});
});


$(document).ready(function() {
	/* Load the Moon */
	$('#moon').each(function(){
		$(this).addClass("fadeIn4");
	});
	/* Load the Wolf */
	$('#wolf').each(function(){
		$(this).addClass("fadeIn5");
	});

	/* If scroll bar is not a top on page reload */
	var st = $(this).scrollTop();
	if (st!=0) {
		$('nav.primary-nav').removeClass('nav-top').removeClass('nav-down').addClass('nav-up');	
	}
});

/* Navigation for Sections */
function navigate(btn) {
	
	if (btn == "#homebtn") {
		$('html, body').animate({
			scrollTop: $("#hero").offset().top
		}, 1000);
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
	else if (btn == "#projectsbtnn") {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 1000);
	}
	else if (btn == "#contactbtn") {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	}
}