# TempMail Service - Installation Guide

## 📦 Complete Installation Package

This package contains everything needed to deploy your TempMail service on cPanel hosting or any web server.

## 🏗️ What's Included

```
tempmail-service/
├── dist/                    # Built production files (ready to upload)
├── src/                     # Source code
├── public/                  # Static assets
├── docs/                    # Documentation
├── .htaccess               # Apache configuration
├── cpanel-install.md       # cPanel specific instructions
├── package.json            # Dependencies
├── vite.config.ts          # Build configuration
└── README.md              # Project documentation
```

## 🚀 Quick Installation (cPanel)

### Method 1: Direct Upload (Recommended)
1. **Download & Extract** the zip file
2. **Upload** the entire `dist/` folder contents to your domain's `public_html/` directory
3. **Upload** the `.htaccess` file to `public_html/`
4. **Visit** your domain - TempMail is ready! 🎉

### Method 2: Build from Source
1. **Upload** all source files to your server
2. **Install Node.js** on your hosting (if supported)
3. **Run build commands** (see detailed instructions below)

## 📋 Detailed cPanel Installation

### Prerequisites
- cPanel hosting account
- File Manager access or FTP client
- Domain or subdomain configured

### Step-by-Step Process

#### 1. Prepare Your Files
```bash
# If building locally first (optional)
npm install
npm run build
```

#### 2. Upload to cPanel
1. **Login** to your cPanel
2. **Open File Manager**
3. **Navigate** to `public_html/` (or your domain folder)
4. **Upload** the `tempmail-dist.zip` file
5. **Extract** the zip file
6. **Move** all contents from `dist/` to your root directory

#### 3. Configure Apache (.htaccess)
The included `.htaccess` file provides:
- Single Page Application routing
- Security headers
- Gzip compression
- Cache optimization

#### 4. Test Installation
- Visit your domain: `https://yourdomain.com`
- Generate a test email
- Verify all features work

## ⚙️ Configuration Options

### Email Domains
Edit `src/config/tempmail.config.ts`:
```typescript
domains: [
  "yourdomain.com",      // Add your own domain
  "tempmail.dev",
  "10min.email",
  // Add more domains as needed
]
```

### Customization
- **Colors**: Modify `src/index.css`
- **Branding**: Update `src/components/Header.tsx`
- **Features**: Configure `src/config/tempmail.config.ts`

## 🔧 Advanced Setup

### Custom Domain Integration
1. **Add subdomain** in cPanel (e.g., `temp.yourdomain.com`)
2. **Point subdomain** to your TempMail installation
3. **Update configuration** to use your domain

### SSL Certificate
1. **Enable SSL** in cPanel
2. **Force HTTPS** (already configured in .htaccess)
3. **Test secure connection**

### Performance Optimization
- **Enable Gzip** (included in .htaccess)
- **Set cache headers** (pre-configured)
- **Optimize images** (already optimized)

## 🐛 Troubleshooting

### Common Issues

#### "404 Not Found" on refresh
- **Solution**: Ensure `.htaccess` is uploaded and mod_rewrite is enabled

#### Blank page or errors
- **Check**: File permissions (755 for folders, 644 for files)
- **Verify**: All files uploaded correctly

#### Styling not loading
- **Ensure**: CSS files are in correct paths
- **Check**: File permissions and paths

### Support Commands
```bash
# Check file permissions
ls -la

# Fix permissions if needed
chmod 755 folders/
chmod 644 files.html
```

## 📞 Support

If you encounter issues:
1. **Check** the troubleshooting section
2. **Verify** file structure matches the guide
3. **Test** on a simple HTML file first
4. **Contact** your hosting provider for server-specific issues

## 🎉 Success!

Once installed, your TempMail service provides:
- ✅ Instant temporary email generation
- ✅ Clean, responsive interface  
- ✅ Privacy-focused design
- ✅ Multiple domain support
- ✅ Mobile-friendly experience

---

**Enjoy your new TempMail service!** 🚀📧