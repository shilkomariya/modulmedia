!function (t) {
    t.fn.samesizr = function (i) {
	var e = t.extend({mobile: 767}, i), n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (this.css("height", "auto"), n > e.mobile) {
	    var h = 0;
	    this.each(function () {
		h = Math.max(h, t(this).outerHeight())
	    }).css("height", h)
	}
	return this
    }
}(jQuery);

(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       can accounts for vertical position, horizontal, or both
     */
    var $w = $(window);
    $.fn.visible = function (partial, hidden, direction, container) {

	if (this.length < 1)
	    return;

	// Set direction default to 'both'.
	direction = direction || 'both';

	var $t = this.length > 1 ? this.eq(0) : this,
		isContained = typeof container !== 'undefined' && container !== null,
		$c = isContained ? $(container) : $w,
		wPosition = isContained ? $c.position() : 0,
		t = $t.get(0),
		vpWidth = $c.outerWidth(),
		vpHeight = $c.outerHeight(),
		clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

	if (typeof t.getBoundingClientRect === 'function') {

	    // Use this native browser method, if available.
	    var rec = t.getBoundingClientRect(),
		    tViz = isContained ?
		    rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
		    rec.top >= 0 && rec.top < vpHeight,
		    bViz = isContained ?
		    rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
		    rec.bottom > 0 && rec.bottom <= vpHeight,
		    lViz = isContained ?
		    rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
		    rec.left >= 0 && rec.left < vpWidth,
		    rViz = isContained ?
		    rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left :
		    rec.right > 0 && rec.right <= vpWidth,
		    vVisible = partial ? tViz || bViz : tViz && bViz,
		    hVisible = partial ? lViz || rViz : lViz && rViz,
		    vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
		    hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

	    if (direction === 'both')
		return clientSize && vVisible && hVisible;
	    else if (direction === 'vertical')
		return clientSize && vVisible;
	    else if (direction === 'horizontal')
		return clientSize && hVisible;
	} else {

	    var viewTop = isContained ? 0 : wPosition,
		    viewBottom = viewTop + vpHeight,
		    viewLeft = $c.scrollLeft(),
		    viewRight = viewLeft + vpWidth,
		    position = $t.position(),
		    _top = position.top,
		    _bottom = _top + $t.height(),
		    _left = position.left,
		    _right = _left + $t.width(),
		    compareTop = partial === true ? _bottom : _top,
		    compareBottom = partial === true ? _top : _bottom,
		    compareLeft = partial === true ? _right : _left,
		    compareRight = partial === true ? _left : _right;

	    if (direction === 'both')
		return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
	    else if (direction === 'vertical')
		return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	    else if (direction === 'horizontal')
		return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
	}
    };

})(jQuery);

+function ($) {

    $(".site-header").fadeOut('fast');

    $("#main-menu-btn").on("click", function () {
	$(this).toggleClass('open');
	$('body').toggleClass('open-menu');
	$('.navigation').toggle();
    });

    $(".next-slide").on("click", function () {
	$.scrollify.next();
    });


    $('.owl-carousel').owlCarousel({
	loop: false,
	margin: 10,
	nav: false,
	dots: true,
	items: 1
    });
    /*
     $(window).on("load", function () {
     $('#software-1 video').each(function () {
     if ($(this).visible(true)) {
     $(this)[0].play();
     } else {
     $(this)[0].pause();
     }
     })
     });
     */
    $(window).on("load resize", function () {
	$('.equal-height').samesizr({
	    mobile: 767
	});
	$('.service .content').samesizr({
	    mobile: 767
	});
    });

    $(".video-wrp").hover(function () {
	$video = $(this).children("video")[0];
	$line = $(this).find(".progress .line");
	$video.play();
	$(this).addClass('hover');
	$video.ontimeupdate = function () {
	    $percentage = ($video.currentTime / $video.duration) * 100;
	    $line.css("width", $percentage + "%");
	};
    }, function () {
	var el = $(this).children("video")[0];
	el.pause();
	el.currentTime = 0;
	$(this).removeClass('hover');
    });

}(jQuery);
