# 📧 TempMail Service

A beautiful, privacy-focused temporary email service built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **🔒 Privacy First**: No registration required, completely anonymous
- **⚡ Instant Generation**: Create temporary emails in seconds
- **📱 Responsive Design**: Works perfectly on all devices
- **🎨 Modern UI**: Beautiful dark theme with glass-morphism effects
- **🛡️ Secure**: Built-in XSS protection and email sanitization
- **🌐 Multiple Domains**: Support for various temporary email domains
- **📬 Real-time Inbox**: View and manage received emails
- **📋 Easy Copy**: One-click email copying to clipboard

## 🚀 Quick Start

### For cPanel Hosting (Recommended)
1. Download the release zip file
2. Extract and upload `dist/` contents to your `public_html/`
3. Upload `.htaccess` file
4. Visit your domain - you're ready! 🎉

### For Development
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
tempmail-service/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── EmailGenerator.tsx  # Email generation
│   │   └── EmailInbox.tsx  # Email management
│   ├── config/             # Configuration files
│   │   └── tempmail.config.ts  # Service settings
│   ├── utils/              # Utility functions
│   │   └── emailUtils.ts   # Email helpers
│   ├── pages/              # Application pages
│   ├── assets/             # Static assets
│   └── styles/             # CSS and design system
├── public/                 # Public assets
├── dist/                   # Built files (production)
└── docs/                   # Documentation
```

## ⚙️ Configuration

### Email Domains
Edit `src/config/tempmail.config.ts` to customize:

```typescript
export const TEMPMAIL_CONFIG = {
  domains: [
    "tempmail.dev",
    "10min.email", 
    "guerrillamail.com",
    "your-domain.com"  // Add your own domain
  ],
  
  email: {
    refreshInterval: 30000,    // Check for new emails every 30s
    maxEmails: 50,            // Maximum emails in inbox
    autoDeleteAfter: 86400000 // Auto-delete after 24 hours
  },
  
  security: {
    encryption: true,         // Encrypt stored emails
    blockTracking: true,      // Block email tracking pixels
    clearClipboardAfter: 60000 // Clear clipboard after 1 minute
  }
};
```

### Styling & Branding
- **Colors**: Modify design tokens in `src/index.css`
- **Logo/Branding**: Update `src/components/Header.tsx`
- **Theme**: Customize Tailwind config in `tailwind.config.ts`

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: Radix UI + shadcn/ui
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Custom CSS animations + Tailwind

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style
- TypeScript strict mode enabled
- ESLint + Prettier configuration
- Component-based architecture
- Utility-first CSS with Tailwind

## 📦 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag & drop `dist/` folder
- **Vercel**: Connect GitHub repository
- **cPanel**: Upload files via File Manager
- **GitHub Pages**: Enable in repository settings

### Server Requirements
- **Web Server**: Apache/Nginx
- **SSL Certificate**: Recommended for HTTPS
- **mod_rewrite**: Required for SPA routing (Apache)

## 🔒 Security Features

- **XSS Protection**: Content sanitization and CSP headers
- **HTTPS Enforcement**: Automatic redirect to secure connection
- **Privacy Protection**: No data persistence, no tracking
- **Input Validation**: Email format validation and sanitization
- **Secure Headers**: HSTS, X-Frame-Options, and more

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Common Issues

**404 on page refresh**
- Ensure `.htaccess` is uploaded (Apache)
- Check mod_rewrite is enabled

**Blank page**
- Verify all files uploaded correctly
- Check browser console for errors
- Confirm file permissions (644 for files, 755 for folders)

**Styles not loading**
- Check `assets/` folder is complete
- Verify CSS file paths
- Clear browser cache

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Check the [Installation Guide](INSTALLATION_GUIDE.md)
- Review [cPanel Instructions](cpanel-install.md)
- Open an issue for bugs or feature requests

## 🎉 Acknowledgments

- Built with ❤️ for privacy and security
- Inspired by modern email services
- Thanks to the open-source community

---

**Enjoy your new TempMail service!** 🚀📧