$(window).load(function() {

	$(".top_description").animated("fadeInDown", "fadeInDown");
	$(".tabs_description .wrapper").animated("flipInY", "flipInY");
	$(".profi_item").animated("fadeInRight", "fadeInRight");
	$(".s_profi form").animated("zoomIn", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInUp", "fadeOut");

});

$(document).ready(function() {

	$(".popup").magnificPopup({type: "image"});
	$(".popup_c").magnificPopup();

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	var swiper = new Swiper('.swiper-container', {
			/*loop: true,*/
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});

	$(".top_phone .tab_item").not(":first").hide();
		$(".top_phone .wrapper .tab").click(function() {
			$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	$(".bottom_phone .tab_item").not(":first").hide();
		$(".bottom_phone .wrapper .tab").click(function() {
			$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

		$(".tabs_description .tab_item").not(":first").hide();
			$(".tabs_description .wrapper .tab").click(function() {
				$(".tabs_description .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
				$(".tabs_description .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

		$(".contacts_top_item").not(":first").hide();
			$(".contacts_top .tab").click(function() {
				$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
				$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("#form").submit(function(e) {
	// 	e.preventDefault;
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			var magnificPopup = $.magnificPopup.instance;
	// 			magnificPopup.close();
	// 		}, 1000);
	// 	});
	// });

	$("form").submit(function(event) {
      event.preventDefault();
      let th = $(this);
      let name = $(th.find("input[name='name']"));
      let phone = $(th.find("input[name='phone']"));
      let select = $(th.find("select[name='city']"));

      $.ajax({
          type: "POST",
          url: "mail.php",
          data: th.serialize()
      }).done(function() {
          alert("Спасибо за заявку!");
          setTimeout(function() {
              // Done Functions
              var magnificPopup = $.magnificPopup.instance;
							magnificPopup.close(),
							th.trigger("reset");
          }, 1000);
      });
		 });
	
});
