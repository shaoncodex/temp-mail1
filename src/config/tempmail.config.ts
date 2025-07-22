// TempMail Configuration
export const TEMPMAIL_CONFIG = {
  // Available domains for temporary emails
  domains: [
    "tempmail.dev",
    "10min.email", 
    "guerrillamail.com",
    "tempmail.plus",
    "throwaway.email",
    "mailtemp.info"
  ],

  // Email settings
  email: {
    // Auto-refresh interval for checking new emails (in milliseconds)
    refreshInterval: 30000, // 30 seconds
    
    // Maximum number of emails to keep in inbox
    maxEmails: 50,
    
    // Auto-delete emails older than (in milliseconds)
    autoDeleteAfter: 24 * 60 * 60 * 1000, // 24 hours
  },

  // UI settings
  ui: {
    // Show email preview in inbox
    showPreview: true,
    
    // Number of characters to show in email preview
    previewLength: 100,
    
    // Enable sound notifications for new emails
    soundNotifications: false,
    
    // Dark mode preference (auto, light, dark)
    theme: "auto",
  },

  // Security settings
  security: {
    // Enable end-to-end encryption for stored emails
    encryption: true,
    
    // Clear clipboard after copying email (in milliseconds)
    clearClipboardAfter: 60000, // 1 minute
    
    // Block tracking pixels in emails
    blockTracking: true,
  },

  // API settings (for future backend integration)
  api: {
    // Base URL for TempMail API
    baseUrl: "/api/v1",
    
    // Request timeout (in milliseconds)
    timeout: 10000,
    
    // Retry attempts for failed requests
    retryAttempts: 3,
  },
};

export default TEMPMAIL_CONFIG;
