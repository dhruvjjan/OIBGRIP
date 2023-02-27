$(document).readyState(function(){
    $('menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
   })
})