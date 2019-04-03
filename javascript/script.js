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
