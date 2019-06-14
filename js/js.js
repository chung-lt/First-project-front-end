// $(document).ready(function(){
// 	$('body').scrollspy({ target: '.navbar-exp' });
// 	alert($('body').scrollTop())
// 	if($().scrollTop() > 30){
// 		console.log($(window).scrollTop())
// 		$('navbar').css('backgroud','#777');
// 	}
// });
// 
$(document).ready(function(){
    $(window).scroll(function(){
    	if($(window).scrollTop() > "30"){
    		
    		$('.navbar-default').css('background',"black");
    		$(".navbar-default").css("top","0px");
		}
		if($(window).scrollTop() <= "30"){
				
		    	$('.navbar-default').css('background',"rgba(0,0,0,0)");
		    	$(".navbar-default").css('top',"26px");
		    }
		if($(window).scrollTop() >= "300"){
			$(".back-to-top").css("display","block");
		}
		if($(window).scrollTop() < "300"){
			$(".back-to-top").css("display","none");
		}
    });
    $("#angle-down").mouseover(function(){
    	$('.down-angle').animate({top:"10px"},300)
    });
    $("#angle-down").mouseout(function(){
    	$('.down-angle').animate({top:"0px"},300)
    });
    window.setInterval(function(){
    var x=$("#business_change");
    var text=x.html();
    if(text=="SERVICES") x.html("TEMPLATE");
    else if(text=="TEMPLATE") x.html("SOLUTION");
    else x.html("SERVICES");
    },1500);
        var $lightbox = $('#lightbox');
    
    // $('[data-target="#lightbox"]').on('click', function(event) {
    //     var $img = $(this).find('img'), 
    //         src = $img.attr('src'),
    //         alt = $img.attr('alt'),
    //         css = {
    //             'maxWidth': $(window).width() - 100,
    //             'maxHeight': $(window).height() - 100
    //         };
    
    //     $lightbox.find('.close').addClass('hidden');
    //     $lightbox.find('img').attr('src', src);
    //     $lightbox.find('img').attr('alt', alt);
    //     $lightbox.find('img').css(css);
    // });
    
    // $lightbox.on('shown.bs.modal', function (e) {
    //     var $img = $lightbox.find('img');
            
    //     $lightbox.find('.modal-dialog').css({'width': $img.width()});
    //     $lightbox.find('.close').removeClass('hidden');
    // });
    $('#submit').click(function(){
     	var email = $('#email').val();
     	if(email== ''){
            $('#email').next().show();
            $("#notify-check-email").text('Check if all fields are filled in!');
        }
        else if(IsEmail(email)==false){
            $("#notify-check-email").text('Check if all fields are filled in!');
        }
        else{
        	$("#notify-check-email").text('You Are Signed Up!');
        	$('#email').val(' ');
        }
     });
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
           return false;
        }else{
           return true;
        }
    }


    $("#submit-contact").click(function() {
    	var name = $('#name_contact').val();
    	var phone = $('#phone_contact').val();
    	var email2 = $('#email_contact').val();
    	var mess = $('#message_contact').val();
    	if(name == '' || phone =='' || email2 =='' || mess =='' ){
    		$('#notify_contact').text("Check if all fields are filled in!");
    	}
    	else if(IsEmail(email2)==false){
            $("#notify-contact").text('Check if all fields are filled in!');
        }
        else{
        	$("#notify-contact").text('Message Submitted!');
        	$('#name_contact').val(' ');
        	$('#phone_contact').val(' ');
        	$('#email_contact').val(' ');
        	$('#message_contact').val(' ');
        }
    });






   	$("#hom").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#head").offset().top
    	}, 1000);
	});
	$(".navbar-brand").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#head").offset().top
    	}, 1000);
	});

	$("#solu").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#solutions").offset().top
    	}, 1000);
	});
	$(".sulutions_btn").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#solutions").offset().top
    	}, 1000);
	});
	$("#prod").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#products").offset().top
    	}, 1000);
	});
	$("#down-to-solutions").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#solutions").offset().top
    	}, 1000);
	});
	$("#pric").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#pricing").offset().top
    	}, 1000);
	});
	$("#proj").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#projects").offset().top
    	}, 1000);
	});
	$("#abou").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#about").offset().top
    	}, 1000);
	});
	$("#tea").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#team").offset().top
    	}, 1000);
	});
	$("#cont").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#contact").offset().top
    	}, 1000);
	});
	$(".back-to-top").click(function() {
    	$('html, body').animate({
       	scrollTop: $("#head").offset().top
    	}, 1000);
	});
	 var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });   
});