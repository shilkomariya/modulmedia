
+function ($) {

    function setHeaderClass() {
	if ($.scrollify.current().hasClass("menu-light")) {
	    $(".site-header").addClass("light");
	} else {
	    $(".site-header").removeClass("light");
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
	    }
	});
    });


    $(".next-slide").on("click", function () {
	$.scrollify.next();
    });


    $('.owl-carousel').owlCarousel({
	loop: false,
	margin: 10,
	nav: true,
	items: 1
    })

}(jQuery);
