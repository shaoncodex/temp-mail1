# 🏗️ cPanel Installation Guide for TempMail

## Quick Start (5 Minutes)

### 📁 Step 1: Download & Extract
1. Download the `tempmail-service.zip` file
2. Extract to your computer
3. You'll see a `dist/` folder with ready-to-use files

### 🌐 Step 2: Access cPanel
1. Login to your cPanel hosting account
2. Open **File Manager**
3. Navigate to `public_html/` (main domain) or `public_html/subdomain/` (subdomain)

### 📤 Step 3: Upload Files
**Option A: Direct Upload (Easiest)**
1. Upload the `tempmail-dist.zip` to your target folder
2. Right-click the zip file → **Extract**
3. Move all contents from the extracted `dist/` folder to your root directory
4. Delete the zip file and empty folders

**Option B: FTP Upload**
1. Use FileZilla or similar FTP client
2. Upload all files from the `dist/` folder
3. Maintain the folder structure

### ⚡ Step 4: Configure Server
1. Upload the `.htaccess` file to your root directory
2. Set file permissions:
   - Folders: 755
   - Files: 644

### 🧪 Step 5: Test Installation
1. Visit your domain: `https://yourdomain.com`
2. You should see the TempMail interface
3. Test generating an email
4. Verify all features work correctly

## 🔧 Advanced Configuration

### Custom Subdomain Setup
1. **Create Subdomain** in cPanel:
   - Go to **Subdomains**
   - Create: `temp.yourdomain.com`
   - Document Root: `public_html/temp`

2. **Upload TempMail** to the subdomain folder
3. **Test**: Visit `https://temp.yourdomain.com`

### Domain Pointing
If installing on a separate domain:
1. **Point domain** to your hosting
2. **Create folder** in `public_html/newdomain.com/`
3. **Upload files** to this folder
4. **Update DNS** if needed

## 🛡️ Security & Performance

### SSL Setup
1. **Enable SSL** in cPanel → SSL/TLS
2. **Force HTTPS** (already configured in .htaccess)
3. **Test**: Ensure `https://` works

### Performance Optimization
The `.htaccess` file includes:
- Gzip compression
- Browser caching
- Security headers
- SPA routing support

### File Permissions
```bash
# Recommended permissions
Folders: 755 (drwxr-xr-x)
Files: 644 (-rw-r--r--)
.htaccess: 644
```

## 🔍 File Structure After Installation

```
public_html/
├── index.html              # Main application
├── .htaccess              # Server configuration
├── assets/
│   ├── index-[hash].js    # Application JavaScript
│   ├── index-[hash].css   # Styles
│   └── hero-email.jpg     # Hero image
└── favicon.ico           # Site icon
```

## ❗ Troubleshooting

### Issue: 404 Error on Page Refresh
**Cause**: .htaccess not working or mod_rewrite disabled
**Solution**: 
1. Ensure `.htaccess` is uploaded
2. Contact host to enable mod_rewrite
3. Check file permissions

### Issue: White/Blank Page
**Cause**: JavaScript files not loading
**Solution**:
1. Check file paths in browser developer tools
2. Verify all files uploaded correctly
3. Check file permissions

### Issue: Styles Not Loading
**Cause**: CSS files not found
**Solution**:
1. Verify `assets/` folder uploaded completely
2. Check browser console for 404 errors
3. Ensure folder permissions are correct

### Issue: "Internal Server Error"
**Cause**: .htaccess configuration issue
**Solution**:
1. Temporarily rename `.htaccess` to `.htaccess-backup`
2. If site loads, contact hosting provider
3. They may need to enable specific Apache modules

## 📞 Getting Help

### Pre-Installation Checklist
- ✅ cPanel access confirmed
- ✅ Domain/subdomain configured
- ✅ File Manager or FTP access working
- ✅ PHP/Apache hosting (standard cPanel)

### Common Hosting Requirements
- **Apache** with mod_rewrite (standard)
- **PHP** (not required, but common)
- **SSL certificate** (recommended)
- **File upload** capability

### Contact Your Host If:
- mod_rewrite is not enabled
- .htaccess rules are blocked
- File permissions cannot be changed
- SSL certificate issues

## 🎉 Success Verification

Your TempMail service is working correctly when:
- ✅ Main page loads without errors
- ✅ Email generation button works
- ✅ Inbox tab displays properly
- ✅ Copy to clipboard functions
- ✅ Responsive design works on mobile
- ✅ HTTPS is working (green lock icon)

**Congratulations! Your TempMail service is now live!** 🚀