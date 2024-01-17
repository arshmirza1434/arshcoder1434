<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Recipient email address (your Gmail account)
    $to = "arshmirza0258@gmail.com"; // Replace with your actual Gmail address

    // Subject of the email
    $subject = "New Form Submission";

    // Message body
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    $success = mail($to, $subject, $body, $headers);

    // Check if the email was sent successfully
    if ($success) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    echo "Invalid request method.";
}
?>
