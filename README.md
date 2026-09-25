# 💼 Banvari Sandeep — Portfolio

A modern, responsive, and interactive **Personal Developer Portfolio Web Application** built using **React 19, Vite, and Modern CSS**. This portfolio highlights my journey, skills, and projects as a **Python Full-Stack Developer**, offering an engaging digital experience with interactive project showcases, filterable skills matrix, resume preview, and smooth navigation.

---

## 🚀 Features

* Responsive design optimized for Desktop, Laptop, Tablet, and Mobile devices
* Modern sleek theme with vibrant accents and glassmorphism styling
* Interactive Hero section with cursive signature branding and call-to-actions
* Filterable project showcase (*All*, *Full Stack*, *Frontend*, *Python & DB*) with GitHub and live demo links
* Dynamic technical skills categorization with custom developer icons
* Work experience and internship timeline with detailed responsibilities
* Education journey and industry certification badges
* Services offered and core soft skills showcase
* Technical articles & blogs section
* Interactive Resume Modal with embedded viewer and instant PDF download/print
* Contact section with input validation, mailto integration, and social links
* Single-page routing rewrite support (`vercel.json`) to prevent 404 errors on page reload

---

## 🛠️ Technologies Used

* **React 19** – Functional components, Hooks, and modern SPA architecture
* **Vite 8** – Ultra-fast build tool and development server
* **CSS3** – Flexbox, CSS Grid, media queries, variables, and smooth animations
* **JavaScript (ES6+)** – Component logic, state management, and event handling
* **Lucide React** – Clean, modern UI icon pack
* **Python & MySQL** – Core backend and database proficiencies showcased in projects
* **Vercel** – Cloud hosting and continuous deployment

---

## 📂 Project Structure

```text
Sandeep_Portfolio/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── profile.jpg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── profile.jpg
│   │   ├── Sandeep_Portfolio.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Illustrations.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeModal.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── SoftSkills.jsx
│   │   └── TechnicalArticles.jsx
│   │
│   ├── data/
│   │   ├── certifications.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── services.js
│   │   └── skills.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── Sandeep_Banvari_Python_Resume.pdf
│
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```

---

## 📄 Sections & Components

### 🏠 Hero
* Personal brand tagline & signature cursive logo
* Direct call-to-action buttons ("View Work", "Contact Me", "Resume")
* Social links (GitHub, LinkedIn, Email)

### 👨‍💻 About Me
* Professional summary as a Python Full-Stack Developer
* Core strengths in frontend responsiveness, Python scripting, and relational databases

### 🎓 Education
* B.Tech in Computer Science Engineering — Krishna University (2022 – 2026)
* Intermediate (MPC) — SAV & NVJR Junior College
* SSC — Zilla Parishad High School

### ⚡ Skills
* **Frontend**: ReactJS, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap 5
* **Backend & DB**: Python, SQL, MySQL
* **Core Concepts**: Full Stack Development, Responsive Design, OOP, REST APIs
* **Developer Tools**: Git, GitHub, VS Code

### 💼 Experience & Internships
* **RINL Vizag Steel Plant** — Full Stack Development Intern (REST APIs, responsive layouts, data synchronization)
* **Datavalley India Pvt. Ltd.** — Web & App Development Intern (ReactJS components, Git workflows)

### 💻 Projects Showcase
* **Eco Track AI** — Smart sustainability & carbon emission tracking platform (ReactJS, Python, MySQL, REST API)
* **Villa Project** — Luxury real estate portal with booking flow (HTML5, CSS3, JavaScript)
* **Employee Management System** — Comprehensive CRUD management with OOP architecture (Python, MySQL)
* **Tech Shop** — Audio products e-commerce store with cart & catalog (HTML5, CSS3, JavaScript)
* **Random Quote Generator** — Real-time quote fetcher via external REST API

### 📜 Certifications
* Full Stack Web Development — RINL Vizag Steel Plant
* Web & App Development — Datavalley India Pvt. Ltd.

### 🛠️ Services
* Full Stack Web Development
* Responsive Frontend Design
* Database Architecture & Management
* RESTful API Integration

### 🤝 Soft Skills & Values
* Continuous Learning, Problem Solving, Collaborative Teamwork, Attention to Detail

### ✍️ Technical Articles
* Curated technical insights on Full Stack development, React patterns, and Python best practices

### 📞 Contact
* Interactive contact form with input validation and instant mail launch
* Direct phone, email, location details, and social channels
* Back-to-top quick navigation

### 📄 Resume Modal
* High-definition preview of resume with built-in print and download options

---

## ✨ Key Functionalities

* **Dynamic Project Filtering**: Filter projects seamlessly across multiple categories
* **Interactive Resume Viewer**: View and download resume without leaving the page
* **Form Validation**: Client-side validation for name, email, and message inputs
* **Smooth Scrolling Navigation**: Easy anchor-based movement across sections
* **Vercel SPA Rewrites**: Configured `vercel.json` rewrites to eliminate 404 errors when reloading routes
* **Mobile-First Responsive Layout**: Consistent user experience across screen sizes

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sandeepbanvari/sandeep-portfolio.git
cd sandeep-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

```bash
npm run build
```

---

## 🌐 Vercel Deployment & 404 Reload Fix

When deploying Single Page Applications (SPAs) on Vercel, reloading the page on subpaths or direct route hits can cause a **404: NOT_FOUND** error because Vercel looks for a static file matching that route.

This project includes [`vercel.json`](./vercel.json) in the root directory:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all route requests are served by `index.html` and handled smoothly by React on the client side.

---

## 📱 Responsive Design

The application is thoroughly tested and optimized for:

* Desktop Monitors
* Laptops
* Tablets (iPad / Android tablets)
* Mobile Devices (iOS / Android)

---

## 📌 Future Enhancements

* Dark / Light mode toggle switch
* Live backend API for direct contact form messaging (Node.js / Express or FastAPI)
* Dynamic CMS / Markdown blog integration
* Project filter search bar with real-time text query
* Multilingual support (English / Telugu / Hindi)

---

## 👨‍💻 Author

**Banvari Sandeep**

* **GitHub**: [github.com/sandeepbanvari](https://github.com/sandeepbanvari)
* **LinkedIn**: [linkedin.com/in/sandeep-banvari](https://www.linkedin.com/in/sandeep-banvari/)
* **Email**: [sandeepbanvari2004@gmail.com](mailto:sandeepbanvari2004@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## ⭐ Support

If you found this portfolio project useful or inspiring, please consider giving it a **⭐ Star** on GitHub!
