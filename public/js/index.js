$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
	var location = window.location.href;
    var cur_url = '/' + location.split('/').pop();
 
    $('.navbar-nav li').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).addClass('active');
        }
    });
		$(".image").blowup({
				round : true,
				width : 200,
				height : 200,
				background : "#FFF",
				shadow : "0 8px 17px 0 rgba(0, 0, 0, 0.2)",
				border : "6px solid #FFF",
				cursor : true,
				zIndex : 999999,
				scale : 0.6,
				customClasses : "",
		});
		/*var a = document.forms['Form'].name.value;
    var b = document.forms['Form'].email.value;
    var c = document.forms['Form'].text.value;
    
		$(".b").click(function(){
			if ($('#name').val() && $('#email').val() && $('#text').val()){
				
				if (confirm("Вы действительно хотите отправить форму?")) {
						return true;
				} else {
						return false;
				}
			}
				else{
					
				}
				
			//$("#exampleModal").modal("show");}
	});*/
		$('.button[filter]').click(function(){
			if($(this).attr('val')=='off'){
					$('.button[filter]').attr('val','off').removeClass('focused');
					$(this).attr('val', 'on').addClass('focused');
					$('.filter > div').hide(300);
					$('.filter > div[filter='+ $(this).attr('filter')+']').show(300);
					if($(this).attr('filter')=='all'){
							 $('.button[filter]').attr('val','off').removeClass('focused');
							 $(this).attr('val','on').addClass('focused');
							 $('.filter > div').show(300);
					}
			}
	});


    
		$(".b").click(function(){
			if ($('#name').val() && $('#email').val() && $('#text').val()){
				
				if (confirm("Вы действительно хотите отправить форму?")) {
					
						return true;
						
				} else {
						return false;
				}
			}
				else{
					alert("Не все поля заполнены!");
				}
	});
	/*const btn = document.getElementById('btn');
	btn.addEventListener('click', function handleClick(event) {
		// 👇️ if you are submitting a form
		event.preventDefault();
	
		const inputs = document.querySelectorAll('#name, #email');
	
		inputs.forEach(input => {
			input.value = '';
		});
	});*/
  
});
