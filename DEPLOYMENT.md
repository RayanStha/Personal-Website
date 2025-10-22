# GitHub Pages Deployment Guide

Complete guide to deploying your personal website on GitHub Pages.

## 📋 Prerequisites

- A GitHub account ([sign up here](https://github.com/join))
- Git installed on your computer
- Your website files ready with photos and information updated

## 🚀 Deployment Steps

### Option 1: Using GitHub Desktop (Easiest for Beginners)

1. **Download GitHub Desktop**
   - Go to [desktop.github.com](https://desktop.github.com)
   - Download and install

2. **Create Repository**
   - Open GitHub Desktop
   - Click "Create New Repository"
   - Name: `yourusername.github.io` (replace yourusername with your GitHub username)
   - Local Path: Choose your Personal-Website folder
   - Click "Create Repository"

3. **Publish to GitHub**
   - Click "Publish repository"
   - Uncheck "Keep this code private"
   - Click "Publish Repository"

4. **Enable GitHub Pages**
   - Go to your repository on github.com
   - Click "Settings"
   - Click "Pages" in left sidebar
   - Under "Source", select "main" branch
   - Click "Save"

5. **Done!**
   - Your site will be live at: `https://yourusername.github.io`
   - Initial deployment takes 2-5 minutes

### Option 2: Using Command Line (Git)

1. **Initialize Git Repository**
   ```bash
   cd Personal-Website
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `yourusername.github.io`
   - Make it public
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**
   ```bash
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Click "Save"

5. **Wait for Deployment**
   - Check the "Actions" tab to see deployment progress
   - Once complete, visit: `https://yourusername.github.io`

### Option 3: Upload Files Directly (No Git Knowledge Required)

1. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name: `yourusername.github.io`
   - Public repository
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop ALL your files and folders
   - Scroll down and click "Commit changes"

3. **Enable GitHub Pages**
   - Settings > Pages
   - Source: main branch
   - Save

4. **Visit Your Site**
   - `https://yourusername.github.io`

## 🔄 Updating Your Site

### Using GitHub Desktop
1. Make changes to your files
2. Open GitHub Desktop
3. Review changes in the left panel
4. Add a commit message (e.g., "Updated travel photos")
5. Click "Commit to main"
6. Click "Push origin"
7. Changes will be live in 1-2 minutes

### Using Command Line
```bash
git add .
git commit -m "Your update message"
git push
```

### Using GitHub Web Interface
1. Go to your repository on github.com
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Scroll down and click "Commit changes"

## 🌐 Custom Domain (Optional)

Want to use your own domain (like `www.yourname.com`)? Here's how:

### Step 1: Buy a Domain
- Popular registrars: Namecheap, Google Domains, GoDaddy
- Cost: $10-15/year typically

### Step 2: Configure DNS
Add these DNS records at your domain registrar:

**For apex domain (yourname.com):**
```
Type: A
Host: @
Value: 185.199.108.153
```
```
Type: A
Host: @
Value: 185.199.109.153
```
```
Type: A
Host: @
Value: 185.199.110.153
```
```
Type: A
Host: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: yourusername.github.io
```

### Step 3: Configure GitHub Pages
1. Go to repository Settings > Pages
2. Under "Custom domain", enter your domain
3. Click "Save"
4. Wait for DNS check (can take up to 48 hours)
5. Once verified, check "Enforce HTTPS"

## 📊 Analytics (Optional)

Want to see how many people visit your site?

### Google Analytics (Free)

1. **Create Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create account and property
   - Get your Measurement ID (G-XXXXXXXXXX)

2. **Add to Website**
   Add this code before `</head>` in all HTML files:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Commit and Push**
   - Save files
   - Commit and push changes
   - Analytics will start tracking in 24 hours

## 🔒 HTTPS/SSL

GitHub Pages automatically provides free HTTPS for your site!

- If using `yourusername.github.io`: HTTPS is automatic
- If using custom domain: Enable in Settings > Pages after DNS verification

## 🐛 Troubleshooting

### Site Not Loading

**Check Deployment Status:**
1. Go to repository > Actions tab
2. Look for latest deployment workflow
3. If failed, click to see error details

**Common Fixes:**
- Make sure repository name is exactly `yourusername.github.io`
- Check that repository is public
- Verify main branch is selected in Pages settings
- Wait 5 minutes and try again

### 404 Error

- Make sure `index.html` is in the root directory
- File names are case-sensitive (Index.html ≠ index.html)
- Check that all file paths are correct

### Images Not Loading

- Use relative paths: `images/photo.jpg` not `/images/photo.jpg`
- Check file extensions match (jpg vs JPG)
- Make sure images are committed and pushed

### Changes Not Showing

- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes after pushing
- Check Actions tab for deployment status
- Try incognito/private browsing mode

### Map Not Working

- Check browser console (F12) for errors
- Verify internet connection (map needs CDN)
- Make sure coordinates are numbers in `travel.js`

## 📱 Testing Before Deployment

Before deploying, test your site locally:

1. **Open `index.html`** in a web browser
2. **Test all pages:**
   - Click every navigation link
   - Test carousel arrows and dots
   - Click map markers
   - Try contact form
   - Check on mobile (resize browser)

3. **Check Console:**
   - Press F12 to open developer tools
   - Look for errors in Console tab
   - Fix any JavaScript errors

4. **Validate HTML:**
   - Go to [validator.w3.org](https://validator.w3.org)
   - Upload each HTML file
   - Fix any errors

## 🎯 Quick Checklist

Before deployment:
- [ ] All placeholder text replaced
- [ ] Photos uploaded and displaying
- [ ] Travel locations added
- [ ] Contact info updated
- [ ] Social media links working
- [ ] Tested locally in browser
- [ ] No console errors
- [ ] Tested on mobile view

After deployment:
- [ ] Site loads at yourusername.github.io
- [ ] All pages work
- [ ] Images display correctly
- [ ] Map loads and pins work
- [ ] Contact form works
- [ ] Mobile responsive works
- [ ] Shared with friends! 🎉

## 💡 Pro Tips

1. **Regular Updates**: Update your travel map as you visit new places
2. **Optimize Images**: Compress images before uploading to keep site fast
3. **Backup**: Keep a local copy of your site
4. **Version Control**: Use meaningful commit messages
5. **Mobile First**: Always test on mobile devices
6. **SEO**: Add descriptive page titles and meta descriptions
7. **Share**: Add your site URL to LinkedIn, resume, email signature

## 🆘 Need More Help?

- GitHub Pages Docs: [docs.github.com/pages](https://docs.github.com/pages)
- GitHub Community: [github.community](https://github.community)
- Stack Overflow: Search "GitHub Pages" + your issue

## 🎊 Congratulations!

Once deployed, you'll have a professional personal website that you can:
- Share on your resume/CV
- Link from social media profiles
- Send to potential employers
- Show friends and family
- Update anytime you want

Welcome to the web! 🌍

