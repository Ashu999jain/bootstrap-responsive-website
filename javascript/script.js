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

/*___________________________________________________________*/
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