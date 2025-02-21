<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Read the incoming JSON data
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);

    // Validate received data
    if (!isset($data['fullName']) || !isset($data['email']) || !isset($data['phone'])) {
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
        exit;
    }

    // Log the submission for review
    $logEntry = date("Y-m-d H:i:s") . " | Name: " . $data['fullName'] . " | Email: " . $data['email'] . " | Phone: " . $data['phone'] . "\n";
    file_put_contents("enrollment_log.txt", $logEntry, FILE_APPEND);

    // Send success response
    echo json_encode(["success" => true, "message" => "Form data logged successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
