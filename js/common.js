jQuery(document).ready(function($) {
		$(".toggle-mnu").click(function() {
	 	$(this).toggleClass("on");
	  	$(".main-login").slideToggle();
	  	return false;
		});
 // Owl-Carousel
  	var owl = $(".new_item");
	owl.owlCarousel({
    itemsCustom : [
        [0, 1],
        [600, 2],
        [970, 3],
        [1190, 4]
      ]
	})
	// Custom Navigation Events
	$(".next").click(function(){
	owl.trigger('owl.next');
	})
	$(".prev").click(function(){
	owl.trigger('owl.prev');
	});


   // OWL_CAROUSEL-2
	var pop = $(".pop_item");
	pop.owlCarousel({
    itemsCustom : [
        [0, 1],
        [600, 2],
        [970, 3],
        [1190, 4]
      ]
	})
	// Custom Navigation Events
	$(".pop_next").click(function(){
	pop.trigger('owl.next');
	})
	$(".pop_prev").click(function(){
	pop.trigger('owl.prev');
	});

	//OWL-CAROUSEL-3
	var book = $(".look_img");
	book.owlCarousel({
	itemsCustom : [
        [0, 1],
        [450, 2],
        [600, 3],
        [920, 4]
      ]
	})
	// Custom Navigation Events
	$(".look_next").click(function(){
	book.trigger('owl.next');
	})
	$(".look_prev").click(function(){
	book.trigger('owl.prev');
	});


});
