# Complete Portfolio Project - Setup and Deployment Guide

## 📁 Project Structure

```
portfolio-project/
│
├── frontend/                    # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── App.jsx             # Main component (provided)
│   │   ├── App.css             # Styles (provided)
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json            # Frontend dependencies (provided)
│   ├── tailwind.config.js      # Tailwind configuration (provided)
│   └── postcss.config.js
│
└── backend/                     # Node.js Backend
    ├── server.js               # Express server (provided)
    ├── package.json            # Backend dependencies (provided)
    └── .env                    # Environment variables (create this)
```

## 🚀 Quick Start Guide

### Step 1: Set Up Frontend

```bash
# Create React app
npx create-react-app portfolio-frontend
cd portfolio-frontend

# Install dependencies
npm install lucide-react

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Copy the provided files:
# - Replace src/App.jsx with the provided App.jsx
# - Replace src/App.css with the provided App.css
# - Replace tailwind.config.js with the provided tailwind.config.js
```

### Step 2: Configure Frontend Files

**src/index.js:**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**src/index.css:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

**postcss.config.js:**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Step 3: Set Up Backend

```bash
# Create backend directory
mkdir portfolio-backend
cd portfolio-backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express nodemailer cors dotenv
npm install --save-dev nodemon

# Copy the provided server.js file
# Copy and rename package-backend.json to package.json
```

### Step 4: Configure Environment Variables

Create a `.env` file in the backend directory:

```env
EMAIL_USER=plsprakash2003@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=5000
NODE_ENV=development
```

**⚠️ Important:** Get your Gmail App Password:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Generate App Password for "Mail"
4. Use that password in EMAIL_PASS

### Step 5: Update Portfolio Content

In `frontend/src/App.jsx`, update these sections with your actual data:

1. **Social Links** (lines ~170-185):
```javascript
<a href="https://github.com/your-actual-username" ...>
<a href="https://linkedin.com/in/your-actual-username" ...>
```

2. **Project Links** (in the projects array):
```javascript
github: "https://github.com/your-username/project-name",
live: "https://your-project.vercel.app"
```

## 🎨 Customization Guide

### Change Color Scheme

In `tailwind.config.js`, modify the teal color:
```javascript
colors: {
  teal: {
    400: '#2dd4bf', // Change to your preferred color
    300: '#5eead4',
  },
}
```

### Add More Sections

You can add additional sections like:
- **Blog** - Link to your articles
- **Achievements** - Showcase your awards
- **Certifications** - Display your certificates

Example:
```javascript
<section id="achievements" className="mb-32 scroll-mt-16">
  <div className="lg:hidden mb-8">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
      Achievements
    </h2>
  </div>
  {/* Add your achievements content */}
</section>
```

## 🏃‍♂️ Running the Application

### Development Mode

**Terminal 1 - Frontend:**
```bash
cd portfolio-frontend
npm start
# Runs on http://localhost:3000
```

**Terminal 2 - Backend:**
```bash
cd portfolio-backend
npm run dev
# Runs on http://localhost:5000
```

### Production Build

**Frontend:**
```bash
cd portfolio-frontend
npm run build
# Creates optimized build in /build folder
```

## 🌐 Deployment Guide

### Deploy Frontend to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd portfolio-frontend
vercel
```

3. Follow prompts and your site will be live!

**Alternative:** Connect your GitHub repo to Vercel for automatic deployments.

### Deploy Backend to Render/Railway

**Option 1: Render.com**
1. Create account at render.com
2. New → Web Service
3. Connect your GitHub repo
4. Set environment variables in Render dashboard
5. Deploy!

**Option 2: Railway.app**
1. Create account at railway.app
2. New Project → Deploy from GitHub
3. Add environment variables
4. Deploy!

### Update Frontend API URL for Production

In `frontend/src/App.jsx`, update the fetch URL:
```javascript
// Change from:
const response = await fetch('http://localhost:5000/api/contact', {

// To:
const response = await fetch('https://your-backend-url.com/api/contact', {
```

## 📦 Complete File Checklist

### Frontend Files:
- ✅ App.jsx (Main component)
- ✅ App.css (Styles)
- ✅ package.json (Dependencies)
- ✅ tailwind.config.js (Tailwind config)
- ✅ postcss.config.js (PostCSS config)
- ✅ index.js (Entry point)
- ✅ index.css (Global styles)

### Backend Files:
- ✅ server.js (Express server)
- ✅ package.json (Dependencies)
- ✅ .env (Environment variables)

## 🔧 Troubleshooting

### CORS Issues
If you get CORS errors, update `server.js`:
```javascript
app.use(cors({
  origin: 'http://localhost:3000', // or your production URL
  credentials: true
}));
```

### Email Not Sending
1. Check .env file has correct credentials
2. Verify Gmail App Password is correct
3. Check console for error messages
4. Try using a different email service

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🎯 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scrolling navigation
✅ Active section highlighting
✅ Contact form with email notifications
✅ Professional dark theme
✅ Hover effects and transitions
✅ Accessibility features
✅ Production-ready code

## 📚 Resources

- **Portfolio Inspiration:** [Brittany Chiang](https://brittanychiang.com)
- **React Docs:** [react.dev](https://react.dev)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Nodemailer:** [nodemailer.com](https://nodemailer.com)

## 🤝 Support

If you need help:
1. Check the troubleshooting section
2. Review the error messages in console
3. Verify all environment variables are set
4. Ensure all dependencies are installed

## 📄 License

This portfolio template is based on Brittany Chiang's design and is free to use for personal projects.

---

**Built with ❤️ using React, TailwindCSS, Node.js, and Nodemailer**
