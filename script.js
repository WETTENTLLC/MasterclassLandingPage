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
