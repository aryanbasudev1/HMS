// $(document).ready(function () {
//     // Add animations for both cards with delay
//     $('#patientLogin').css({
//         opacity: 0,
//         transform: 'translateY(50px)'
//     }).animate({
//         opacity: 1,
//         transform: 0
//     }, 1000);

//     $('#doctorLogin').css({
//         opacity: 0,
//         transform: 'translateY(50px)'
//     }).delay(300).animate({
//         opacity: 1,
//         transform: 0
//     }, 1000);

//     // Add hover effect using Bootstrap classes
//     $('.login-card').hover(
//         function () {
//             $(this).addClass('shadow-lg').css('cursor', 'pointer');
//         },
//         function () {
//             $(this).removeClass('shadow-lg');
//         }
//     );
// });

$(document).ready(function() {
    // Set initial styles for Patient Login Card using jQuery
    $('#patientLogin').css({
        opacity: 0,
        transform: 'translateY(50px)'
    });

    // Animate Patient Login Card
    $('#patientLogin').animate({
        opacity: 1
    }, {
        duration: 1000,
        step: function(now, fx) {
            if (fx.prop === 'opacity') {
                const translateY = 50 - (now * 50);
                $('#patientLogin').css('transform', `translateY(${translateY}px)`);
            }
        }
    });

    // Set initial styles for Doctor Login Card using jQuery
    $('#doctorLogin').css({
        opacity: 0,
        transform: 'translateY(50px)'
    });

    // Animate Doctor Login Card
    $('#doctorLogin').delay(200).animate({
        opacity: 1
    }, {
        duration: 1000,
        step: function(now, fx) {
            if (fx.prop === 'opacity') {
                const translateY = 50 - (now * 50);
                $('#doctorLogin').css('transform', `translateY(${translateY}px)`);
            }
        }
    });

    // Match Navbar Styling with Home Page
    $('.navbar').removeClass('navbar-dark bg-primary').addClass('navbar-light bg-light');
    $('.nav-link').css({
        color: '#007bff',
        fontWeight: '600'
    });

    // Use jQuery to dynamically add hover effects
    $('.login-card').hover(
        function() {
            $(this).css({
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transition: 'box-shadow 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            });
        }
    );
});


