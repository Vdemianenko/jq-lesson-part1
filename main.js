jQuery (function ($) {
    $('.button1').click(function () {
        $(this).addClass('blinkbut')
    });
    $('.button2').click(function () {
        $(this).removeClass('rotatebut')
    });
    $('.button3').click(function () {
        $(this).toggleClass('button3add')
    });
    $('.button4').click(function () {
        alert($(this).attr('type'));
    });
    $('.button5').click(function () {
        $(this).attr('class', 'black');
    });
    $('.button6').click(function () {
        alert('Wow Wow')
    });
    $('.button7').click(function () {
    });
    $('.button8').click(function () {
        $(this).clone().insertAfter(this).text("cloned").css({'marginLeft' : '5px'});
    });
    $('.button9').click(function () {
        console.log($(this).parents('li'));
    });



    $('.button11').click(function () {
        console.log($( 'body' ).find('.button11'));
    });
    $('.button12').click(function () {
        $('.hidden').fadeIn('slow');
    });
    $('.button13').click(function () {
        $('#fadeout').fadeOut('fast');

    })
});













