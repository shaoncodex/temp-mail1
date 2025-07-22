# ⚡ Quick Install Guide - TempMail Service

## 🎯 5-Minute cPanel Installation

### What You Need
- ✅ cPanel hosting account
- ✅ Domain or subdomain
- ✅ The `tempmail-production.zip` file

### Step 1: Download & Extract Locally
1. Download `tempmail-production.zip`
2. Extract to see the files (optional - just to verify)

### Step 2: Upload to cPanel
1. **Login** to your cPanel
2. **Open File Manager**
3. **Navigate** to:
   - `public_html/` (for main domain)
   - `public_html/subdomain/` (for subdomain)
4. **Upload** the `tempmail-production.zip` file
5. **Right-click** the zip → **Extract**
6. **Delete** the zip file after extraction

### Step 3: Test
1. **Visit your domain**
2. **See TempMail running!** 🎉

---

## 🔧 If You Have Issues

### Problem: 404 Error on refresh
**Solution**: The `.htaccess` file handles this automatically

### Problem: White/blank page
**Solution**: 
- Check all files extracted properly
- Look in browser developer tools for errors

### Problem: Need help?
**Solution**: 
- Read the full `INSTALLATION_GUIDE.md`
- Check `cpanel-install.md` for detailed steps
- Contact your hosting provider

---

## 📁 What Gets Installed

```
your-domain.com/
├── index.html         # Main app
├── .htaccess         # Server config
├── assets/           # CSS, JS, images
│   ├── index-xxx.js  # App code
│   ├── index-xxx.css # Styles
│   └── hero-email.jpg # Hero image
└── Documentation files
```

---

## 🎊 Success!

Your TempMail service includes:
- ✨ Beautiful responsive design
- 🔒 Privacy-focused features
- 📧 Instant email generation
- 📱 Mobile-friendly interface
- 🛡️ Security features built-in

**Enjoy your new TempMail service!** 🚀