import React from 'react';
import { createRoot } from 'react-dom/client';
import NailAideWidget from './NailAideWidget';

interface NailAideConfig {
  apiKey: string;
  businessName: string;
  businessType: string;
  primaryColor?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  welcomeMessage?: string;
  bookingUrl?: string;
  services?: Array<{name: string, price: number, duration: number}>;
  endpoint?: string;
}

// Function to initialize and mount the widget
function initNailAide(config: NailAideConfig) {
  // Create container element
  const container = document.createElement('div');
  container.id = 'nailaide-container';
  document.body.appendChild(container);
  
  // Render the widget
  const root = createRoot(container);
  root.render(React.createElement(NailAideWidget, config));
  
  // Return methods to control the widget
  return {
    open: () => {
      const widget = document.querySelector('.nailaide-widget') as HTMLElement;
      if (widget) {
        const button = widget.querySelector('.nailaide-button') as HTMLElement;
        if (button) button.click();
      }
    },
    close: () => {
      const widget = document.querySelector('.nailaide-widget') as HTMLElement;
      if (widget) {
        const closeButton = widget.querySelector('.nailaide-close-button') as HTMLElement;
        if (closeButton) closeButton.click();
      }
    },
    destroy: () => {
      const container = document.getElementById('nailaide-container');
      if (container) {
        document.body.removeChild(container);
      }
    }
  };
}

// Make the initialization function available globally
(window as any).NailAide = {
  init: initNailAide
};
