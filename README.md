# Mahure Coaching Classes

A premium, highly interactive, and responsive web application built for **mahure coaching classes**, a premier coaching academy specializing in Mathematics for Class 8th, 9th, and 10th CBSE preparation, taught by Mr. Nitin Mahure.

---

## 🚀 Technology Stack

This project is built using modern web development standards and optimized for high performance:
- **Core Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/) (extremely fast Hot Module Replacement)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (modern styling engine)
- **Routing:** [React Router v7](https://reactrouter.com/) (declarative routing system)
- **Animations:** [Framer Motion v12](https://www.framer.com/motion/) (smooth micro-interactions and transitions)
- **Icons:** [Lucide React](https://lucide.dev/) (clean, vector iconography)

---

## 🎨 Visual Design & Features

- **Rich Aesthetics:** Sleek, modern interface using tailored color palettes, subtle gradients, and glassmorphism.
- **Dynamic Math Background:** Floating, custom-rendered mathematical equations that drift smoothly in the background, creating an immersive educational atmosphere.
- **Theme Support:** Fully responsive Dark Mode and Light Mode, synced with user preferences via a global React Context.
- **Smooth Animations:** Framer Motion powering page-load animations, hover micro-effects, and interactive components.
- **Comprehensive Pages:**
  - **Home:** Hero section, core value propositions, and highlights.
  - **About:** Details about Mr. Nitin Mahure's teaching philosophy and coaching experience.
  - **Courses:** Detailed syllabus breakdowns for Class 8th, 9th, and 10th Mathematics.
  - **Results:** A gallery showcasing the academy's top performers and board exam scores.
  - **Resources:** A repository for students to download formula sheets, syllabus materials, and past question papers.
  - **Video Lectures:** Embedded educational videos directly pulled from Nitin Mahure's YouTube channel.
  - **Contact:** Interactive contact page featuring inquiry forms, direct calls, and location coordinates.

---

## 📂 Project Structure

```bash
mahureclasses/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Footer.jsx      # Navigation footer with contact details & socials
│   │   ├── MathBackground  # Canvas/CSS animation layer with floating math formulas
│   │   ├── Navbar.jsx      # Sticky navbar with mobile-responsive toggle and theme switcher
│   │   └── ScrollToTop.jsx # Helper to reset scroll position on route change
│   ├── context/
│   │   └── ThemeContext.js # Global Context provider for Dark/Light mode theme state
│   ├── data/
│   │   └── mathData.js     # Central mock data layer (toppers, resources, video lectures, reviews)
│   ├── pages/              # Main page layouts
│   │   ├── About.jsx       # Teacher biography and mission statement
│   │   ├── Contact.jsx     # Contact coordinates and inquiry forms
│   │   ├── Courses.jsx     # Curriculum structures and outcomes
│   │   ├── Home.jsx        # Landing page with stats, details, and testimonials
│   │   ├── Resources.jsx   # Document distribution portal with category filtering
│   │   ├── Results.jsx     # Student achievements gallery with class filters
│   │   └── VideoLectures   # YouTube embed player list with categorizations
│   ├── App.jsx             # Main Router container and page layouts
│   ├── App.css             # Main styling extensions
│   ├── index.css           # Tailwind configurations and global resets
│   └── main.jsx            # Application entry point
├── package.json            # NPM scripts and dependencies
├── requirement.file        # Checklists and client requirements for deployment
└── vite.config.js          # Vite configurations
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or later recommended) installed on your system.

### Installation

1. Navigate to the project root directory:
   ```powershell
   cd mahureclasses
   ```
2. Install all dependencies:
   ```powershell
   npm install
   ```

### Development Server

Run the local development server:
```powershell
npm run dev
```
The site will run on `http://localhost:5173/` by default.

### Production Build

Compile the application to highly optimized static assets:
```powershell
npm run build
```
To preview the production build locally:
```powershell
npm run preview
```

---

## 📋 Data Integration Status

The project currently runs on a mock data layer found in [mathData.js](file:///d:/example_projects/edtech/mahureclasses/src/data/mathData.js). To customize the site for production:
- Consult the [requirement.file](file:///d:/example_projects/edtech/mahureclasses/requirement.file) for a checklist of information required from the teacher (Mr. Nitin Mahure), including profile photos, maps embeds, PDFs for study materials, and actual topper directories.
