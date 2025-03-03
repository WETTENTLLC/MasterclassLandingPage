// Initialize NailAide with your configuration
var nailAideInstance = NailAide.init({
  apiKey: '8048717a-c465-41dc-8fbe-53cad1fb1c48',
  businessName: 'DNNC & Advanced Pedicure Spa',
  businessType: 'Nail Salon',
  primaryColor: '#9333ea',
  position: 'bottom-right',
  welcomeMessage: 'Hello! How can I help you today?',
  bookingUrl: 'delanesnaturalnailcare.booksy.com',
  services: [
    { name: 'Basic Manicure', price: 25, duration: 30 },
    { name: 'Gel Manicure', price: 35, duration: 45 },
    { name: 'Basic Pedicure', price: 35, duration: 45 }
  ]
});

// Button to open chat
document.getElementById('open-chat').addEventListener('click', function() {
  if (nailAideInstance && nailAideInstance.open) {
    nailAideInstance.open();
  } else {
    console.error('NailAide is not properly initialized');
  }
});

document.getElementById('close-chat').addEventListener('click', function() {
  if (nailAideInstance && nailAideInstance.close) {
    nailAideInstance.close();
  } else {
    console.error('NailAide is not properly initialized');
  }
});

// Remove the widget completely
document.getElementById('remove-chat').addEventListener('click', function() {
  if (nailAideInstance && nailAideInstance.destroy) {
    nailAideInstance.destroy();
  } else {
    console.error('NailAide is not properly initialized');
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const logoIntro = document.getElementById("logo-intro");
    const landingPage = document.getElementById("landing-page");
    const interactiveContent = document.getElementById("interactive-content");
    const videoPlayer = document.getElementById("video-player");
    const startVideoButton = document.getElementById("start-video");
    const masterclassVideo = document.getElementById("masterclass-video");

    // Remove intro and show landing page after animation
    if (logoIntro && landingPage) {
        setTimeout(() => {
            logoIntro.style.opacity = "0";
            setTimeout(() => {
                logoIntro.style.display = "none";
                landingPage.classList.remove("hidden");
            }, 1500);
        }, 3000);
    }

    // Hide interactive elements and start video
    if (startVideoButton && interactiveContent && videoPlayer && masterclassVideo) {
        startVideoButton.addEventListener("click", function () {
            console.log("Start Video button clicked"); // Debugging output
            interactiveContent.style.display = "none";
            videoPlayer.style.display = "block";

            const iframeSrc = masterclassVideo.src;
            if (!iframeSrc.includes("autoplay=1")) {
                masterclassVideo.src = iframeSrc + "?autoplay=1";
            }
        });
    }

    // Function to open the registration modal
    function openRegistrationModal() {
        const modal = document.getElementById("registrationModal");
        if (modal) {
            modal.style.display = "block";
        }
    }

    // Function to close the registration modal
    function closeRegistrationModal() {
        const modal = document.getElementById("registrationModal");
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Function to toggle Zelle payment instructions
    function togglePaymentInstructions() {
        const paymentOption = document.getElementById("paymentOption");
        const zelleInstructions = document.getElementById("zelleInstructions");
        if (paymentOption && zelleInstructions) {
            if (paymentOption.value === "zelle") {
                zelleInstructions.style.display = "block";
            } else {
                zelleInstructions.style.display = "none";
            }
        }
    }
});
