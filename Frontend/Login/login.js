$(document).ready(function() {
    
    $('#patientLogin').css({
        opacity: 0,
        transform: 'translateY(50px)'
    });

    
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

    
    $('#doctorLogin').css({
        opacity: 0,
        transform: 'translateY(50px)'
    });

    
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


