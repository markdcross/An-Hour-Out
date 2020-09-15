$(document).ready(function () {
    $('#cities').click(function () {
        $('#amy-intro').fadeOut(500);
        setTimeout(function () {
            $('#amy-intro').toggleClass('hide');
        }, 500);

        setTimeout(function () {
            $('#cities-index').toggleClass('hide');
        }, 500);
    });
});
