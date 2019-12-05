function centerHandler(){
var scrollDist=$(window).scrollTop();
var myTop=($(window).height()-$("#popWindow").height())/2+scrollDist;

var myLeft=($(window).width()-$("#popWindow").width())/2;

$("#popWindow").offset({top:myTop,left:myLeft});
centerHandler (); 
$(window).scroll(centerHandler); 
$(window).resize(centerHandler); 
}

$(".GoToTop").click(function(){
    $('boddy,html').animate({
        scrollTop:0},800);
        return false;
});