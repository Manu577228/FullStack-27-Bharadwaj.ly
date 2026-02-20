<br/>

<p align="center">
  <img src="https://i.postimg.cc/vBR2XghM/Bharadwaj.jpg" width="200" />
</p>

<h1 align="center">Bharadwaj.ly</h1>

<p align="center">
  <b>A Cloud-Native, Production-Grade URL Shortening Platform</b><br/>
  Built with React, Spring Boot, JWT Security & PostgreSQL
</p>

<p align="center">
  Modern Architecture • Secure by Design • Fully Deployed
</p>

---

## 🚀 Overview

**Bharadwaj.ly** is a fully deployed, production-ready full-stack URL shortening system engineered with modern web architecture and real-world deployment practices.

It demonstrates:

* Stateless JWT authentication
* Secure REST API design
* Clean layered backend architecture
* Modern frontend engineering
* Cloud-native deployment strategy
* Environment-driven configuration

This is not a demo project — it is a complete, working system running in production.

---

## 🌍 Live Deployment

**Frontend (Vercel Edge Network)**
https://url-shortener-frontend-by-manu.vercel.app

**Backend API (Render Cloud)**
https://url-shortener-sb-h9hc.onrender.com

**Database**
Neon PostgreSQL (Serverless)

---

## 🏗 System Architecture

```text
User (Browser)
      ↓
React + Vite (Vercel CDN Edge)
      ↓
Spring Boot REST API (Render Cloud)
      ↓
PostgreSQL (Neon Serverless Database)
```

✔ Stateless
✔ Secure
✔ Scalable
✔ Cloud-native

---

## 📁 Project Structure (Monorepo)

```
url-shortener-fullstack/
│
├── backend/
│   ├── controller/        # REST endpoints (Auth, URL APIs)
│   ├── service/           # Business logic layer
│   ├── repository/        # JPA repositories
│   ├── model/             # Entity classes (User, Url)
│   ├── security/          # JWT filter, CORS config, Security setup
│   ├── resources/
│   │   └── application.properties
│   ├── pom.xml
│   └── Dockerfile
│
├── frontend/
│   ├── api/               # Axios configuration
│   ├── components/        # Reusable UI components
│   ├── contextApi/        # Global authentication state
│   ├── pages/             # Login, Register, Dashboard
│   ├── routes/            # Protected routing logic
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

Structured. Modular. Maintainable.

---

## 🛠 Backend Stack (Spring Boot)

### Core Dependencies

* spring-boot-starter-web
* spring-boot-starter-data-jpa
* spring-boot-starter-security
* spring-boot-starter-validation
* JJWT (io.jsonwebtoken)
* PostgreSQL Driver
* Hibernate / JPA
* Lombok

### Backend Highlights

* Stateless JWT authentication
* Custom JWT filter integration
* Secure CORS configuration
* Protected API routes
* Docker-ready deployment
* Layered architecture (Controller → Service → Repository)

---

## 🎨 Frontend Stack (React + Vite)

### Installed Packages

* react
* react-router-dom
* axios
* react-hook-form
* react-hot-toast
* @mui/material
* react-icons
* tailwindcss
* vite

### Frontend Highlights

* Context API for auth state
* Protected routes
* Centralized Axios instance
* Environment-based API configuration
* Responsive Tailwind design
* Optimized production build

---

## 🔐 Security Model

* JWT-based stateless authentication
* Bearer token validation
* Protected endpoints
* Secure CORS origin control
* No hardcoded credentials
* Environment-based secrets

---

## ⚙️ Environment Configuration

### Backend

```
DATABASE_URL=
DATABASE_USERNAME=
DATABASE_PASSWORD=
JWT_SECRET=
FRONTEND_URL=
```

### Frontend

```
VITE_BACKEND_URL=
VITE_REACT_SUBDOMAIN=
```

---

## 📦 Local Development

### Clone

```bash
git clone https://github.com/manu577228/url-shortener-fullstack.git
cd url-shortener-fullstack
```

### Run Backend

```bash
cd backend
./mvnw spring-boot:run
```

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🚀 Engineering Principles Applied

* Clean architecture
* Stateless backend
* Secure authentication
* Cloud deployment
* Environment isolation
* Separation of concerns
* Production-ready structure

---

## 👨‍💻 Author

**Manu Bharadwaj**
Software Engineer | Full-Stack Developer

> Designed with intent.
> Engineered for scale.
> Deployed with confidence.

---

<p align="center">
  <b>Production Ready • Cloud Native • Full-Stack Engineered</b>
</p>

---

## 👨‍💻 Author

<p align="center">
  <b>Manu Bharadwaj</b><br/>
  Software Engineer • Full-Stack Developer • System Builder
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/manu-bharadwaj-3507a345/">
    <img src="https://img.shields.io/badge/LinkedIn-Manu%20Bharadwaj-0A66C2?style=for-the-badge&logo=linkedin" />
  </a>
  &nbsp;
  <a href="https://youtube.com/@code-with-Bharadwaj">
    <img src="https://img.shields.io/badge/YouTube-Code%20With%20Bharadwaj-FF0000?style=for-the-badge&logo=youtube" />
  </a>
</p>

<p align="center">
  <i>Building scalable systems. Teaching real engineering. Shipping production software.</i>
</p>

---

<p align="center">
  ⭐ If you like this project, consider giving it a star.
</p>

