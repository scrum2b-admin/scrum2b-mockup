
$(document).ready(function(){
	
	check_height_max();

	$( "#accordion" ).accordion();

	$(".icon_down").click(function(){
		$(this).hide();
		$(this).parent().parent().parent().addClass('normal_mode');
		$(this).parent().parent().parent().removeClass('small_mode');
		$(this).parent().find('.icon_top').show();
	});

	$(".icon_top").click(function(){
		$(this).hide();
		$(this).parent().parent().parent().removeClass('normal_mode');
		$(this).parent().parent().parent().addClass('small_mode');
		$(this).parent().find('.icon_down').show();
	});

	$(document).click(function(e){ 
		$('.setting').hide();
		e.stopPropagation();
	});

	$('.setting').on('click',function(){
		$(this).show();
	})

	$(".icon_config").click(function(e){
		$('.setting').hide();
		$(this).parent().parent().find(".setting").toggle();
		e.stopPropagation();
	});

	$(".open_file").click(function(){
		$(this).parent().parent().parent().parent().find(".file").show();
		$(this).parent().parent().parent().parent().find(".comment").hide();
		$(this).parent().addClass("background_d");
		$(this).parent().parent().find('.open_comment').parent().removeClass("background_d");
	});

	$(".open_comment").click(function(){
		$(this).parent().parent().parent().parent().find(".file").hide();
		$(this).parent().parent().parent().parent().find(".comment").show();
		$(this).parent().addClass("background_d");
		$(this).parent().parent().find('.open_file').parent().removeClass("background_d");
	});

	$(".view_comment").click(function(){
		$(this).parent().parent().find(".comment ul li").show();
	});

	$(".view_file").click(function(){
		$(this).parent().parent().find(".file ul li").show();
	});

	$(".closed_issue").click(function(){
		$('.content').removeClass('full_mode');
		$('.content').addClass('basic_mode');
		$('.content').find('.s2b_column_4').addClass("s2b_column_5");
		check_height_max();
	});

	$(".open_sprint_closed").click(function(){
		$('.content').removeClass('basic_mode');
		$('.content').addClass('full_mode');
		$('.content').find('.s2b_column_4').removeClass("s2b_column_5");
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();

	$( "#sortable1, #sortable2, #sortable3, #sortable4 " ).on( "sortout", function( event, ui ) {	
		$('.content').find('.hide_backlog').find('.content_issue').show();
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4 " ).on( "sortover", function( event, ui ) {
		$(this).parent().addClass('background_d');
		check_height_max();
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4 " ).on( "sortout", function( event, ui ) {
		$(this).parent().removeClass("background_d");
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4 " ).on( "sortstop", function( event, ui ) {
		check_height_max();
	});

	function check_height_max(){
		$(".check_height").css("min-height","auto");
		var height1 =	$("#sortable1").height();
		var height2 =	$("#sortable2").height();
		var height3 =	$("#sortable3").height();
		var height4 =	$("#sortable4").height();
		var array_height = [height1, height2, height3, height4];
		var max_height = Math.max.apply(Math, array_height);
 		$(".check_height").css("min-height",max_height);
	}

	$(".icon_backlog").click(function(){
		$(this).hide();
		$('.s2b_column_4').removeClass('hide_backlog');
		$('.closed_backlog').show();
		$('.content').removeClass('full_mode');
		$('.content').addClass('backlog_mode');
		$('.sprint_total').addClass('width_75');
		$('.issue').removeClass('small_mode');
		$('.issue').addClass('mini_mode');
		$('.sprint_total').find('.s2b_column_4').addClass('width_33');
		$('.add_new_issue').hide();
		check_height_max();
	});

	$(".closed_backlog").click(function(){
		$(this).hide();
		$('.s2b_column_4').addClass('hide_backlog');
		$('.icon_backlog').show();
		$('.content').removeClass('backlog_mode');
		$('.content').addClass('full_mode');
		$('.content').find('.sprint_total').removeClass('width_75');
		$('.content').find('.sprint_total').find('.s2b_column_4').removeClass('width_33');
		$('.issue').removeClass('mini_mode');
		$('.issue').addClass('small_mode');
		$('.add_new_issue').hide();
		check_height_max();
	});

	$(".icon_add_issue").click(function(){
		$(this).parent().parent().find('.add_new_issue').show();
	});
	
	$(".cancel_issue").click(function(){
			$(this).parent().parent().parent().parent().parent().parent().hide();
	});

	$(function() {
    $( ".add_new_issue .begin, .add_new_issue .end " ).datepicker();
  });

	$(window).scroll(function() {
    if($('.backlog').offset().top - $(window).scrollTop() > 0){
    	if( $('#accordion').offset().top - $(window).scrollTop() > 0){
    		$('.backlog').addClass('absolute_backlog');
    		$('.backlog').removeClass('fixed_backlog');
    	}else{
    		$('.backlog').addClass('fixed_backlog');
    		$('.backlog').removeClass('absolute_backlog');
    	}
	  } else {
	  	if( $('#accordion').offset().top - $(window).scrollTop() < 0){
    		$('.backlog').addClass('fixed_backlog');
    		$('.backlog').removeClass('absolute_backlog');
    	}else{
    		$('.backlog').addClass('absolute_backlog');
    		$('.backlog').removeClass('fixed_backlog');
    	}
	  } 
	});

});
