"use strict";

// check if DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    // set timeline
    // on complete run border animation
    var tl = new TimelineMax();
    // set intro animation timeline
    tl.to(".preloader", 1, {scaleX: 0, ease: Power4.easeInOut}).set(".preloader", {x: "-100%", scaleX: 1})
	    .to(".section-heading", 1, {y: "0%", ease: Power4.easeOut}, 0.05, "-=0.25")
	    .staggerTo(".map-responsive", .7, {y: "0%", ease: Power4.easeOut}, 0.2, "-=0.25")
	    .staggerTo(".contact-info .s-1", .5, {y: "0%", ease: Power4.easeOut}, 0.2, "-=0.25")
	    .staggerTo(".contact-info .s-2", .5, {y: "0%", ease: Power4.easeOut}, 0.2, "-=0.25")
}); // end of DOMContentLoaded function