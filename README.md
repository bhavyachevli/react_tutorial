# React Tutorial Project - Vite + React

A modern React application built with Vite, featuring multiple pages including Home, About, Shop, Review, Contact, and Admin sections.

## 🚀 Tech Stack

- **React 18.3.1** - UI library
- **Vite 5.4.2** - Build tool and dev server
- **React Router DOM 6.30.1** - Routing
- **Bootstrap 5.3.8** - CSS framework
- **Font Awesome 7.0.1** - Icons

## 📋 Prerequisites

- Node.js 22.x or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react_tutorial
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Server
```bash
npm run dev
# or
npm start
```
The app will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
The build output will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
react_tutorial/
├── public/              # Static assets
│   ├── assets/         # CSS, JS, and fonts
│   └── images/         # Image files
├── src/                # Source code
│   ├── About/          # About page components
│   ├── Admin/          # Admin page components
│   ├── Contact/        # Contact page components
│   ├── Home/           # Home page components
│   ├── Review/         # Review page components
│   ├── Shop/           # Shop page components
│   ├── Header.jsx      # Header component
│   ├── Footer.jsx      # Footer component
│   └── main.jsx        # Entry point
├── contact-api/        # Backend API (Flask)
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm start` - Alias for dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Pages

- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - About page
- **Shop** (`/shop`) - Product listing page
- **Review** (`/review`) - Reviews page
- **Contact** (`/contact`) - Contact form page
- **Admin** (`/admin`) - Admin dashboard

## 🔌 Backend API

The project includes a Flask backend API in the `contact-api/` directory for handling contact form submissions.

To run the backend:
```bash
cd contact-api
pip install -r requirements.txt
python app.py
```

## 📝 Environment Variables

Create a `.env` file in the root directory if needed:
```
VITE_API_URL=http://127.0.0.1:5000
```

## 🚀 Deployment

### GitHub Pages
The project is configured for GitHub Pages deployment. Push to the `main` branch and GitHub Actions will automatically build and deploy.

### Other Platforms
- **Netlify**: Connect your GitHub repo and set build command to `npm run build` and publish directory to `dist`
- **Vercel**: Connect your GitHub repo, it will auto-detect Vite settings
- **AWS S3/CloudFront**: Upload the `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and for personal use.

## 👤 Author

Bhavya

---

Made with ❤️ using Vite + React
