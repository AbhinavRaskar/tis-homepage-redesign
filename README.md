# Tulas International School (TIS) — Homepage Redesign

A modern, animated, responsive homepage redesign for **Tulas International School (TIS)**, built as a frontend development assessment project.

The project focuses on creating a premium school website experience with modern UI design, smooth animations, responsive layouts, clear calls-to-action, and a modular React component architecture while retaining the core identity and information of Tulas International School.

---

## 🌐 Live Demo

**Live Website:**  
https://tis-homepage-redesign-eight.vercel.app/

**GitHub Repository:**  
https://github.com/AbhinavRaskar/tis-homepage-redesign

**Original Website:**  
https://tis.edu.in/

---

## ✨ Project Highlights

- Modern premium school website design
- Fully responsive layout
- Component-based React architecture
- Smooth scroll animations
- Scroll-triggered section reveals
- Custom cursor interaction
- Scroll progress indicator
- Animated UI interactions
- Responsive mobile navigation
- Interactive call-to-action buttons
- School information sections
- Academics and admissions sections
- Campus and sports sections
- Testimonials section
- Contact information
- Responsive footer
- Smooth scrolling experience

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3

### Animation

- Framer Motion

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

### Deployment

- Vercel

---

## 📁 Project Structure

```text
tis-homepage-redesign/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── hero.png
│   │   ├── images.js
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   │
│   │   ├── animation/
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── Reveal.jsx
│   │   │   └── ScrollProgress.jsx
│   │   │
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── SectionLabel.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Academics.jsx
│   │       ├── Admissions.jsx
│   │       ├── Campus.jsx
│   │       ├── Contact.jsx
│   │       ├── Hero.jsx
│   │       ├── Sports.jsx
│   │       ├── Stats.jsx
│   │       └── Testimonial.jsx
│   │
│   ├── data/
│   │   └── schoolData.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

# 🧩 Component Architecture

The application is divided into reusable components instead of placing the complete website inside a single component.

### Animation Components

#### `CustomCursor.jsx`

Provides a custom mouse-following cursor interaction for desktop users.

The cursor is disabled or reduced on touch-based devices to maintain usability.

#### `Reveal.jsx`

Reusable scroll-triggered animation wrapper used to reveal sections and content as they enter the viewport.

#### `ScrollProgress.jsx`

Displays a progress indicator at the top of the page based on the user's scroll position.

---

### Common Components

#### `Button.jsx`

Reusable button component used throughout the website for consistent CTA styling.

#### `SectionLabel.jsx`

Reusable label component used to maintain consistent section headings.

#### `ScrollToTop.jsx`

Provides smooth navigation back to the top of the page.

---

### Layout Components

#### `Navbar.jsx`

Contains:

- Main navigation
- Mobile navigation
- Navigation links
- CTA
- Responsive behavior

#### `Footer.jsx`

Contains:

- School information
- Navigation
- Contact information
- Social links
- Copyright information

---

### Page Sections

#### `Hero.jsx`

Main landing section containing:

- Primary headline
- Supporting content
- CTA buttons
- Hero visual
- Animated elements

#### `About.jsx`

Introduces Tulas International School and communicates its educational philosophy and positioning.

#### `Academics.jsx`

Highlights academic offerings and learning-focused information.

#### `Admissions.jsx`

Provides information and CTA elements related to the admissions process.

#### `Campus.jsx`

Showcases the school campus and learning environment.

#### `Sports.jsx`

Highlights sports and extracurricular opportunities.

#### `Stats.jsx`

Displays key school statistics using visual counters/cards.

#### `Testimonial.jsx`

Displays parent/student testimonial content.

#### `Contact.jsx`

Provides school contact information and enquiry CTA.

---

# ✨ Standout Features

## 1. Custom Cursor

A custom animated cursor is implemented for desktop users.

The cursor follows the mouse and provides additional interaction feedback when hovering over interactive elements.

Touch devices do not use the custom cursor so that mobile usability is not affected.

---

## 2. Scroll-Triggered Reveals

Sections and content elements animate into view as the user scrolls through the page.

The animation system is implemented through a reusable `Reveal` component to avoid duplicating animation logic.

---

## 3. Scroll Progress Bar

A fixed progress indicator at the top of the page visually communicates how far the user has progressed through the homepage.

---

## 4. Responsive Navigation

The navigation adapts to different screen sizes.

### Desktop

Full navigation menu with CTA.

### Mobile

Compact navigation with a mobile-friendly menu and touch-friendly controls.

---

# 📱 Responsive Design

The website has been designed for multiple viewport sizes.

### Mobile

```text
375px+
```

### Tablet

```text
768px+
```

### Desktop

```text
1280px+
```

The layout uses responsive CSS techniques to adapt:

- Typography
- Spacing
- Navigation
- Cards
- Images
- Buttons
- Grid layouts
- Section layouts

---

# 🎨 Design Approach

The redesign follows a modern premium educational website aesthetic.

The design focuses on:

- Strong visual hierarchy
- Clean typography
- Premium spacing
- High-quality imagery
- Clear CTA placement
- Consistent visual language
- Smooth micro-interactions
- Responsive layouts
- Accessible interactive elements

The objective is to create a website that feels modern while maintaining the identity of Tulas International School.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

You can verify the installation with:

```bash
node --version
```

```bash
npm --version
```

---

## 1. Clone the Repository

```bash
git clone https://github.com/AbhinavRaskar/tis-homepage-redesign.git
```

Navigate into the project:

```bash
cd tis-homepage-redesign
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

