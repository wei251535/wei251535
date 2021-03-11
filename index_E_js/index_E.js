window.onload = function() { 
    var a = document.body.offsetWidth; //網頁顯示範圍不含滾軸
    var b = window.innerWidth; //瀏覽器範圍含滾軸
        b = b-17;
        if (b > 1920) {
            var c = (b - a) / 2;
            $('#navbar').css('right', c);
        }
  };

$('#burger').click(function () {
    var a = window.innerWidth;
    var b = window.innerHeight; //抓取網頁可見高度

    if (a > 920) {
        $('#navbar').toggleClass('active');
    } else {
        $('#navbar').toggleClass('active_920');
    }

    if(a <= 920 && $('#navbar').hasClass('active_920')){
        $('#divul').css('transform', 'translateY(0%)');
    }
    if(a > 920 && $('#navbar').hasClass('active')){
        $('#divul').css('transform', 'translateX(-50%)');
    }
    if (a <= 920 && $('#navbar').hasClass('')) {
        $('#divul').css('transform', 'translate(0,-100%)');
    }

    if ($('#burger>img').attr('src') == './index_E_img/burger.svg') {
        $('#burger>img').attr('src', './index_E_img/櫻花-10.png');
        $('#burger_cover').css('display','none');
        $('#menu_container').css('opacity', '1');
        $('#navbar_logo').css('opacity', '1');
        $('#nav_allfont').css('opacity', '1');
        $('#backtogo').css('display', 'none');
    } else {
        $('#burger>img').attr('src', './index_E_img/burger.svg');
        $('#burger_cover').css('display','block');
        $('#menu_container').css('opacity', '0');
        $('#navbar_logo').css('opacity', '0');
        $('#nav_allfont').css('opacity', '0');
        $('#backtogo').css('display', 'block');
        if (a <= 920) {
            $('#backtogo').css('display', 'none');
        }
    }
});

// 判斷手機方向：
//     window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
//         // if (window.orientation === 180 || window.orientation === 0) {
            
//         // }
//         if (window.orientation === 90 || window.orientation === -90 ){
//             console.log(123);
//             $('#nav_allfont').css('opacity','0');
//         }
//      }, false);



$('#backtogo').click(function () {
$(window).scrollTop(0);
})

jQuery(document).ready(function () {

$(window).resize(function (e) {
    var b = window.innerHeight; //抓取網頁可見高度
    var a = window.innerWidth;   //含滾軸

    if(b > 930 && $('#navbar').hasClass('active')){
        $('#nav_allfont').css('opacity','1');
    }
    if(b <= 770 && $('#navbar').hasClass('active_920')){
        $('#nav_allfont').css('opacity','1');
    }
    if(a <= 920 && $('#navbar').hasClass('')){
        $('#divul').css('transform', 'translateY(-100%)');
    }
    
    if(a > 920 && $('#navbar').hasClass('active')){
        $('#backtogo').css('display', 'none');
    }
    if(a > 920){
        $('#backtogo').css('display', 'none');
    }
    if(a <= 920 && $('#navbar').hasClass('')){
        $('#backtogo').css('display', 'none');
    }
    if(a <= 920){
        $('#backtogo').css('display', 'none');
    }
    if(a > 920 && $('#navbar').hasClass('')){
        $('#backtogo').css('display', 'block');
    }
    if (a > 920 && $('#navbar').hasClass('active_920')) {
        $('#navbar').removeClass('active_920');
        $('#navbar').addClass('active');
        $('#nav_allfont').css('opacity','1');
        $('#divul').css('transform', 'translateX(-50%)');
    }
    if (a <= 920 && $('#navbar').hasClass('active')) {
        $('#navbar').removeClass('active');
        $('#navbar').addClass('active_920');
        $('#backtogo').css('display', 'none');
        $('#nav_allfont').css('opacity','1');
        $('#divul').css('transform', 'translate(0,0)');
        
    }

    resize();
});

function resize() {
    var a = document.body.offsetWidth; //網頁顯示範圍不含滾軸
    var b = window.innerWidth; //瀏覽器範圍含滾軸
    b = b-17;
    
    if (b > 1920) {
        var c = (b - a) / 2;
        $('#navbar').css('right', c);
    }
    if (b <= 1920) {
        $('#navbar').css('right', 0);

    }
}
}); 