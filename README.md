# README.md - Portfolio Project

# 🎨 Modern Full-Stack Developer Portfolio

A beautiful, responsive portfolio website built with React, TailwindCSS, Node.js, and Express. Features a modern dark theme inspired by Brittany Chiang's portfolio design, with a fully functional contact form powered by Nodemailer.

![Portfolio Preview](https://img.shields.io/badge/Status-Production_Ready-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-38B2AC)
![Node.js](https://img.shields.io/badge/Node.js-14%2B-green)

## ✨ Features

- 🎯 **Clean, Modern Design** - Minimalist dark theme with teal accents
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Smooth Animations** - Subtle hover effects and transitions
- 📧 **Contact Form** - Working email integration with Nodemailer
- 🚀 **Fast Performance** - Optimized for production deployment
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎪 **Interactive Navigation** - Smooth scrolling with active section highlighting
- 💼 **Professional** - Perfect for showcasing your work to recruiters and clients

## 📸 Portfolio Sections

1. **About** - Introduction and tech stack
2. **Experience** - Work history and internships
3. **Projects** - Showcase of your best work
4. **Contact** - Functional contact form

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **JavaScript** - Programming language

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Installation

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager
- Gmail account (for email functionality)

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to frontend directory
cd portfolio/frontend

# Install dependencies
npm install

# Start development server
npm start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
# Navigate to backend directory
cd portfolio/backend

# Install dependencies
npm install

# Create .env file and add your credentials
echo "EMAIL_USER=your-email@gmail.com" > .env
echo "EMAIL_PASS=your-app-password" >> .env
echo "PORT=5000" >> .env

# Start development server
npm run dev
```

The backend will run on `http://localhost:5000`

## ⚙️ Configuration

### Email Setup (Gmail)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Generate an App Password:
   - Search for "App passwords"
   - Select "Mail" and your device
   - Copy the 16-character password
4. Add to `.env` file:
```env
EMAIL_USER=plsprakash2003@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### Customization

**Update Personal Information** in `frontend/src/App.jsx`:

```javascript
// Line 170-185: Social Links
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_USERNAME" ...>

// Line 145-155: Projects array
projects: [
  {
    github: "https://github.com/YOUR_USERNAME/project",
    live: "https://your-project.vercel.app"
  }
]
```

**Change Colors** in `frontend/tailwind.config.js`:

```javascript
colors: {
  teal: {
    400: '#2dd4bf', // Primary color
  },
}
```

## 🚀 Deployment

### Deploy Frontend (Vercel - Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy Backend (Render.com)

1. Create account at [render.com](https://render.com)
2. New Web Service → Connect repository
3. Add environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `PORT=5000`
4. Deploy!

### Update Production API URL

In `frontend/src/App.jsx`, line ~65:

```javascript
// Development
const response = await fetch('http://localhost:5000/api/contact', {

// Production
const response = await fetch('https://your-backend.onrender.com/api/contact', {
```

## 📂 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx           # Main component
│   │   ├── App.css           # Custom styles
│   │   ├── index.js          # Entry point
│   │   └── index.css         # Global styles
│   ├── package.json
│   └── tailwind.config.js
│
└── backend/
    ├── server.js             # Express server
    ├── package.json
    └── .env                  # Environment variables
```

## 🎯 Key Features Explained

### Smooth Scrolling Navigation
The portfolio uses intersection observers to detect which section is visible and updates the navigation accordingly.

### Contact Form
- Client-side validation
- Server-side validation
- Sends email to portfolio owner
- Sends confirmation email to sender
- Professional HTML email templates
- Error handling and user feedback

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly mobile menu
- Optimized for all screen sizes

## 🐛 Troubleshooting

### CORS Errors
```javascript
// In backend/server.js
app.use(cors({
  origin: 'http://localhost:3000', // or production URL
  credentials: true
}));
```

### Email Not Sending
1. Verify Gmail App Password
2. Check .env file configuration
3. Ensure 2-Step Verification is enabled
4. Check spam folder

### Build Errors
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources & Inspiration

- **Design Inspiration:** [Brittany Chiang's Portfolio](https://brittanychiang.com)
- **Icons:** [Lucide Icons](https://lucide.dev)
- **Fonts:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Loka Surya Prakash Pentakota**

- Email: plsprakash2003@gmail.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspiration from [Brittany Chiang](https://brittanychiang.com)
- Portfolio examples from [Awwwards](https://www.awwwards.com)
- React community for amazing tools and libraries

## 📞 Support

For support, email plsprakash2003@gmail.com or open an issue in the repository.

---

**⭐ If you like this portfolio template, please give it a star on GitHub!**

**Built with ❤️ using React, TailwindCSS, Node.js, Express, and Nodemailer**
