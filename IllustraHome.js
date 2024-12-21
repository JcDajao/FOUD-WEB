/* JS for Feedback form */
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show a stylish popup message using SweetAlert2
    Swal.fire({
        title: 'Feedback Sent!',
        text: 'Thank you for your feedback.',
        icon: 'success',
        background: '#faebd7',
        color: 'black',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f77daa',
        customClass:{
            popup: 'custom-popup'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Reset the form after the alert is confirmed
            document.getElementById('feedbackForm').reset();
        }
    });
});