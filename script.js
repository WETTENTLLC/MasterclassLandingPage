document.addEventListener("DOMContentLoaded", function() {
    // DOM elements
    const logoIntro = document.getElementById("logo-intro");
    const landingPage = document.getElementById("landing-page");
    const interactiveContent = document.getElementById("interactive-content");
    const videoPlayer = document.getElementById("video-player");
    const startVideoButton = document.getElementById("start-video");
    const masterclassVideo = document.getElementById("masterclass-video");

    // 1. Intro fade sequence
    if (logoIntro && landingPage) {
        logoIntro.style.opacity = "1";
        landingPage.style.display = "none";

        setTimeout(() => {
            logoIntro.style.opacity = "0";
            
            logoIntro.addEventListener('transitionend', () => {
                logoIntro.style.display = "none";
                landingPage.style.display = "block";
                setTimeout(() => landingPage.style.opacity = '1', 50);
            }, { once: true });
        }, 3000);
    }

    // 2. Video controls
    if (startVideoButton && interactiveContent && videoPlayer && masterclassVideo) {
        startVideoButton.addEventListener("click", () => {
            interactiveContent.style.display = "none";
            videoPlayer.style.display = "block";
            
            if (masterclassVideo.paused) {
                masterclassVideo.play().catch(error => {
                    console.log('Video play failed:', error);
                });
            }
        });
    }

    // 3. Registration modal functions
    window.openRegistrationModal = () => {
        document.getElementById("registrationModal")?.style.display = "block";
    };

    window.closeRegistrationModal = () => {
        document.getElementById("registrationModal")?.style.display = "none";
    };

    // 4. Payment instructions
    window.togglePaymentInstructions = () => {
        const paymentOption = document.getElementById("paymentOption");
        const zelleInstructions = document.getElementById("zelleInstructions");
        if (paymentOption && zelleInstructions) {
            zelleInstructions.style.display = 
                paymentOption.value === "zelle" ? "block" : "none";
        }
    };

    // 5. Event listeners
    document.querySelector(".register-button")?.addEventListener("click", openRegistrationModal);
    document.querySelector(".close-btn")?.addEventListener("click", closeRegistrationModal);
    document.getElementById("paymentOption")?.addEventListener("change", togglePaymentInstructions);

    // 6. NailAide initialization
    let nailAideInstance = null;
    if (typeof NailAide !== 'undefined') {
        try {
            nailAideInstance = NailAide.init({
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
        } catch (error) {
            console.error('NailAide init failed:', error);
        }
    } else {
        console.warn('NailAide library not loaded');
    }

    // 7. Chat controls
    const initButtonHandler = (elementId, action) => {
        document.getElementById(elementId)?.addEventListener('click', () => {
            nailAideInstance?.[action]?.();
        });
    };

    initButtonHandler('open-chat', 'open');
    initButtonHandler('close-chat', 'close');
    initButtonHandler('remove-chat', 'destroy');
});
