import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

// Global type declaration to extend Window interface
declare global {
  interface Window {
    dataLayer?: Array<any>;
  }
}

// Define types for cookie consent
type ConsentType = 'none' | 'essential' | 'full';

const CookieBanner: React.FC = () => {
  // Specify cookie types in useCookies
  const [cookies, setCookie] = useCookies<string>(['cookie-consent', 'cookie-consent-expiry']);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check existing consent and its expiry
    const hasConsented = cookies['cookie-consent'] as ConsentType;
    const consentExpiry = cookies['cookie-consent-expiry'];
    
    // Current timestamp
    const currentTime = new Date().getTime();

    // Decide banner visibility
    if (!hasConsented || 
        (consentExpiry && currentTime > parseInt(consentExpiry as string))) {
      setIsVisible(true);
    }
  }, [cookies]);

  const handleConsent = (type: ConsentType) => {
    // Set consent cookie
    setCookie('cookie-consent', type, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60 // 1 year
    });

    // Set expiry time for next prompt (1 month from now)
    const expiryTime = new Date().getTime() + (5 * 1000);
    setCookie('cookie-consent-expiry', expiryTime.toString(), {
      path: '/',
      maxAge: 365 * 24 * 60 * 60 // 1 year
    });

    // Optional: Track consent type
    if (type === 'full') {
      // Set up analytics tracking with type-safe check
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'cookie_consent_full'
        });
      }
    }

    // Hide banner
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-grow mb-4 md:mb-0 md:mr-4">
          <h3 className="font-bold text-lg">🍪 Cookie Preferences</h3>
          <p className="text-sm text-gray-600">
            We use cookies to improve your experience. 
            <a 
              href="/privacy-policy" 
              className="text-blue-600 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => handleConsent('full')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Accept All Cookies
          </button>
          <button 
            onClick={() => handleConsent('essential')}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Only Essential
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;