"use strict";

// check if DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    var navigationPart = document.querySelectorAll(".site-header a");

    // set lazy preloader navigation betweeen pages

    var _loop = function _loop(i) {
	navigationPart[i].addEventListener("click", function (event) {
	    //if (window.location.href !== navigationPart[i].href) {
	    windowWidth = window.innerWidth;
	    // prevent event from immidiately changing location
	    event.preventDefault();
	    if (navigationPart[i].classList.contains("not-prevent")) {
		window.location = navigationPart[i].href;
	    } else {
		// define timeline and change location on complete
		if (windowWidth <= 460) {
		    var changeLocation = function changeLocation() {
			window.location = navigationPart[i].href;
		    }; // end of changeLocation function


		    var tl = new TimelineMax({onComplete: changeLocation});
		    tl.to(".preloader", 1, {x: "0%", ease: Power4.easeInOut});
		} else {
		    var _changeLocation = function _changeLocation() {
			window.location = navigationPart[i].href;
		    }; // end of changeLocation function


		    var tl = new TimelineMax({onComplete: _changeLocation});
		    tl.to(".header__navigation-wrapper", 0.5, {y: "-110%", ease: Power4.easeInOut}).to(".header__language-wrapper", 0.5, {x: "-110%", ease: Power4.easeInOut}, "-=0.4").to(".header__logo", 0.5, {autoAlpha: 0, ease: Power4.easeInOut}, "-=0.5").to(".preloader", 1, {x: "0%", ease: Power4.easeInOut}, "-=0.5");
		} // end of else
	    } // end of else
	    //} // end of if
	}); // end of click event
    };

    for (var i = 0; i < navigationPart.length; i++) {
	_loop(i);
    } // end of for loop

    $.fn.removeClassWild = function (mask) {
	return this.removeClass(function (index, cls) {
	    var re = mask.replace(/\*/g, '\\S+');
	    return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
	});
    };


    function setHeaderClass() {
	$(".site-header").fadeOut(1100);
	if ($.scrollify.current().hasClass("menu-light")) {
	    $(".site-header").addClass("light");
	} else {
	    $(".site-header").removeClass("light");
	}

	$(".site-header").removeClassWild("bg-header-*");

	var color = '';
	color = $.scrollify.current().data("headerbg");
	if (color) {
	    $(".site-header").addClass('bg-header-' + color);
	}
	console.log(color);

	$(".site-header").fadeIn('slow');
    }
    function setHeaderBg() {
    }

    function startSectionsAnimations() {
	if ($.scrollify.current().is("#entwicklung-2")) {
	    entwicklung2Animations();
	}
	if ($.scrollify.current().is("#entwicklung-3")) {
	    entwicklung3Animations();
	}
	if ($.scrollify.current().is("#software-2")) {
	    software2Animations();
	}
	if ($.scrollify.current().is("#design-2")) {
	    design2Animations();
	}
	if ($.scrollify.current().is("#design-3")) {
	    design3Animations();
	}
	if ($.scrollify.current().is("#outstaffing-2")) {
	    outstaffing2Animations();
	}
	if ($.scrollify.current().is("#outstaffing-3")) {
	    outstaffing3Animations();
	}
	if ($.scrollify.current().is("#home-2")) {
	    home2Animations();
	}
	if ($.scrollify.current().is("#home-3")) {
	    home3Animations();
	}
    }


    $(function () {
	$.scrollify({
	    section: ".scroll-section",
	    sectionName: false,
	    before: function () {
		setHeaderClass();
	    },
	    afterRender: function () {
		setHeaderClass();
		startSectionsAnimations()
	    },
	    after: function () {
		startSectionsAnimations()
	    }
	});
    });


}); // end of DOMContentLoaded function