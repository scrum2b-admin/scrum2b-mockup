
$(document).ready(function(){
	check_height_max();
	$(document).click(function(e){ 
		$('.setting').hide();
		e.stopPropagation();
	});

	$( "#accordion" ).accordion();

	$('.setting').on('click',function(){
		$(this).show();
	})

	$(".icon_config").click(function(e){
		$('.setting').hide();
		$(this).parent().parent().find(".setting").toggle();
		e.stopPropagation();
	});

	$(".title_sprint").click(function(){
		$(this).parent().find(".sprint_1").toggle();	
	});

	$(".icon_down").click(function(){
		$(this).parent().parent().parent().find(".detail_issue").show();
		$(this).hide();
		$(this).parent().find('.icon_top').show();
		check_height_max();

	});
	$(".icon_top").click(function(){
		$(this).parent().parent().parent().find(".detail_issue").hide();
		$(this).hide();
		$(this).parent().find('.icon_down').show();
		check_height_max();
	});

	$(".open_file").click(function(){
		$(this).parent().parent().parent().parent().find(".file").show();
		$(this).parent().parent().parent().parent().find(".comment").hide();
		$(this).parent().addClass("background_d");
		$(this).parent().parent().find('.open_comment').parent().removeClass("background_d");
		check_height_max();
	});

	$(".open_comment").click(function(){
		$(this).parent().parent().parent().parent().find(".file").hide();
		$(this).parent().parent().parent().parent().find(".comment").show();
		$(this).parent().addClass("background_d");
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
		$(this).parent().parent().parent().hide();
		$(this).parent().parent().parent().parent().find('.s2b_column_4').addClass("s2b_column_5");
		$(this).parent().parent().parent().parent().find('.open_sprint_closed').show();
		check_height_max();
	});

	$(".open_sprint_closed").click(function(){
		$(this).parent().find('.issue_closed').show();
		$(this).parent().find('.s2b_column_4').removeClass("s2b_column_5");
		$(this).hide();
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();

	$( "#sortable1, #sortable2, #sortable3, #sortable4 " ).on( "sortout", function( event, ui ) {	
		$(this).parent().parent().parent().find('.s2b_column_3').find('.content_issue').hide();
		$(this).parent().parent().parent().find('.s2b_column_3').find('.detail_issue').hide();
		$(this).parent().parent().parent().find('.hide_backlog').find('.content_issue').show();
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4 " ).on( "sortover", function( event, ui ) {
		$(this).parent().addClass('background_d');
		check_height_max();
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4 " ).on( "sortout", function( event, ui ) {
		$(this).parent().removeClass("background_d");
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).on( "sortstop", function( event, ui ) {
		check_height_max();
	});

	function check_height_max(){
		$(".connectedSortable").css("min-height","auto");
		var height1 =	$("#sortable1").height();
		var height2 =	$("#sortable2").height();
		var height3 =	$("#sortable3").height();
		var height4 =	$("#sortable4").height();
		var array_height = [height1, height2, height3, height4];
		var max_height = Math.max.apply(Math, array_height);
 		$(".connectedSortable").css("min-height",max_height);
	}

	$(".icon_backlog").click(function(){
		$('.s2b_column_4').removeClass('hide_backlog');
		$(this).hide();
		$('.closed_backlog').show();
		$('.backlog').show(500);
		$('.spint_total').addClass('width_75');
		$('#issue_closed').hide();
		$('.icon_config').hide();
		$('.detail_issue').hide();
		$('.spint_total').find('.s2b_column_4').addClass('width_33');
		$('.content_issue').hide();	
		$('.open_sprint_closed').hide();
		check_height_max();
	});
	
	$(".closed_backlog").click(function(){
		$('.s2b_column_4').addClass('hide_backlog');
		$(this).hide();
		$('.icon_backlog').show();
		$('.backlog').hide(500);
		$(this).parent().parent().parent().find('.spint_total').removeClass('width_75');
		$(this).parent().parent().parent().find('.spint_total').find('#issue_closed').show();
		$(this).parent().parent().parent().find('.spint_total').find('.s2b_column_4').removeClass('width_33');
		$(this).parent().parent().parent().find('.content_issue').show(); 	
		$(this).parent().find('.icon_config').show();
		$(this).parent().find('#issue_closed').find('.content_issue').hide();
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
});
