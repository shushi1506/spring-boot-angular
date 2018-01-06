$(function() {
    var d=1000;
    $('#menu span').each(function(){
        $(this).stop().animate({
            'top':'-11px'
        },d+=250);
    });

    $('#menu > li').hover(
        function () {
            var $this = $(this);
            $('a',$this).addClass('hover');
            $('span',$this).stop().animate({'top':'50px'},300).css({'zIndex':'10'});
        },
        function () {
            var $this = $(this);
            $('a',$this).removeClass('hover');
            $('span',$this).stop().animate({'top':'-11px'},800).css({'zIndex':'-1'});
        }
    );
});