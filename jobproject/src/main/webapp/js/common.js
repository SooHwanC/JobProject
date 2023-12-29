$(document).ready(function() {
    $('ul.main_content_list li').click(function() {
        $('ul.main_content_list li.clicked').removeClass('clicked');
        $(this).addClass('clicked');

        var index = $(this).index();
        // 섹션 ID와 리스트 인덱스 맞추기 (1부터 시작하는 섹션 인덱스)
        index += 1;

        var sectionTop = $('#section' + index).offset().top;
        $('html, body').animate({
            scrollTop: sectionTop
        }, 500);
    });
});
