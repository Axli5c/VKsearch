window.onscroll= function(){
	var scroll = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
	if (scroll<250){
		list();
		if(idblock>=all.length - 1){
			var end = document.getElementById('endlist');
			end.innerHTML='<h3> ничего не найдено</h3>';
		}

	}
}


    $(function() {
        var box = $('.input');

        var top = box.offset().top - parseFloat(box.css('marginTop').replace(/auto/, 0));
        $(window).scroll(function(){
            var windowpos = $(window).scrollTop();
            if(windowpos < top) {
                box.css('position', 'absolute');
                box.css('top', 0);
            } else {           	 
                box.css('position', 'fixed');
                box.css('top', 8);
                box.css('z-index', 9);               
                                
            }
        });
    });

     var top_show = 450; 
  var delay = 500; 
  $(document).ready(function() {
    $(window).scroll(function () { 
   
      if ($(this).scrollTop() > top_show) $('.up').fadeIn();
      else $('.up').fadeOut();
    });
    $('.up').click(function () { 
      
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });