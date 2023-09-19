// gnb
$('.hammenu img').click(() => {
    if ($('.gnb_menu').css('left') === '0px') {
        $('.gnb_menu').css({ left: '-340px' });
        $('.hammenu').css({left : 0});
        $('.hammenu img').attr('src', './images/icon/menu_mark.png');
    } else if ($('.gnb_menu').css('left') === '-340px') {
        $('.gnb_menu').css({ left: 0 });
        $('.hammenu').css({left : '260px'});
        $('.hammenu img').attr('src', './images/icon/menu_close.png');
    }
});

// 오늘 하루 그만보기
$('.close').click(()=>{
    $('.top_fixed').hide();
    // $('#wrap').css({paddingTop:"34px"});
    $('.gnb_box h2').css({top:0});
})
// a태그 막기
$("a[href='#']").click(function(e) {
    e.preventDefault();
});

$(window).resize(() => {
    const windowHeight = $(window).height();
    $('.gnb_menu').css({ height: windowHeight });
});

$(window).scroll(() => {
    const scrollPosition = $(window).scrollTop();
    const gnbMenu = $('.gnb_menu');
    const hammenu = $('.hammenu');
    if (scrollPosition > 0) {
        gnbMenu.addClass('fixed');
        hammenu.addClass('fixed');
    } else {
        gnbMenu.removeClass('fixed');
        hammenu.removeClass('fixed');
    }
});



$('.mov_container h3').hide();
$('.mov1').show();

$('.mov_list p').click(function() {
    var index = $(this).index();
    $('.mov_container h3').hide();
    $('.mov_container h3:eq(' + index + ')').show();
    $(this).addClass('mov_selected').siblings().removeClass('mov_selected');
});
$('.gallery_box span').click(function(){
    var imageUrl = $(this).siblings('img').attr('src');
    showModal(imageUrl);
});
$('#modal').click(function(event) {
    if (event.target === this) {
        closeModal();
    }
});
function showModal(imageUrl) {
    $('#modal-image').attr('src', imageUrl);
    $('#modal').fadeIn();
    $('.gallery_close').fadeIn();
}

$('.gallery_close').click(function() {
    closeModal();
});
// 이미지 바깥영역 클릭시 모달창 종료
function closeModal() {
    $('#modal').fadeOut();
    $('.gallery_close').fadeOut();
}

// 모든 이미지 요소 가져오기
var currentIndex = 0;
var images = $('.gallery_box img');

$('.img_btn img').click(function() {
    var btnType = $(this).attr('alt');

    if (btnType === 'prev_btn') {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
    } else if (btnType === 'next_btn') {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
    }

    var clickedImageOrder = currentIndex + 1;
    console.log("클릭한 이미지 순서: " + clickedImageOrder);

    var imageUrl = images.eq(currentIndex).attr('src');
    showModal(imageUrl);
});

$('.gallery_box span').click(function() {
    currentIndex = $(this).siblings('img').index('.gallery_box img');
    var clickedImageOrder = currentIndex + 1;

    console.log("클릭한 이미지 순서: " + clickedImageOrder);

    var imageUrl = $(this).attr('src');
    showModal(imageUrl);
});

console.log($('.gallery_box img').length);

