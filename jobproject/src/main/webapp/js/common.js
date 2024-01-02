$(document).ready(function() {
	$('ul.main_content_list li').click(function() {
		$('ul.main_content_list li.clicked').removeClass('clicked');
		$(this).addClass('clicked');

		// 클릭된 li 태그의 data-section 속성 값을 가져옴
		var section = $(this).attr('data-section');

		// 해당 섹션으로 부드럽게 스크롤링
		$('html, body').animate({
			scrollTop: $('#' + section).offset().top
		}, 'slow');
	});


	$('ul.main_content_list_float li').click(function() {
		$('ul.main_content_list_float li.clicked').removeClass('clicked');
		$(this).addClass('clicked');

		// 클릭된 li 태그의 data-section 속성 값을 가져옴
		var section = $(this).attr('data-section');

		// 해당 섹션으로 부드럽게 스크롤링
		$('html, body').animate({
			scrollTop: $('#' + section).offset().top
		}, 'slow');
	});


});


/*$(document).ready(function() {
	$(window).scroll(function(event) {
		var scrollHeight = $(this).scrollTop();
		console.log("현재 스크롤 위치:", scrollHeight);
	});
});*/

$(document).ready(function() {
	$(window).scroll(function(event) {
		var scrollHeight = $(this).scrollTop();
		if (scrollHeight >= 190) {
			$('.main_content_list_float').show(); // 스크롤 높이가 250 이상이면 보이기
		} else {
			$('.main_content_list_float').hide(); // 그 외에는 숨기기
		}
	});
});



