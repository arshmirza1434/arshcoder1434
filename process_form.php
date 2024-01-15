<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Replace with your email address
    $to = 'osamamirza1434@gmail.com';

    // Subject of the email
    $subject = 'New Contact Form Submission';

    // Message body
    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Phone: $phone\n";
    $messageBody .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    $mailSuccess = mail($to, $subject, $messageBody, $headers);

    if ($mailSuccess) {
        echo 'Email sent successfully!';
    } else {
        echo 'Error sending email.';
    }
} else {
    // Invalid request method
    echo 'Invalid request method';
}
?>
