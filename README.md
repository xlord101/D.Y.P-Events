# 🏛️ D.Y. Patil Campus Event Hub

A premium, full-stack intelligence portal designed to manage campus innovation, technical symposiums, and student-led communities at D.Y. Patil University. Experience management at the speed of thought.

![Project Preview](https://images.unsplash.com/photo-1540575861501-7c0011e7398a?auto=format&fit=crop&q=80&w=1200)

## ✨ Key Features

- **Cinematic Public Portal**: High-impact landing page featuring glassmorphic design and background video hero sections.
- **Dynamic Club Directory**: Professional grid-based ecosystem for campus organizations (GDG, CSI, FOSS, etc.) with automated initial-based avatars.
- **Admin Command Center**: Centralized dashboard for real-time event management and community scaling.
- **Live Analytics**: Visual representation of campus engagement and event performance metrics.
- **Full-Stack Decoupled Architecture**: Robust Spring Boot REST API serving a high-performance React frontend.

## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS (Custom Glassmorphism System)
- **State/Routing**: React Router DOM
- **Icons**: Google Material Symbols

### Backend
- **Framework**: Java Spring Boot 3.2.0
- **Database**: MySQL / H2 (JPA/Hibernate)
- **API**: RESTful Architecture

## 🚀 Getting Started

### 1. Backend Setup
```bash
cd server
# Ensure JAVA_HOME points to JDK 17+
./mvnw spring-boot:run
```
*The server will start on `http://localhost:8080`*

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
*Access the portal at `http://localhost:5173`*

## 📁 Project Structure

- `/frontend`: React source code, components, and design tokens.
- `/server`: Spring Boot controllers, repositories, and JPA entities.
- `/docs`: Project technical walkthrough and viva reference.

## 🏛️ Acknowledgments
Designed and Developed for the **D.Y. Patil University** campus ecosystem.

---
© 2024 D.Y. Patil University. Atmospheric Technical OS.
