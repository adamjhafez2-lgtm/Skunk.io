# Skunk.io - Discord Bot Website

A minimalistic black and white website for the Skunk.io Discord bot.

## Project Structure

```
/tmp/cc-agent/59641737/project/
├── app/
│   ├── credits/
│   │   └── page.tsx          # Credits page
│   ├── license/
│   │   └── page.tsx          # License page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── FlipCard.tsx           # Interactive flip card component
│   ├── Footer.tsx             # Footer with copyright
│   └── Navigation.tsx         # Navigation bar
├── public/
│   └── skunk-logo.png         # Skunk logo
├── data/
│   └── Credits.txt            # Credits data
└── package.json
```

## How to Push to GitHub

### 1. Initialize Git (if not already done)
```bash
cd /tmp/cc-agent/59641737/project
git init
```

### 2. Add all files
```bash
git add .
```

### 3. Create first commit
```bash
git commit -m "Initial commit - Skunk.io website"
```

### 4. Create a new repository on GitHub
- Go to https://github.com/new
- Create a new repository (e.g., "skunk-io-website")
- Don't initialize with README, .gitignore, or license

### 5. Add remote and push
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## How to Deploy on Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign up/login
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: Leave default (Next.js detects automatically)
5. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and deploy to production:
```bash
vercel --prod
```

## Features

- **Home Page**: Welcome message, flip card animation, contact info, and credits preview
- **Credits Page**: Full credits for all team members
- **License Page**: Displays the project license from GitHub
- **Responsive Design**: Works on all devices
- **Minimalistic**: Clean black and white design
- **Interactive Card**: Hover effects and flip animation

## Font Note

The Panicko font is referenced in the CSS. To use it:

1. Download the Panicko font from:
   - https://www.dafont.com/panicko.font
   - https://justtheskills.com/product/gaming-font-panicko/

2. Convert to web fonts (WOFF/WOFF2) using a service like:
   - https://transfonter.org/
   - https://www.fontsquirrel.com/tools/webfont-generator

3. Create a `public/fonts/` directory and add the font files

4. The CSS is already configured to use the font

## Development

```bash
npm run dev
```

Open http://localhost:3000 to view in browser.

## Build

```bash
npm run build
```

## License

Copyright (c) 2025 Skunk.io Team
