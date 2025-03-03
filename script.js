// Wait for the DOM to be fully loaded before initializing NailAide
document.addEventListener("DOMContentLoaded", function() {
  // Make sure NailAide is available before initializing
  if (typeof NailAide !== 'undefined') {
    // Initialize NailAide with your configuration
    window.nailAideInstance = NailAide.init({
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
  } else {
    console.error('NailAide is not loaded. Check if the script is properly included.');
  }

  // Check if elements exist before adding event listeners
  const openChatButton = document.getElementById('open-chat');
  if (openChatButton) {
    openChatButton.addEventListener('click', function() {
      if (window.nailAideInstance && window.nailAideInstance.open) {
        window.nailAideInstance.open();
      } else {
        console.error('NailAide is not properly initialized');
      }
    });
  }

  const closeChatButton = document.getElementById('close-chat');
  if (closeChatButton) {
    closeChatButton.addEventListener('click', function() {
      if (window.nailAideInstance && window.nailAideInstance.close) {
        window.nailAideInstance.close();
      } else {
        console.error('NailAide is not properly initialized');
      }
    });
  }

  const removeChatButton = document.getElementById('remove-chat');
  if (removeChatButton) {
    removeChatButton.addEventListener('click', function() {
      if (window.nailAideInstance && window.nailAideInstance.destroy) {
        window.nailAideInstance.destroy();
      } else {
        console.error('NailAide is not properly initialized');
      }
    });
  }

  // Other DOM-dependent code
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
    startVideoButton.addEventListener("click", function() {
      console.log("Start Video button clicked"); // Debugging output
      interactiveContent.style.display = "none";
      videoPlayer.style.display = "block";
      const iframeSrc = masterclassVideo.src;
      if (iframeSrc && !iframeSrc.includes("autoplay=1")) {
        masterclassVideo.src = iframeSrc + (iframeSrc.includes("?") ? "&" : "?") + "autoplay=1";
      }
    });
  }
});

// These functions are defined globally so they can be called from HTML onclick attributes if needed
function openRegistrationModal() {
  const modal = document.getElementById("registrationModal");
  if (modal) {
    modal.style.display = "block";
  }
}

function closeRegistrationModal() {
  const modal = document.getElementById("registrationModal");
  if (modal) {
    modal.style.display = "none";
  }
}

function togglePaymentInstructions() {
  const paymentOption = document.getElementById("paymentOption");
  const zelleInstructions = document.getElementById("zelleInstructions");
  if (paymentOption && zelleInstructions) {
    zelleInstructions.style.display = paymentOption.value === "zelle" ? "block" : "none";
  }
}
