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

    // Open lesson description modal
    const lessonModal = document.getElementById("lesson-modal");
    const lessonTitle = document.getElementById("lesson-title");
    const lessonDescription = document.getElementById("lesson-description");
    const closeModal = document.querySelector(".close-modal");

    window.openLesson = function (lessonId) {
        lessonTitle.textContent = "Lesson " + lessonId;
        lessonDescription.textContent = "Description for Lesson " + lessonId + "...";
        lessonModal.classList.remove("hidden");
    };

    closeModal.addEventListener("click", () => {
        lessonModal.classList.add("hidden");
    });

    // Function to toggle lesson expansion
    function toggleLesson(lessonNumber) {
        const lessonContent = document.getElementById(`lesson${lessonNumber}`);
        if (lessonContent.style.display === "block") {
            lessonContent.style.display = "none";
        } else {
            lessonContent.style.display = "block";
        }
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
