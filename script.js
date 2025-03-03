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
        // Initial state setup
        logoIntro.style.opacity = "1";
        landingPage.style.display = "none";

        setTimeout(() => {
            logoIntro.style.opacity = "0";
            
            // When transition completes
            logoIntro.addEventListener('transitionend', () => {
                logoIntro.style.display = "none";
                landingPage.style.display = "block";
                setTimeout(() => {
                    landingPage.style.opacity = '1';
                }, 50);
            }, { once: true });
        }, 3000);
    }

    // 2. Video player controls
    if (startVideoButton && interactiveContent && videoPlayer && masterclassVideo) {
        startVideoButton.addEventListener("click", function() {
            interactiveContent.style.display = "none";
            videoPlayer.style.display = "block";
            
            // Handle autoplay properly
            if (masterclassVideo.paused) {
                const playPromise = masterclassVideo.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Video autoplay prevented:', error);
                    });
                }
            }
        });
    }

    // 3. Registration modal functions
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

    // 4. Payment instructions toggle
    function togglePaymentInstructions() {
        const paymentOption = document.getElementById("paymentOption");
        const zelleInstructions = document.getElementById("zelleInstructions");
        if (paymentOption && zelleInstructions) {
            zelleInstructions.style.display = 
                paymentOption.value === "zelle" ? "block" : "none";
        }
    }

    // 5. Event listeners for modal
    const registerButton = document.querySelector(".register-button");
    const closeRegistrationBtn = document.querySelector(".close-btn");

    if (registerButton) {
        registerButton.addEventListener("click", openRegistrationModal);
    }

    if (closeRegistrationBtn) {
        closeRegistrationBtn.addEventListener("click", closeRegistrationModal);
    }

    // 6. Payment option change listener
    const paymentOption = document.getElementById("paymentOption");
    if (paymentOption) {
        paymentOption.addEventListener("change", togglePaymentInstructions);
    }

    // 7. NailAide initialization (Moved after DOM elements)
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
            console.error('Failed to initialize NailAide:', error);
        }
    } else {
        console.warn('NailAide library not loaded');
    }

    // 8. Chat control handlers
    const initButtonHandler = (elementId, action) => {
        const element = document.getElementById(elementId);
        element?.addEventListener('click', () => {
            if (nailAideInstance?.[action]) {
                nailAideInstance[action]();
            } else {
                console.warn(`NailAide ${action} method not available`);
            }
        });
    };

    initButtonHandler('open-chat', 'open');
    initButtonHandler('close-chat', 'close');
    initButtonHandler('remove-chat', 'destroy');
});

// Global functions for HTML onclick handlers
window.openRegistrationModal = openRegistrationModal;
window.closeRegistrationModal = closeRegistrationModal;
window.togglePaymentInstructions = togglePaymentInstructions;
