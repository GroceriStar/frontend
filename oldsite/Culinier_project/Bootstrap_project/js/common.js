
$(document).ready(function() {
	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".main-menu_button").click(function(){
		$(".main-menu ul").slideToggle();
	});
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "mail.php",
	// 		data: $("form").serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.fancybox.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

		 $('#flip').click(function () {
	        $('.blog').toggle();
	    });
		 $('#flip1').click(function () {
	        $('.links').toggle();
	    });
		  $('#flip2').click(function () {
	        $('.email-subscription').toggle();
	    });
		  $('#flip3').click(function () {
	        $('.roll').toggle();
	    });
		$('#flip4').click(function () {
	        $('.news').toggle();
	    });

});
$(document).ready(function () {
   $('#feedback').validate({
      showErrors: function (errorMap, errorList) {
          var elements = $(this.currentForm).find('input, textarea');
          if (errorList.length > 0) {
              $.each(elements, function () {
                  $(this).css('box-shadow', '');
                  $(this).css('-moz-box-shadow', '');
                  $(this).css(' -webkit-box-shadow', '');
              });
          }

          errorList.forEach(function (element) {
              $(element.element).css('box-shadow', '0 0 2px 2px #f00');
              $(element.element).css('-moz-box-shadow', '0 0 2px 2px #f00');
              $(element.element).css(' -webkit-box-shadow', '0 0 2px 2px #f00');
          });

          return false;
      },
      onfocusout: false
  });
});
