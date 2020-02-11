
	function openNav() {
	  document.getElementById("myNav").style.width = "100%";
	}

	function closeNav() {
	  document.getElementById("myNav").style.width = "0%";
	}


	jQuery('.slide-carousel').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout:3000,
            dotsSpeed: 800,
            responsiveClass: true,
            mouseDrag:false,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
					loop: true,
					dots:true
                },
                600: {
                    items: 1,
                    nav: true,
					loop: true,
					dots:true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    dots:true
                }
            }
        });

	jQuery('.slide-carousel').on('translate.owl.carousel', function () {
            $('.this-item h2').removeClass('fadeInUp animated').hide();
            $('.this-item h3').removeClass('fadeInUp animated').hide();
            $('.this-item p').removeClass('fadeInUp animated').hide();
        });

        jQuery('.slide-carousel').on('translated.owl.carousel', function () {
            $('.this-item h2').addClass('fadeInUp animated').show();
            $('.this-item h3').addClass('fadeInUp animated').show();
            $('.this-item p').addClass('fadeInUp animated').show();
        });


        $("#myNav  a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset( ) .top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});
	 $(".navbar ul  a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

	 $("#header  a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

	 // Animation in animate.css
		new WOW().init();
	  
		$('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
        });


      ///scrolltop
		jQuery(".top").click(function(){
			jQuery("html").animate({'scrollTop' : 0 }, 1000);
				return false;
			});
		jQuery(window).scroll(function(){
			var durotto = jQuery(window).scrollTop();
				if(durotto > 200){
					jQuery(".top").slideDown();
				}
				else {
					jQuery(".top").slideUp();		
				}
		});

		
     
      $("#owl-demo").owlCarousel({
      	autoplay:true,
      	autoplaySpeed:500,
        dotsSpeed:500,
        items:5,
        dotsEach:true,
        loop:true,
        responsiveClass: true,
			responsive:{
				0:{
					items: 1,
					nav: false,
					dots: true,
					loop:true
				},
				400:{
					items: 2,
					
					loop:true
				},
				768:{
					items: 3,
					
					loop:true
				},
				1000:{
					items: 5,
					
					loop:true
				}
			}
      });
      