$(document).ready(function () {

    $('.menu-btn').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.overlay').css({
                width: '100%',
                position: 'fixed'
            })
        } else {
            $('.overlay').css({
                width: '0',
                position: 'fixed'
            })
        }
    })
})



