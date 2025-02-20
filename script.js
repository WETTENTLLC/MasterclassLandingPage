document.addEventListener("DOMContentLoaded", function () {
    const logoIntro = document.getElementById("logo-intro");
    const landingPage = document.getElementById("landing-page");
    const interactiveContent = document.getElementById("interactive-content");
    const videoPlayer = document.getElementById("video-player");
    const startVideoButton = document.getElementById("start-video");
    const masterclassVideo = document.getElementById("masterclass-video");

    // Remove intro and show landing page after animation
    setTimeout(() => {
        logoIntro.style.opacity = "0";
        setTimeout(() => {
            logoIntro.style.display = "none";
            landingPage.classList.remove("hidden");
        }, 1500);
    }, 3000);

    // Hide interactive elements and start video
    startVideoButton.addEventListener("click", function () {
        interactiveContent.style.display = "none";
        videoPlayer.style.display = "block";
        masterclassVideo.play();
    });

   function toggleLesson(lessonId) {
    const lessonContent = document.querySelectorAll('.lesson-content');
    
    lessonContent.forEach((content, index) => {
        if (index + 1 === lessonId) {
            // Toggle visibility
            content.style.display = (content.style.display === "block") ? "none" : "block";
        } else {
            content.style.display = "none"; // Collapse other sections
        }
    });
}

    // Function to open the registration modal
    function openRegistrationModal() {
        const modal = document.getElementById("registrationModal");
        modal.style.display = "block";
    }

    // Function to close the registration modal
    function closeRegistrationModal() {
        const modal = document.getElementById("registrationModal");
        modal.style.display = "none";
    }

    // Function to toggle Zelle payment instructions
    function togglePaymentInstructions() {
        const paymentOption = document.getElementById("paymentOption").value;
        const zelleInstructions = document.getElementById("zelleInstructions");
        if (paymentOption === "zelle") {
            zelleInstructions.style.display = "block";
        } else {
            zelleInstructions.style.display = "none";
        }
    }

    // Attach event listeners for registration modal
    const registerButton = document.querySelector(".register-button");
    const closeRegistrationBtn = document.querySelector(".close-btn");

    if (registerButton) {
        registerButton.addEventListener("click", openRegistrationModal);
    }

    if (closeRegistrationBtn) {
        closeRegistrationBtn.addEventListener("click", closeRegistrationModal);
    }

    // Attach event listener for payment option change
    const paymentOption = document.getElementById("paymentOption");
    if (paymentOption) {
        paymentOption.addEventListener("change", togglePaymentInstructions);
    }
});

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    // Email details
    $admin_email = "delane@example.com"; // Replace with Delane's email
    $subject_admin = "New Masterclass Enrollment: $fullName";
    $message_admin = "You have a new enrollment.\n\nName: $fullName\nEmail: $email\nPhone: $phone";

    // Send email to Delane
    mail($admin_email, $subject_admin, $message_admin, "From: no-reply@dnnc.com");

    // Confirmation email to user
    $subject_user = "Welcome to the DNNC Masterclass!";
    $message_user = "Dear $fullName,\n\nThank you for enrolling in the DNNC Masterclass! Here’s what you need to know:\n\n- Your class details and login instructions will be emailed to you shortly.\n- Ensure you have made your payment via Square.\n- For any questions, reply to this email.\n\nWe look forward to having you!\n\nBest,\nThe DNNC Team";

    // Send email to the user
    mail($email, $subject_user, $message_user, "From: no-reply@dnnc.com");

    // Return success response
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
?>

<?php
require 'vendor/autoload.php'; // Ensure you've installed the Square SDK

use Square\SquareClient;
use Square\Models\CreatePaymentRequest;
use Square\Models\Money;
use Square\Exceptions\ApiException;

// Set up the Square client
$client = new SquareClient([
    'accessToken' => 'YOUR_ACCESS_TOKEN', // Replace with your Square API access token
    'environment' => 'sandbox' // Change to 'production' when live
]);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nonce = $_POST['nonce'];
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

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
            $admin_email = "delane@example.com"; // Replace with Delane's email
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
