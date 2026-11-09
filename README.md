<p align="center">
  <img src="https://i.postimg.cc/vBR2XghM/Bharadwaj.jpg" width="160" alt="Bharadwaj.ly logo" />
</p>

<h1 align="center">Bharadwaj.ly</h1>

<p align="center">
  <b>A full-stack URL shortener with JWT authentication, deployed end to end in the cloud.</b><br/>
  React + Vite · Spring Boot · PostgreSQL
</p>

<p align="center">
  <a href="https://url-shortener-frontend-by-manu.vercel.app"><b>Live Demo</b></a>
  &nbsp;•&nbsp;
  <a href="https://url-shortener-sb-h9hc.onrender.com"><b>Backend API</b></a>
  &nbsp;•&nbsp;
  <a href="https://youtube.com/@code-with-Bharadwaj"><b>YouTube</b></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Live Deployment](#live-deployment)
- [Architecture](#architecture)
- [Authentication Flow](#authentication-flow)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Security](#security)
- [Environment Variables](#environment-variables)
- [Run Locally](#run-locally)
- [Engineering Principles](#engineering-principles)
- [Author](#author)

---

## Overview

**Bharadwaj.ly** is a full-stack URL shortening application that is live in production. A React single-page app talks to a Spring Boot REST API, which stores data in a serverless PostgreSQL database.

The project focuses on getting the fundamentals right:

- Stateless JWT authentication with a custom Spring Security filter
- A layered backend: Controller → Service → Repository
- Protected API routes and protected frontend routes
- Explicit, environment-driven CORS configuration
- Configuration and secrets supplied through environment variables, none hardcoded
- A Dockerized backend and a three-provider cloud deployment

---

## Live Deployment

| Layer | Platform | Link |
|-------|----------|------|
| Frontend | Vercel | [url-shortener-frontend-by-manu.vercel.app](https://url-shortener-frontend-by-manu.vercel.app) |
| Backend API | Render | [url-shortener-sb-h9hc.onrender.com](https://url-shortener-sb-h9hc.onrender.com) |
| Database | Neon (serverless PostgreSQL) | managed instance |

---

## Architecture

```mermaid
flowchart TD
    A[User Browser] --> B[React + Vite<br/>hosted on Vercel]
    B -->|HTTPS · Axios · Bearer JWT| C[Spring Boot REST API<br/>hosted on Render]
    C -->|Spring Data JPA / Hibernate| D[(PostgreSQL<br/>hosted on Neon)]
```

**Backend request path:** `JWT filter → Controller → Service → Repository → Database`

---

## Authentication Flow

```mermaid
sequenceDiagram
    participant U as Browser (React)
    participant API as Spring Boot API
    participant DB as PostgreSQL

    U->>API: Register / Login
    API->>DB: Create or verify user
    API-->>U: Signed JWT
    U->>API: Protected request with Authorization: Bearer <token>
    API->>API: Custom JWT filter validates the token
    API->>DB: Business logic via Service and Repository
    API-->>U: Response
```

The server keeps no session state. Every protected request carries its own token.

---

## Tech Stack

### Backend

| Area | Technology |
|------|------------|
| Framework | Spring Boot (`spring-boot-starter-web`) |
| Persistence | Spring Data JPA, Hibernate, PostgreSQL driver |
| Security | Spring Security, JJWT (`io.jsonwebtoken`) |
| Validation | `spring-boot-starter-validation` |
| Utilities | Lombok |
| Build and Deploy | Maven, Docker |

### Frontend

| Area | Technology |
|------|------------|
| Core | React, Vite |
| Routing | `react-router-dom` |
| HTTP | Axios (single centralized instance) |
| Forms | `react-hook-form` |
| UI | Tailwind CSS, Material UI (`@mui/material`), `react-icons` |
| Feedback | `react-hot-toast` |
| State | Context API (global auth state) |

---

## Project Structure

Monorepo with a separate backend and frontend.

```text
url-shortener-fullstack/
│
├── backend/
│   ├── controller/        # REST endpoints (Auth, URL APIs)
│   ├── service/           # Business logic layer
│   ├── repository/        # JPA repositories
│   ├── model/             # Entity classes (User, Url)
│   ├── security/          # JWT filter, CORS config, security setup
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

---

## Security

- JWT-based, stateless authentication
- Bearer token validation through a custom filter
- Protected API endpoints and protected frontend routes
- CORS restricted to the configured frontend origin
- No hardcoded credentials; all secrets come from environment variables

---

## Environment Variables

Create these before running or deploying. Never commit real values.

### Backend

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL connection URL |
| `DATABASE_USERNAME` | Database user |
| `DATABASE_PASSWORD` | Database password |
| `JWT_SECRET` | Secret used to sign and verify JWTs |
| `FRONTEND_URL` | Frontend origin allowed through CORS |

### Frontend

| Variable | Purpose |
|----------|---------|
| `VITE_BACKEND_URL` | Base URL of the backend API |
| `VITE_REACT_SUBDOMAIN` | Frontend subdomain setting |

---

## Run Locally

### Prerequisites

- A JDK compatible with the version configured in `backend/pom.xml`
- Node.js and npm
- A PostgreSQL database (local, or a Neon project)

### 1. Clone

```bash
git clone https://github.com/manu577228/url-shortener-fullstack.git
cd url-shortener-fullstack
```

### 2. Start the backend

Set the backend environment variables listed above, then:

```bash
cd backend
./mvnw spring-boot:run
```

### 3. Start the frontend

Set the frontend environment variables (for example in a `.env` file inside `frontend/`), then:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL that Vite prints in the terminal.

---

## Engineering Principles

- **Separation of concerns:** controller, service, repository and model layers on the backend; pages, components, API and routes on the frontend
- **Stateless backend:** authentication travels with every request
- **Environment isolation:** the same code runs locally and in production, with differences kept in configuration
- **Secure defaults:** protected routes, restricted CORS, no secrets in source control

---

## Author

<p align="center">
  <b>Manu Bharadwaj</b><br/>
  Software Engineer · Full-Stack Developer
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/manu-bharadwaj-3507a345/">
    <img src="https://img.shields.io/badge/LinkedIn-Manu%20Bharadwaj-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://youtube.com/@code-with-Bharadwaj">
    <img src="https://img.shields.io/badge/YouTube-Code%20With%20Bharadwaj-FF0000?style=for-the-badge&logo=youtube" alt="YouTube" />
  </a>
</p>

---

<p align="center">
  If you find this project useful, consider giving it a ⭐
</p>
