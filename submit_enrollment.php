<?php
// submit_enrollment.php

// Process form data
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Validate inputs (add your validation logic here)
if (empty($fullName) || empty($email) || empty($phone)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

// Save data to database or log file (add your logic here)
// Example: Log to a file
$logData = "Name: $fullName, Email: $email, Phone: $phone\n";
file_put_contents('enrollments.log', $logData, FILE_APPEND);

// Return success response
echo json_encode(['success' => true, 'message' => 'Enrollment successful.']);
?>
