
$(document).ready(function(){
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
		$(this).parent().parent().parent().find(".detail_issue").show(300);
		$(this).hide();
		$(this).parent().find('.icon_top').show();
	});
	$(".icon_top").click(function(){
		$(this).parent().parent().parent().find(".detail_issue").hide(300);
		$(this).hide();
		$(this).parent().find('.icon_down').show();
	});

	$(".open_file").click(function(){
		$(this).parent().parent().parent().parent().find(".file").show(300);
		$(this).parent().parent().parent().parent().find(".comment").hide();
		$(this).parent().addClass("background_d");
		$(this).parent().parent().find('.open_comment').parent().removeClass("background_d");
	});

	$(".open_comment").click(function(){
		$(this).parent().parent().parent().parent().find(".file").hide();
		$(this).parent().parent().parent().parent().find(".comment").show(300);
		$(this).parent().addClass("background_d");
		$(this).parent().parent().find('.open_file').parent().removeClass("background_d");
	});

	$(".view_comment").click(function(){
		$(this).parent().parent().find(".comment ul li").show(300);
	});

	$(".view_file").click(function(){
		$(this).parent().parent().find(".file ul li").show(300);
	});

	$(".closed_issue").click(function(){
		$(this).parent().parent().parent().hide();
		$(this).parent().parent().parent().parent().find('.s2b_column_4').addClass("s2b_column_5");
		$(this).parent().parent().parent().parent().find('.open_sprint_closed').show();
	});

	$(".open_sprint_closed").click(function(){
		$(this).parent().find('.issue_closed').show();
		$(this).parent().find('.s2b_column_4').removeClass("s2b_column_5");
		$(this).hide();
	});

	$( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();

	// $( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).on( "sortstop", function( event, ui ) {
	// 	alert($(this).attr('class'));	
	// });

	// $( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).on( "sortstart", function( event, ui ) {
	// 	alert($(this).attr('class'));	
	// });

	// $( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).on( "sortchange", function( event, ui ) {
	// 	alert($(this).attr('class'));	
	// });

	// $( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable_backlog " ).on( "sortactivate", function( event, ui ) {
	// 	alert($(this).attr('class'));	
	// });

	// $( ".selector" ).on( "sortactivate", function( event, ui ) {} );

	$(".icon_backlog").click(function(){
		$(this).hide();
		$('.closed_backlog').show();
		$('.backlog').show(500);
		$(this).parent().parent().parent().find('.spint_total').addClass('width_75');
		$(this).parent().parent().parent().find('.spint_total').find('#issue_closed').hide();
		$(this).parent().parent().parent().find('.icon_config').hide();
		$(this).parent().parent().parent().find('.detail_issue').hide();
		$(this).parent().parent().parent().find('.spint_total').find('.s2b_column_4').addClass('width_33');
		$(this).parent().parent().parent().find('.content_issue').hide();	
	});
	
	$(".closed_backlog").click(function(){
		$(this).hide();
		$('.icon_backlog').show();
		$('.backlog').hide(500);
		$(this).parent().parent().parent().find('.spint_total').removeClass('width_75');
		$(this).parent().parent().parent().find('.spint_total').find('#issue_closed').show();
		$(this).parent().parent().parent().find('.spint_total').find('.s2b_column_4').removeClass('width_33');
		$(this).parent().parent().parent().find('.content_issue').show();
		$(this).parent().parent().parent().find('.content_issue').css("display","block");
		$(this).parent().find('.icon_config').show();
		$(this).parent().find('#issue_closed').find('.content_issue').hide();
	});

});
