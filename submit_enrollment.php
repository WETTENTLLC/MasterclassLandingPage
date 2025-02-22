<?php
header('Content-Type: application/json');

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Database connection details
$serverName = "WETTINC"; // Replace with your SQL Server name
$database = "dnnc_masterclass";
$connectionOptions = [
    "Database" => $database,
    "Uid" => "", // Leave empty for Windows Authentication
    "PWD" => ""  // Leave empty for Windows Authentication
];

// Get form data
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Invalid form data.']);
    exit;
}

$fullName = $data['fullName'];
$email = $data['email'];
$phone = $data['phone'];

// Validate inputs
if (empty($fullName) || empty($email) || empty($phone)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

try {
    // Connect to SQL Server
    $conn = sqlsrv_connect($serverName, $connectionOptions);

    if ($conn === false) {
        throw new Exception("Failed to connect to SQL Server: " . print_r(sqlsrv_errors(), true));
    }

    // Insert data into the Registrations table
    $sql = "INSERT INTO Registrations (FullName, Email, PhoneNumber, RegistrationDate)
            VALUES (?, ?, ?, GETDATE())";
    $params = [$fullName, $email, $phone];
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        throw new Exception("Failed to insert data: " . print_r(sqlsrv_errors(), true));
    }

    // Log the form data to a file
    $logData = "Name: $fullName, Email: $email, Phone: $phone\n";
    $logFile = 'enrollments.log';

    if (file_put_contents($logFile, $logData, FILE_APPEND) === false) {
        throw new Exception("Failed to log enrollment data.");
    }

    // Return success response
    echo json_encode(['success' => true, 'message' => 'Enrollment successful.']);
} catch (Exception $e) {
    // Log the error for debugging
    error_log($e->getMessage());

    // Return error response
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
} finally {
    // Close the connection
    if ($conn) {
        sqlsrv_close($conn);
    }
}
?>
