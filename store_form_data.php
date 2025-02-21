<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['fullName'], $data['email'], $data['phone'])) {
        echo json_encode(["success" => false, "message" => "Invalid data"]);
        exit;
    }

    // Store test submission in a log file
    $logEntry = date("Y-m-d H:i:s") . " | Name: " . $data['fullName'] . " | Email: " . $data['email'] . " | Phone: " . $data['phone'] . "\n";
    file_put_contents("enrollment_log.txt", $logEntry, FILE_APPEND);

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
?>
