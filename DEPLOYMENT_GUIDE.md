# Portfolio Deployment Guide - Vercel

## Step 1: Prepare Your Portfolio

Your portfolio is ready! All components are created and configured.

## Step 2: Push to GitHub

1. Initialize git (if not done):
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

2. Create a GitHub repository at https://github.com/new
3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy on Vercel

### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts:
   - Link to existing project? → No
   - Set project name → portfolio
   - Framework → Create React App
   - Root directory → ./
   - Build command → npm run build
   - Output directory → build

### Option B: Using Vercel Web Dashboard

1. Go to https://vercel.com/signup
2. Sign up with GitHub
3. Click "New Project"
4. Select your portfolio repository
5. Click "Import"
6. Framework → Create React App
7. Click "Deploy"

## Step 4: Update Social Links

Edit these files to add your actual links:
- `src/components/Navbar.tsx` - GitHub, LinkedIn, Email
- `src/components/Hero.tsx` - GitHub, LinkedIn, Email, Resume link
- `src/components/Contact.tsx` - Email, Phone, GitHub, LinkedIn

## Step 5: Customize Content

Update your information in:
- `src/components/About.tsx` - Your bio and strengths
- `src/components/Projects.tsx` - Your actual projects
- `src/components/Skills.tsx` - Your technical skills
- `src/components/Education.tsx` - Your education details
- `src/components/Certifications.tsx` - Your certifications

## Step 6: Add Resume PDF

1. Place your resume in `public/resume.pdf`
2. Update the download link in `src/components/Hero.tsx`

## Deployment Complete!

Your portfolio will be live at: `https://your-project-name.vercel.app`

### Custom Domain (Optional)

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add your custom domain
5. Follow DNS setup instructions
