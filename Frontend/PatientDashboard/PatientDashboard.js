$(document).ready(function () {
    // Set today's date as the minimum date for the date picker
    const today = new Date().toISOString().split("T")[0];
    $("#appointmentDate").attr("min", today);

    // Animate all cards with delays
    $(".welcome-card").css({ opacity: 0, transform: "translateY(50px)" }).animate({ opacity: 1, transform: "translateY(0)" }, 800);
    $(".appointment-card").css({ opacity: 0, transform: "translateY(50px)" }).delay(200).animate({ opacity: 1, transform: "translateY(0)" }, 800);
    $(".table-card").css({ opacity: 0, transform: "translateY(50px)" }).delay(400).animate({ opacity: 1, transform: "translateY(0)" }, 800);

    // Add hover effects for cards
    $(".card").hover(
        function () {
            $(this).addClass("shadow-lg").css("cursor", "pointer");
        },
        function () {
            $(this).removeClass("shadow-lg");
        }
    );

    // Handle form submission to dynamically add appointments to the table
    $("#appointmentForm").submit(function (e) {
        e.preventDefault();

        // Get form values
        const date = $("#appointmentDate").val();
        const time = $("#appointmentTime").val();
        const issue = $("#healthIssue").val();

        // Validate inputs
        if (date && time && issue) {
            $("#appointmentsTableBody").append(`
                <tr>
                    <td>DRXXX</td>
                    <td>${date}</td>
                    <td>${time}</td>
                    <td>${issue}</td>
                    <td>Pending</td>
                </tr>
            `);
            $("#appointmentForm")[0].reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});


// ----------------
// Updated PatientDashboard.js
// $(document).ready(function () {
//     // Retrieve the patient's name from localStorage
//     const patientName = localStorage.getItem('patientName') || 'Patient Name';
//     $('#dynamicPatientName').text(patientName);

//     // Set today's date as the minimum date for the date picker
//     const today = new Date().toISOString().split('T')[0];
//     $('#appointmentDate').attr('min', today);

//     // Animate cards
//     $('.welcome-card').css({ opacity: 0, transform: 'translateY(50px)' }).animate({ opacity: 1 }, 800);
//     $('.appointment-card').css({ opacity: 0, transform: 'translateY(50px)' }).delay(200).animate({ opacity: 1 }, 800);
//     $('.table-card').css({ opacity: 0, transform: 'translateY(50px)' }).delay(400).animate({ opacity: 1 }, 800);

//     // Form submission
//     $('#appointmentForm').submit(function (e) {
//         e.preventDefault();
//         const date = $('#appointmentDate').val();
//         const time = $('#appointmentTime').val();
//         const issue = $('#healthIssue').val();

//         if (date && time && issue) {
//             $('#appointmentsTableBody').append(`
//                 <tr>
//                     <td>DRXXX</td>
//                     <td>${date}</td>
//                     <td>${time}</td>
//                     <td>${issue}</td>
//                     <td>Pending</td>
//                 </tr>
//             `);
//             $(this)[0].reset();
//         } else {
//             alert('Please fill out all fields.');
//         }
//     });
// });
