"use strict";

// check if DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    // get all video elements
    var video = document.querySelectorAll(".design__intro-content-item video");
    // get all img elements
    var img = document.querySelectorAll(".design__intro-content-item img");
    // get designContainer
    var designContainer = document.querySelectorAll(".design__intro-content-item");
    // get all progress elements
    var videoProgress = document.querySelectorAll(".animation__progress");
    // get video overlay
    var overlayRight = document.getElementById("overlay-right");
    var overlayLeft = document.getElementById("overlay-left");
    // get video line wrapper
    var lineWrapper = document.getElementById("line-wrapper");
    // get video line
    var line = document.querySelectorAll(".design__intro-content-line");
    // define interval to use later
    var interval;
    // define progScaleX to use it later in interval function
    var progScaleX;
    // define videoSrc to use it later in event handler
    var videoSrc;

    // set event listeners and interval on video

    var _loop = function _loop(i) {
	designContainer[i].addEventListener("mouseenter", function () {
	    videoSrc = designContainer[i].getAttribute("data-video-src");
	    // check if video source is currently empty
	    if (video[i].getAttribute("src") === "") {
		video[i].setAttribute("src", videoSrc);
	    } // end of if
	    video[i].style.display = "block";
	    img[i].style.display = "none";
	    video[i].play();
	    interval = setInterval(function () {
		progScaleX = video[i].currentTime / video[i].duration;
		videoProgress[i].style.transform = "scale(" + progScaleX + ",1)";
	    }, 17);
	}); // end of mouseenter handler
	designContainer[i].addEventListener("mouseleave", function () {
	    //console.log(video[i]);
	    video[i].pause();
	    clearInterval(interval);
	}); // end of mouseleave handler
    };

    for (var i = 0; i < video.length; i++) {
	_loop(i);
    } // end of for loop

    var windowWidth = window.innerWidth;

    // check if there is no video elements on page
    if (video.length === 0) {
	// define popUp variables;
	var popUp = document.getElementById("pop-up");
	var popUpImg = document.querySelector("#pop-up img");

	var _loop2 = function _loop2(i) {
	    designContainer[i].addEventListener("click", function () {
		imgSrc = img[i].getAttribute("src");
		popUpImg.setAttribute("src", imgSrc);
		var tl = new TimelineMax();
		tl.to(popUp, 1, {x: "0%", ease: Power4.easeInOut}).to(popUpImg, 1, {x: "0%", ease: Power4.easeInOut}, "-=0.5");
	    }); // end of designContainer click handler
	};

	for (var i = 0; i < img.length; i++) {
	    _loop2(i);
	} // end of for loop
	popUp.addEventListener("click", function () {
	    var tl = new TimelineMax();
	    tl.to(popUpImg, 1, {x: "110%", ease: Power4.easeInOut}).to(popUp, 1, {x: "100%", ease: Power4.easeInOut}, "-=0.5").set(popUp, {x: "-100%"}).set(popUpImg, {x: "-110%"});
	}); // end of popUp click handler
    } // end of if

    // define variables to scroll on overlay
    var currentTime; // set current time on mouseenter
    var nowTime;
    var timeSpent;
    var lineFullWidth; // get visible line width
    var lineFullScroll; // get scroll line width
    var lineOffsetLeft; // get line offset to the left
    var difference; // get difference between visible and hidden parts
    var transformedX = 0; // set transformedX value, then change it during scroll
    var scrollDistance = 0; // set scrollDistance value, which will be changed in interval and returned
    var disableRight = false; // set boolean for prevention from overscrolling on the right overlay


    // check if it is tablet or PC
    // setup for PC
    if (windowWidth >= 1025) {
	// setup overlayRight mouseenter handler
	overlayRight.addEventListener("mouseenter", function () {
	    if (!overlayLeft.classList.contains("visible")) {
		overlayLeft.classList.add("visible");
	    } // end of if
	    lineFullWidth = lineWrapper.offsetWidth;
	    lineFullScroll = lineWrapper.scrollWidth + -1 * transformedX;
	    lineOffsetLeft = lineWrapper.getBoundingClientRect().left;
	    difference = -1 * (lineFullScroll - lineFullWidth + lineOffsetLeft);
	    currentTime = Date.now();
	    if (transformedX >= difference && !disableRight) {
		interval = setInterval(function () {
		    nowTime = Date.now();
		    timeSpent = nowTime - currentTime;
		    if (transformedX - timeSpent / 1 >= difference) {
			scrollDistance = transformedX - timeSpent / 1;
			TweenMax.to(line, 0, {x: scrollDistance, ease: Power4.easeOut});
			return scrollDistance;
		    } else {
			disableRight = true;
			overlayRight.classList.remove("visible");
		    } // end of else
		}, 1); // end of interval
	    } // end of if
	});

	// setup overlayRight mouseleave handler
	overlayRight.addEventListener("mouseleave", function () {
	    transformedX = scrollDistance;
	    clearInterval(interval);
	});

	// setup overlayLeft mouseenter handler
	overlayLeft.addEventListener("mouseenter", function () {
	    //console.log("Transformed X:", transformedX);
	    if (disableRight) {
		disableRight = false;
		overlayRight.classList.add("visible");
	    }
	    currentTime = Date.now();
	    if (transformedX <= 0) {
		interval = setInterval(function () {
		    nowTime = Date.now();
		    timeSpent = nowTime - currentTime;
		    if (scrollDistance <= 0) {
			scrollDistance = transformedX + timeSpent / 1;
			TweenMax.to(line, 0, {x: scrollDistance, ease: Power4.easeOut});
			return scrollDistance;
		    } else {
			overlayLeft.classList.remove("visible");
		    }
		}, 1); // end of interval
	    } // end of if
	}); // end of overlay left handler

	// setup overlayLeft mouseleave handler
	overlayLeft.addEventListener("mouseleave", function () {
	    transformedX = scrollDistance;
	    clearInterval(interval);
	}); // end of overlay left handler
	// set up for tablets and smaller
    } else {
	var movedX = 0;
	var differenceX = 0;
	var initialTouchX = 0;
	lineWrapper.addEventListener("touchstart", function (event) {
	    lineFullWidth = lineWrapper.offsetWidth;
	    lineFullScroll = lineWrapper.scrollWidth + movedX;
	    lineOffsetLeft = lineWrapper.getBoundingClientRect().left;
	    difference = -1 * (lineFullScroll - lineFullWidth + lineOffsetLeft);
	    initialTouchX = event.touches[0].clientX;
	    lineWrapper.addEventListener("touchmove", function (event) {
		var movingX = event.touches[0].clientX;
		// moving from left to right
		if (movingX < initialTouchX) {
		    if (!overlayLeft.classList.contains("visible")) {
			overlayLeft.classList.add("visible");
		    } // end of if
		    if (-1 * differenceX >= difference && !disableRight) {
			differenceX = movedX - (movingX - initialTouchX);
			TweenMax.to(line, 0, {x: -1 * differenceX, ease: Power4.easeOut});
		    } else {
			//console.log("Disable right:", disableRight);
			disableRight = true;
			overlayRight.classList.remove("visible");
		    } // end of else
		} else if (movingX > initialTouchX) {
		    // moving from right to left
		    //console.log("Moving from right to left");
		    if (disableRight) {
			disableRight = false;
			overlayRight.classList.remove("visible");
		    } // end of if
		    if (movedX >= 0) {
			differenceX = movedX - (movingX - initialTouchX);
			TweenMax.to(line, 0, {x: -1 * differenceX, ease: Power4.easeOut});
		    } else {
			overlayLeft.classList.remove("visible");
		    } // end of else
		} // end of else
		return differenceX;
	    }); // end of touchmove event
	    lineWrapper.addEventListener("touchend", function (event) {
		movedX = differenceX;
		//console.log("Moved X:", movedX);
	    }); // end of touchend event
	}); // end of touchstart event
    } // end of else
}); // end of DOMContentLoaded function