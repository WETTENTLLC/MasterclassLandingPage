<?php
// submit_enrollment.php

// Process form data
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Validate inputs
if (empty($fullName) || empty($email) || empty($phone)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

// Log the form data to a file
$logData = "Name: $fullName, Email: $email, Phone: $phone\n";
$logFile = 'enrollments.log';

if (file_put_contents($logFile, $logData, FILE_APPEND) !== false) {
    // Return success response
    echo json_encode(['success' => true, 'message' => 'Enrollment successful.']);
} else {
    // Return error response if logging fails
    echo json_encode(['success' => false, 'message' => 'Failed to log enrollment.']);
}
?>
