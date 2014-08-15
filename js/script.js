
$(document).ready(function(){

	$( "#accordion" ).accordion({ animate: 180, collapsible: true, heightStyle: "auto", cancel: "a,button" });

	check_height_max();

	$('.title_sprint').on('click',function(){
		$('.sprint').removeClass('sprint-active');
		$(this).next().addClass('sprint-active');
		check_height_max();
	})

	//progess issue
	$( ".slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      step: 10,
      value: 0,
      slide: function( event, ui ) {
        $(this).parent().parent().find( ".amount" ).val( ui.value );
      }
    });
  $( ".amount" ).val( $( ".slider-vertical" ).slider( "value" ) );

	$(document).click(function(e){ 
		$('.select_progess_issue').hide();
		e.stopPropagation();
	});

	$('.select_progess_issue').on('click',function(){
		$(this).show();
	})

	$(".value_progess").click(function(e){
		$('.select_progess_issue').hide();
		$(this).parent().find('.select_progess_issue').toggle();
		e.stopPropagation();
	});

	// show hide setting
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

	$(".icon_down").click(function(){
		$(this).hide();
		$(this).parent().parent().parent().addClass('normal_mode');
		$(this).parent().parent().parent().removeClass('small_mode');
		$(this).parent().find('.icon_top').show();
		check_height_max();
	});

	$(".icon_top").click(function(){
		$(this).hide();
		$(this).parent().parent().parent().removeClass('normal_mode');
		$(this).parent().parent().parent().addClass('small_mode');
		$(this).parent().find('.icon_down').show();
		check_height_max();
	});

	$(".open_file").click(function(){
		$(this).parent().parent().parent().parent().find(".file").toggle();
		$(this).parent().parent().parent().parent().find(".comment").hide();
		$(this).parent().toggleClass("background_d");
		$(this).parent().parent().find('.open_comment').parent().removeClass("background_d");
		check_height_max();
	});

	$(".open_comment").click(function(){
		$(this).parent().parent().parent().parent().find(".file").hide();
		$(this).parent().parent().parent().parent().find(".comment").toggle();
		$(this).parent().toggleClass("background_d");
		$(this).parent().parent().find('.open_file').parent().removeClass("background_d");
		check_height_max();
	});

	$(".view_comment").click(function(){
		$(this).parent().parent().find(".comment ul li").show();
		check_height_max();
	});

	$(".view_file").click(function(){
		$(this).parent().parent().find(".file ul li").show();
		check_height_max();
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

	$( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).on( "sortover", function( event, ui ) {
		$(this).parent().addClass('background_d');
		$('.ui-sortable-helper').addClass('move_issue');
		a = $(this).attr('class');
		if ($('.location_start_issue').length == 0 ) {
			$("<div class='location_start_issue'></div>").insertAfter(".move_issue");
		};
		check_height_max();
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4 " ).on( "sortout", function( event, ui ) {
		$(this).parent().removeClass("background_d");
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog  " ).on( "sortstop", function( event, ui ) {
		 $( ".location_start_issue" ).remove();
		check_height_max();
	});
	
	$( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).on( "sortbeforestop", function( event, ui ) {
		$('.move_issue').removeClass('move_issue');
	});
	
	function check_height_max(){
		$(".sprint-active .check_height").css("height","auto");
		var height1 =	$(".sprint-active #sortable1").height();
		var height2 =	$(".sprint-active #sortable2").height();
		var height3 =	$(".sprint-active #sortable3").height();
		var height4 =	$(".sprint-active #sortable4").height();
		var array_height = [height1, height2, height3, height4];
		var max_height = Math.max.apply(Math, array_height);
 		$(".sprint-active .check_height").css("height",max_height);
	}

	$(".icon_backlog").click(function(){
		$(this).hide();
		$('.s2b_column_4').removeClass('hide_backlog');
		$('.closed_backlog').show();
		$('.content').removeClass('full_mode');
		$('.content').removeClass('basic_mode');
		$('.content').addClass('backlog_mode');
		$('.sprint_total').addClass('width_75');
		$('.issue').removeClass('small_mode');
		$('.issue').removeClass('normal_mode');
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
		$('.content').find('.sprint_total').find('.s2b_column_4').removeClass('s2b_column_5');
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

  $(document).click(function(e){ 
		$('.select_assign').hide();
		e.stopPropagation();
	});

	$('.select_assign').on('click',function(){
		$(this).show();
	})

	$(".assign").click(function(e){
		$('.select_assign').hide();
		$(this).parent().parent().find(".select_assign").toggle();
		e.stopPropagation();
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