To create a production build:

```bash
npm run build
```

The production files are generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

# 🚀 Deployment

The project is deployed using **Vercel**.

### Deployment Flow

```text
Local React Project
        ↓
       Git
        ↓
     GitHub
        ↓
     Vercel
        ↓
   Live Website
```

### Production URL

https://tis-homepage-redesign-eight.vercel.app/

---

# 🔄 Updating the Deployment

After making changes locally:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Update homepage"
```

Push the changes:

```bash
git push
```

Vercel automatically creates a new deployment from the updated GitHub repository.

---

# 📊 Performance & Code Quality

The project was developed with the following principles:

- Reusable React components
- Semantic HTML
- Modular file structure
- Responsive CSS
- Reusable animation components
- Minimal unnecessary state
- Optimized production build
- No hardcoded development URLs
- Clean Git history
- Responsive navigation
- Mobile-first considerations

The production build has been tested using:

```bash
npm run build
```

---

# 🔐 Environment Variables

The project does not require sensitive environment variables for the basic homepage deployment.

If environment variables are added in the future, they should not be committed to GitHub.

Use:

```text
.env
.env.local
```

and keep them inside `.gitignore`.

---

# 🧪 Testing Checklist

Before deployment, the following areas should be tested:

- [x] Production build
- [x] Desktop layout
- [x] Responsive layout
- [x] Navigation
- [x] Animations
- [x] Scroll progress
- [x] Custom cursor
- [x] CTA buttons
- [x] Images
- [x] Footer
- [x] Contact section
- [x] GitHub repository
- [x] Vercel deployment

---

# 📌 Assessment Requirements

This project addresses the primary requirements of the TIS frontend assessment:

| Requirement | Implementation |
|---|---|
| React.js | ✅ |
| Responsive design | ✅ |
| Modern UI | ✅ |
| Animations | ✅ |
| Scroll-triggered reveals | ✅ |
| Custom cursor | ✅ |
| Scroll progress | ✅ |
| Component architecture | ✅ |
| GitHub repository | ✅ |
| Vercel deployment | ✅ |

---

# 🏫 About Tulas International School

**Tulas International School (TIS)** is an educational institution focused on providing students with a holistic learning environment combining academics, extracurricular activities, sports, and personal development.

The redesign presents the school's information through a modern, visual, and conversion-focused homepage experience.

Official website:

https://tis.edu.in/

---

# 👨‍💻 Developer

**Abhinav Raskar**

Full Stack Developer | React.js | MERN Stack

GitHub:

https://github.com/AbhinavRaskar

LinkedIn:

https://www.linkedin.com/in/abhinavraskar/

---

# 📄 License

This project was created as a frontend development assessment/design exercise for Tulas International School.

The project should not be treated as an official Tulas International School website unless explicitly authorized by the school.

---

## ⭐ Acknowledgements

- Tulas International School
- React.js
- Vite
- Framer Motion
- Vercel
- GitHub

---

**Built with React + Vite by Abhinav Raskar.**