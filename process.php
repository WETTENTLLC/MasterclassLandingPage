<?php
require 'vendor/autoload.php'; // Ensure you've installed the Square SDK

use Square\SquareClient;
use Square\Models\CreatePaymentRequest;
use Square\Models\Money;
use Square\Exceptions\ApiException;

header('Content-Type: application/json'); // Set response type to JSON

// Set up the Square client
$client = new SquareClient([
    'accessToken' => getenv('SQUARE_ACCESS_TOKEN'), // Use environment variable for security
    'environment' => 'sandbox' // Change to 'production' when live
]);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate inputs
    $fullName = filter_input(INPUT_POST, 'fullName', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $nonce = filter_input(INPUT_POST, 'nonce', FILTER_SANITIZE_STRING);

    if (!$fullName || !$email || !$phone || !$nonce) {
        echo json_encode(["success" => false, "message" => "Invalid input"]);
        exit;
    }

    // Create a payment request
    $money = new Money();
    $money->setAmount(15000); // Amount in cents ($150.00)
    $money->setCurrency('USD');

    $createPaymentRequest = new CreatePaymentRequest($nonce, uniqid(), $money);

    try {
        $paymentsApi = $client->getPaymentsApi();
        $response = $paymentsApi->createPayment($createPaymentRequest);

        if ($response->isSuccess()) {
            // Payment succeeded

            // Send confirmation email to Delane
            $admin_email = "wettentertainmentllc@gmail.com"; // Replace with Delane's email
            $subject_admin = "New DNNC Masterclass Enrollment";
            $message_admin = "A new student has enrolled:\n\nName: $fullName\nEmail: $email\nPhone: $phone";
            mail($admin_email, $subject_admin, $message_admin, "From: no-reply@dnnc.com");

            // Send confirmation email to the user
            $subject_user = "Welcome to the DNNC Masterclass!";
            $message_user = "Dear $fullName,\n\nThank you for enrolling in the DNNC Masterclass!\n\nHere’s what you need to know:\n- Your class details and login instructions will be emailed to you shortly.\n- Ensure you have made your payment via Square.\n- For any questions, reply to this email.\n\nBest,\nThe DNNC Team";
            mail($email, $subject_user, $message_user, "From: no-reply@dnnc.com");

            // Return success response
            echo json_encode(["success" => true]);
        } else {
            // Payment failed
            echo json_encode(["success" => false, "message" => "Payment failed"]);
        }
    } catch (ApiException $e) {
        // Handle errors from Square API
        echo json_encode(["success" => false, "message" => $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
?>
