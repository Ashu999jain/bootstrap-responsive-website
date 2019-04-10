/*_________preloader___________________*/
$(window).on('load',function(){
	$('#status').fadeOut();
    $('#preloader').fadeOut();
});
/*______________________________________*/


$(function(){
$('#team-members').owlCarousel({
	items : 2,
	smartSpeed:700,
	loop :true,
	autoplay: true,
	autoplayHoverPause: true,
	nav: true,
	dots:false,
	navText: ['<i class="fa fa-angle-left"></i>' ,
	'<i class="fa fa-angle-right"></i>']

});
});

/*__________________wayout(jquery-plugin) method use of scroll in team section_______________________*/
$(function()
{

$('#progress-elements').waypoint(function(){
	$('.progress-bar').each(function(){
	$(this).animate({width:$(this).attr("aria-valuenow")+"%"
},1000);
});
	this.destroy();
},{
	offset:"bottom-in-view"
});
});
/*_____________________________________________________________________________________*/


/* service section part-02 using responsive-tabs(jquery plugins) we can use tabs in it */

$(function(){
$('#servies-tabs').responsiveTabs({
   animation: 'slide' 
});
});

/*________________________________________________________________*/



$(window).on('load',function(){
	//initialize isotope plugin
	$('#isotope-container').isotope({
   });
	// filter items on button click
$('#isotope-filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('#isotope-container').isotope({
      filter : filterValue
    });
  $('#isotope-filters').find('.active').removeClass('active');
  $(this).addClass('active');
});
}); 

/*  magnifing-popups jquery plugin added to add magnifing effect to our images*/

$(function(){
$('#portfolio-wrapper').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{   //scroll left right arrow is because of gallary feature on
  	enabled:true
  }
}); 
});

/*  testimonial section    */

$(function(){
$('#testimonial-slider').owlCarousel({
	items : 1,
	smartSpeed:700,
	loop :true,
	autoplay: true,
	autoplayHoverPause: true,
	nav: true,
	dots:false,
	navText: ['<i class="fa fa-angle-left"></i>' ,
	'<i class="fa fa-angle-right"></i>']
});
});

/*  Navbar   */

$(function () {

	workOnLoadTo();
//show white nav-bar
$(window).scroll(function (){
	 workOnLoadTo();

});
function workOnLoadTo(){
    if($(window).scrollTop()>50){
          $('nav').addClass('white-navbar');
		$('.navbar-brand img').attr("src" , "img/logo/logo-dark.png");
	}
	else
	{
		$('nav').removeClass('white-navbar');
        $('.navbar-brand img').attr("src" , "img/logo/logo.png");
	}
}

});

