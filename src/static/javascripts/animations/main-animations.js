"use strict";

// check if DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    // define timeline
    var tl = new TimelineMax();
    // set intro animation timeline
    tl.to(".preloader", 1, {scaleX: 0, ease: Power4.easeInOut}).set(".preloader", {x: "-100%", scaleX: 1})
	    .to("#home-1 .section-heading", 1, {y: "0%", ease: Power4.easeOut}, "-=0.25")
	    .to("#home-1 .description", 0.5, {y: "0%", ease: Power4.easeInOut})
	    .staggerTo("#home-1 h2", .7, {y: "0%", ease: Power4.easeOut}, 0.2, "-=0.25")
	    .staggerTo("#home-1 p", .5, {y: "0%", ease: Power4.easeOut}, 0.2, "-=0.25");

    // set circles timeline
    // separate it from main so it more readable
    // check if it's not mobile

    if (window.innerWidth > 860) {
	var setCircleYoYo = function setCircleYoYo() {
	    // here we can setup some circle infinite
	    // animations after intro animation

	    var tl1 = new TimelineMax({repeat: -1});
	    tl1.to(".main__intro-circle", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: -20, y: -110}, {x: -30, y: -120}, {x: -10, y: -120}, {x: -20, y: -110}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    }, 0).to(".main__intro-circle", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: -20, y: -110}, {x: -30, y: -100}, {x: -10, y: -100}, {x: -20, y: -110}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    });
	    var tl2 = new TimelineMax({repeat: -1});
	    tl2.to(".main__intro-circle-small", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 70, y: -130}, {x: 80, y: -140}, {x: 60, y: -140}, {x: 70, y: -130}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    }, 0).to(".main__intro-circle-small", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 70, y: -130}, {x: 80, y: -120}, {x: 60, y: -120}, {x: 70, y: -130}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    });

	    var tl3 = new TimelineMax({repeat: -1});
	    tl3.to(".main__intro-circle-extra-small", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 60, y: -230}, {x: 70, y: -240}, {x: 50, y: -240}, {x: 60, y: -230}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    }, 0).to(".main__intro-circle-extra-small", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 60, y: -230}, {x: 70, y: -220}, {x: 50, y: -220}, {x: 60, y: -230}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    });
	    var tl4 = new TimelineMax({repeat: -1});
	    tl4.to(".main__intro-circle-grey", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 0, y: -70}, {x: -10, y: -80}, {x: 10, y: -80}, {x: 0, y: -70}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    }, 0).to(".main__intro-circle-grey", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 0, y: -70}, {x: -10, y: -60}, {x: 10, y: -60}, {x: 0, y: -70}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    });
	}; // end of yoyo


	var tlCircle = new TimelineMax({onComplete: setCircleYoYo});
	tlCircle.to(".main__intro-circle-small", 2, {autoAlpha: 1, ease: Power3.easeOut}, 1).to(".main__intro-circle-small", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 0, y: 0}, {x: 280, y: 75}, {x: 70, y: -130}]
	    },
	    ease: Power1.easeInOut
	}, 0.9).to(".main__intro-circle", 2, {autoAlpha: 1, ease: Power3.easeOut}, 1.3).to(".main__intro-circle", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 0, y: 0}, {x: 160, y: -35}, {x: -20, y: -110}]
	    },
	    ease: Power1.easeInOut
	}, 1.2).to(".main__intro-circle-extra-small", 1, {autoAlpha: 0.6, ease: Power3.easeOut}, 1.5).to(".main__intro-circle-extra-small", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 0, y: 0}, {x: -260, y: -35}, {x: 60, y: -230}]
	    },
	    ease: Power1.easeInOut
	}, 1.4).to(".main__intro-circle-grey", 1, {autoAlpha: 0.66, ease: Power3.easeOut}, 1.6).to(".main__intro-circle-grey", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 50, y: 60}, {x: -200, y: -40}, {x: 0, y: -70}]
	    },
	    ease: Power1.easeInOut
	}, 0.8).to(".main__intro-circle-grey-small", 1, {autoAlpha: 0.16, ease: Power3.easeOut}, 1.8).to(".main__intro-circle-grey-small", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 50, y: 60}, {x: -50, y: -20}, {x: 160, y: -70}]
	    },
	    ease: Power1.easeInOut
	}, 1.2).to(".main__intro-circle-extra-small-top", 1, {autoAlpha: 0.16, ease: Power3.easeOut}, 2).to(".main__intro-circle-extra-small-top", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 50, y: 60}, {x: -200, y: -20}, {x: -60, y: -70}]
	    },
	    ease: Power1.easeInOut
	}, 1.4);
    } // end of width check


}); // end of DOMContentLoaded function

function home2Animations() {
    var tl2 = new TimelineMax();
    // set intro animation timeline
    tl2.to("#home-2 .section-heading", 1.5, {y: "0%", ease: Power4.easeOut}, "-=0.25")
	    .to("#home-2 .circles", 1, {opacity: 1, ease: Power1.easeOut}, "-=1")
	    .staggerTo("#home-2 .projects li", 1, {opacity: 1, ease: Power1.easeOut}, 0.2, "-=1")
}
function home3Animations() {
    var tl3 = new TimelineMax();
    // set intro animation timeline
    tl3.to("#home-3 .section-heading", 1.5, {y: "0%", ease: Power4.easeOut}, "-=0.25")
	    .to("#home-3 .circles", 1, {opacity: 1, ease: Power1.easeOut}, "-=1")
	    .to("#home-3 .testimonials", 1, {opacity: 1, ease: Power1.easeOut}, "-=1")
}