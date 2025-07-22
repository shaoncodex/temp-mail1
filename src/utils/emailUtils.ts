import { TEMPMAIL_CONFIG } from "@/config/tempmail.config";

/**
 * Generate a random temporary email address
 */
export const generateTempEmail = (): string => {
  const randomString = Math.random().toString(36).substring(2, 12);
  const domains = TEMPMAIL_CONFIG.domains;
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${randomString}@${randomDomain}`;
};

/**
 * Validate email address format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Extract domain from email address
 */
export const extractDomain = (email: string): string => {
  return email.split('@')[1] || '';
};

/**
 * Format timestamp for display
 */
export const formatTimestamp = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (minutes < 1) {
    return 'Just now';
  } else if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else if (days < 7) {
    return `${days}d ago`;
  } else {
    return date.toLocaleDateString();
  }
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number = TEMPMAIL_CONFIG.ui.previewLength): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Clean and sanitize email content
 */
export const sanitizeEmailContent = (content: string): string => {
  // Remove potentially dangerous HTML tags and scripts
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

/**
 * Check if email is expired based on config
 */
export const isEmailExpired = (timestamp: Date): boolean => {
  const now = new Date();
  const emailAge = now.getTime() - timestamp.getTime();
  return emailAge > TEMPMAIL_CONFIG.email.autoDeleteAfter;
};

/**
 * Generate a unique ID for emails
 */
export const generateEmailId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Copy text to clipboard with error handling
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (fallbackError) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};