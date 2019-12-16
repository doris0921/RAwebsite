
$("#book_click").click(function(){
    $('boddy,html').animate({
        scrollTop:$('#book_title').offset().top},800);
        return false;
});

$("#journal_click").click(function(){
    $('boddy,html').animate({
        scrollTop:$('#journal_title').offset().top},800);
        return false;
});