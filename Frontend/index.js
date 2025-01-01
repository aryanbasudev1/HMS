

$(document).ready(function () {
    
    $('#bannerTitle').css({ opacity: 0, marginTop: '100px' }).animate(
        { opacity: 1, marginTop: '0' },
        1000
    );

    $('#bannerText').css({ opacity: 0, marginTop: '100px' }).delay(300).animate(
        { opacity: 1, marginTop: '0' },
        1000
    );

   
    $('.nav-link').hover(
        function () {
            $(this).css({ textDecoration: 'underline' });
        },
        function () {
            $(this).css({ textDecoration: 'none' });
        }
    );
});