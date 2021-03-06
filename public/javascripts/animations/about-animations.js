"use strict";

// check if DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    // set timeline
    // on complete run border animation
    var tl = new TimelineMax();
    // set intro animation timeline
    tl.to(".preloader", 1, {scaleX: 0, ease: Power4.easeInOut}).set(".preloader", {x: "-100%", scaleX: 1})
	    .to(".section-heading", .7, {y: "0%", ease: Power4.easeOut}, "-=0.25")
	    .staggerTo(".img *", .7, {y: "0%", ease: Power4.easeOut}, 0.2, "-=0.5")
	    .staggerTo(".text p", .7, {y: "0%", ease: Power4.easeOut}, 0.3, "-=0.25");

    if (window.innerWidth > 860) {
	var setCircleYoYo = function setCircleYoYo() {
	    // here we can setup some circle infinite
	    // animations after intro animation

	    var tl1 = new TimelineMax({repeat: -1});
	    tl1.to(".about__intro-circle", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: -20, y: -110}, {x: -30, y: -120}, {x: -10, y: -120}, {x: -20, y: -110}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    }, 0).to(".about__intro-circle", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: -20, y: -110}, {x: -30, y: -100}, {x: -10, y: -100}, {x: -20, y: -110}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    });
	    var tl2 = new TimelineMax({repeat: -1});
	    tl2.to(".about__intro-circle-small", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 70, y: -130}, {x: 80, y: -140}, {x: 60, y: -140}, {x: 70, y: -130}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    }, 0).to(".about__intro-circle-small", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 70, y: -130}, {x: 80, y: -120}, {x: 60, y: -120}, {x: 70, y: -130}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    });

	    var tl3 = new TimelineMax({repeat: -1});
	    tl3.to(".about__intro-circle-extra-small", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 60, y: -230}, {x: 70, y: -240}, {x: 50, y: -240}, {x: 60, y: -230}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    }, 0).to(".about__intro-circle-extra-small", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 60, y: -230}, {x: 70, y: -220}, {x: 50, y: -220}, {x: 60, y: -230}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    });
	    var tl4 = new TimelineMax({repeat: -1});
	    tl4.to(".about__intro-circle-grey", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 0, y: -70}, {x: -10, y: -80}, {x: 10, y: -80}, {x: 0, y: -70}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    }, 0).to(".about__intro-circle-grey", 2, {
		bezier: {
		    type: "cubic",
		    values: [{x: 0, y: -70}, {x: -10, y: -60}, {x: 10, y: -60}, {x: 0, y: -70}],
		    autoRotate: ["x", "y", "rotation", 0, true]
		}, ease: Power0.easeNone
	    });
	}; // end of setBorderTween


	var tlCircle = new TimelineMax({onComplete: setCircleYoYo});
	tlCircle.to(".about__intro-circle-small", 2, {autoAlpha: 1, ease: Power3.easeOut}, 1).to(".about__intro-circle-small", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 0, y: 0}, {x: 280, y: 75}, {x: 70, y: -130}]
	    },
	    ease: Power1.easeInOut
	}, 0.9).to(".about__intro-circle", 2, {autoAlpha: 1, ease: Power3.easeOut}, 1.3).to(".about__intro-circle", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 0, y: 0}, {x: 160, y: -35}, {x: -20, y: -110}]
	    },
	    ease: Power1.easeInOut
	}, 1.2).to(".about__intro-circle-extra-small", 1, {autoAlpha: 0.6, ease: Power3.easeOut}, 1.5).to(".about__intro-circle-extra-small", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 0, y: 0}, {x: -260, y: -35}, {x: 60, y: -230}]
	    },
	    ease: Power1.easeInOut
	}, 1.4).to(".about__intro-circle-grey", 1, {autoAlpha: 0.66, ease: Power3.easeOut}, 0.8).to(".about__intro-circle-grey", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 50, y: 60}, {x: -200, y: -40}, {x: 0, y: -70}]
	    },
	    ease: Power1.easeInOut
	}, 0).to(".about__intro-circle-grey-small", 1, {autoAlpha: 0.16, ease: Power3.easeOut}, 1.8).to(".about__intro-circle-grey-small", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 50, y: 60}, {x: -50, y: -20}, {x: 160, y: -70}]
	    },
	    ease: Power1.easeInOut
	}, 1.2).to(".about__intro-circle-extra-small-top", 1, {autoAlpha: 0.16, ease: Power3.easeOut}, 2).to(".about__intro-circle-extra-small-top", 3, {
	    bezier: {
		type: "quadratic",
		values: [{x: 50, y: 60}, {x: -200, y: -20}, {x: -60, y: -70}]
	    },
	    ease: Power1.easeInOut
	}, 1.4);
    } // end of width check
}); // end of DOMContentLoaded function