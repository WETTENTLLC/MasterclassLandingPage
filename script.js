document.addEventListener("DOMContentLoaded", function () {
    const logoIntro = document.getElementById("logo-intro");
    const landingPage = document.getElementById("landing-page");
    const interactiveContent = 
document.getElementById("interactive-content");
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
    const lessonDescription = 
document.getElementById("lesson-description");
    const closeModal = document.querySelector(".close-modal");

    window.openLesson = function (lessonId) {
        lessonTitle.textContent = "Lesson " + lessonId;
        lessonDescription.textContent = "Description for Lesson " + 
lessonId + "...";
        lessonModal.classList.remove("hidden");
    };

    closeModal.addEventListener("click", () => {
        lessonModal.classList.add("hidden");
    });
});
