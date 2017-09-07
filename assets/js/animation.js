/*
*	Hide nav bar on scroll down
*	Show nav bar on scroll up
*/
var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('nav.primary-nav').outerHeight();

/*
*	For mobile navigation
*/
var mobile_navigation_displayed = false;

/*
*	Detect page Scroll
*/
$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	/* If mobile navigation is off */
	if(mobile_navigation_displayed == false) {
		
		/* Detect Scrolling */
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}
}, 250);

/*
* When page is scrolled
*/
function hasScrolled() {
	var st = $(this).scrollTop();
	
	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
	
	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st <= 30) {
		// Top of the page
		$('nav.primary-nav').removeClass('nav-down').removeClass('nav-up').addClass('nav-top');
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

/*
*	When page is loaded
*/
$(document).ready(function() {

	/* Load the Moon */
	$('#moon').each(function(){
		$(this).addClass("fadeIn4");
	});

	/* Load the Wolf */
	$('#wolf').each(function(){
		$(this).addClass("fadeIn5");
	});

	/* If scroll bar is not on top on page reload */
	var st = $(this).scrollTop();
	if (st!=0) {
		$('nav.primary-nav').removeClass('nav-top').removeClass('nav-down').addClass('nav-up');	
		
	}

	/* Hamburger Icon */
	$('.burgericon').click(function(){
		var top_page = false;

		/* Is the mobile navigation displayed on screen? */
		if(mobile_navigation_displayed==true) {
			mobile_navigation_displayed = false;
			menutext.innerHTML = 'MENU';
			if(lastScrollTop==0) {
				/* Show Nav Bar Transparent since we are at the top of the page */
				$('nav.primary-nav').removeClass('nav-down').removeClass('nav-up').addClass('nav-top');
				top_page = true;
			}
		}
		else {
			mobile_navigation_displayed = true;
			menutext.innerHTML = 'CLOSE';
		}
		
		/* Toggle Mobile Navigation Icon */
		$('.burgericon').toggleClass('active');

		/* Show Mobile Navigation */
		$('div.mobile-nav').toggleClass('mobile-nav-active');
	
		/* Show Nav Bar with Color only if we are not at the top of the page */
		if(top_page==false) {
			$('nav.primary-nav').removeClass('nav-top').removeClass('nav-up').addClass('nav-down');
		}
	})
});

function hide_mobile_navigation() {
	/* Remove Mobile Navigation Active */
	$('div.mobile-nav').removeClass('mobile-nav-active');

	/* Remove Mobile Icon Active */
	$('.burgericon').removeClass('active');

	/* Hide Mobile Navigation Menu */
	$('nav.primary-nav').removeClass('nav-top').removeClass('nav-down').addClass('nav-up');

	/* Set variable to off */
	mobile_navigation_displayed = false;

	/* Set menutext to MENU */
	menutext.innerHTML = 'MENU';
}