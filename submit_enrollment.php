<?php
header('Content-Type: application/json');

// Database connection details
$serverName = "WETTINC"; // Replace with your SQL Server name
$database = "dnnc_masterclass";
$connectionOptions = [
    "Database" => $database,
    "Uid" => "", // Leave empty for Windows Authentication
    "PWD" => ""  // Leave empty for Windows Authentication
];

// Get form data
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$phone = $_POST['phone'];

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

    // Return success response
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    // Return error response
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
} finally {
    // Close the connection
    if ($conn) {
        sqlsrv_close($conn);
    }
}
?>
