document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener("DOMContentLoaded", function() {
    // Wait for NailAide to load
    if (typeof NailAide === 'undefined') {
        console.error('NailAide library not loaded');
        return;
    }

    // Initialize after verifying existence
    let nailAideInstance;
    try {
        nailAideInstance = NailAide.init({
            apiKey: '8048717a-c465-41dc-8fbe-53cad1fb1c48',
            // ... rest of config
        });
    } catch (error) {
        console.error('NailAide initialization failed:', error);
    }
    
    // Initialize NailAide after DOM load
    let nailAideInstance = null;
    
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

    // Unified element handler
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

    // Initialize control buttons
    initButtonHandler('open-chat', 'open');
    initButtonHandler('close-chat', 'close');
    initButtonHandler('remove-chat', 'destroy');

    // Page transition logic
    const logoIntro = document.getElementById("logo-intro");
    const landingPage = document.getElementById("landing-page");
    
    if (logoIntro && landingPage) {
        setTimeout(() => {
            logoIntro.style.opacity = "0";
            setTimeout(() => {
                logoIntro.style.display = "none";
                landingPage.classList.remove("hidden");
            }, 1500);
        }, 3000);
    }

    // Video player controls
    const startVideoButton = document.getElementById("start-video");
    startVideoButton?.addEventListener("click", function() {
        const interactiveContent = document.getElementById("interactive-content");
        const videoPlayer = document.getElementById("video-player");
        const masterclassVideo = document.getElementById("masterclass-video");

        interactiveContent.style.display = "none";
        videoPlayer.style.display = "block";

        if (masterclassVideo && !masterclassVideo.src.includes("autoplay=1")) {
            masterclassVideo.src += "?autoplay=1";
        }
    });
});

// Modal controls with error prevention
window.openRegistrationModal = () => {
    document.getElementById("registrationModal")?.style.display = "block";
};

window.closeRegistrationModal = () => {
    document.getElementById("registrationModal")?.style.display = "none";
};

window.togglePaymentInstructions = () => {
    const paymentOption = document.getElementById("paymentOption");
    const zelleInstructions = document.getElementById("zelleInstructions");
    
    if (paymentOption && zelleInstructions) {
        zelleInstructions.style.display = 
            paymentOption.value === "zelle" ? "block" : "none";
    }
};
