/**
 * Security utilities dan helpers - buat jaga-jaga keamanan app
 */

// Content Security Policy headers - biar browser tau mana yang boleh dimuat
export const CSP_HEADERS = {
  "Content-Security-Policy": [
    "default-src 'self'", // Default cuma boleh dari domain sendiri
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // Next.js butuh unsafe-eval
    "style-src 'self' 'unsafe-inline'", // Tailwind butuh unsafe-inline
    "img-src 'self' data: https:", // Gambar boleh dari mana aja (https)
    "font-src 'self' data:", // Font dari domain sendiri atau data URI
    "connect-src 'self' https:", // API calls boleh ke HTTPS
    "frame-src 'none'", // Gak boleh ada iframe
    "object-src 'none'", // Gak boleh embed object
    "base-uri 'self'", // Base URL cuma dari domain sendiri
    "form-action 'self'", // Form cuma boleh submit ke domain sendiri
    "upgrade-insecure-requests", // Auto upgrade HTTP ke HTTPS
  ].join("; "),
} as const;

// Security headers buat Next.js - tameng keamanan berlapis
export const SECURITY_HEADERS = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff", // Browser gak boleh nebak content type
  },
  {
    key: "X-Frame-Options",
    value: "DENY", // Gak boleh di-frame sama situs lain
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block", // Browser block kalau detect XSS
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin", // Minimal referrer info aja
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()", // Blokir akses sensor
  },
] as const;

/**
 * Bersihin input user buat cegah XSS attacks - safety first bro!
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== "string") return "";

  return input
    .replace(/[<>'"]/g, (char) => {
      const entities: Record<string, string> = {
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#x27;",
        '"': "&quot;",
      };
      return entities[char] || char;
    })
    .trim();
}

/**
 * Validate and sanitize URL to prevent open redirect attacks
 */
export function sanitizeUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    // Only allow http and https protocols
    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return null;
    }

    // Block common malicious patterns
    const maliciousPatterns = [
      /javascript:/i,
      /data:/i,
      /vbscript:/i,
      /onload=/i,
      /onerror=/i,
    ];

    if (maliciousPatterns.some((pattern) => pattern.test(url))) {
      return null;
    }

    return parsedUrl.href;
  } catch {
    return null;
  }
}

/**
 * Validate file upload security
 */
export function validateFileUpload(file: File): {
  isValid: boolean;
  error?: string;
} {
  // Check file size (5MB limit)
  const MAX_SIZE = 5 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    return {
      isValid: false,
      error: "File size exceeds 5MB limit",
    };
  }

  // Check file type
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "text/plain",
    "application/pdf",
  ];

  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: "File type not allowed",
    };
  }

  // Check file name for suspicious patterns
  const suspiciousPatterns = [
    /\.exe$/i,
    /\.scr$/i,
    /\.bat$/i,
    /\.cmd$/i,
    /\.com$/i,
    /\.pif$/i,
    /\.scf$/i,
    /\.vbs$/i,
    /\.js$/i,
    /\.jar$/i,
  ];

  if (suspiciousPatterns.some((pattern) => pattern.test(file.name))) {
    return {
      isValid: false,
      error: "Suspicious file name detected",
    };
  }

  return { isValid: true };
}

/**
 * Generate secure random string for IDs, tokens, etc.
 */
export function generateSecureId(length: number = 16): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  if (typeof window !== "undefined" && window.crypto) {
    const randomValues = new Uint8Array(length);
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
      result += chars[randomValues[i] % chars.length];
    }
  } else {
    // Fallback for server-side
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  return result;
}

/**
 * Rate limiting pake memory storage (buat development/demo)
 * Kalau production, mending pake Redis atau sejenisnya biar lebih robust
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  isAllowed(
    identifier: string, // Biasanya IP address atau user ID
    maxRequests: number, // Maksimal request dalam window
    windowMs: number // Window time dalam milliseconds
  ): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];

    // Buang request lama yang udah di luar window
    const validRequests = requests.filter((time) => now - time < windowMs);

    if (validRequests.length >= maxRequests) {
      // Udah kebanyakan request nih, ditolak dulu
      return false;
    }

    // Tambahin request sekarang ke list
    validRequests.push(now);
    this.requests.set(identifier, validRequests);

    return true;
  }

  getRemainingRequests(
    identifier: string,
    maxRequests: number,
    windowMs: number
  ): number {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    const validRequests = requests.filter((time) => now - time < windowMs);

    // Return sisa request yang masih bisa dipake
    return Math.max(0, maxRequests - validRequests.length);
  }
}

// Export instance buat dipake di API routes
export const rateLimiter = new RateLimiter();

/**
 * CSRF token generation and validation
 */
export function generateCSRFToken(): string {
  return generateSecureId(32);
}

/**
 * Validate CSRF token
 */
export function validateCSRFToken(
  token: string,
  expectedToken: string
): boolean {
  if (!token || !expectedToken) return false;

  // Use constant-time comparison to prevent timing attacks
  if (token.length !== expectedToken.length) return false;

  let result = 0;
  for (let i = 0; i < token.length; i++) {
    result |= token.charCodeAt(i) ^ expectedToken.charCodeAt(i);
  }

  return result === 0;
}

/**
 * Secure cookie options
 */
export const SECURE_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
};

/**
 * Password strength validation
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) score += 1;
  else feedback.push("Password should be at least 8 characters long");

  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("Include lowercase letters");

  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("Include uppercase letters");

  if (/[0-9]/.test(password)) score += 1;
  else feedback.push("Include numbers");

  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  else feedback.push("Include special characters");

  return {
    isValid: score >= 4,
    score,
    feedback,
  };
}

/**
 * Input validation helpers
 */
export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  phone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
  },

  alphanumeric: (str: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(str);
  },

  safeString: (str: string): boolean => {
    // Allow letters, numbers, spaces, and common punctuation
    return /^[a-zA-Z0-9\s\.\,\!\?\-\_\(\)]+$/.test(str);
  },
};
