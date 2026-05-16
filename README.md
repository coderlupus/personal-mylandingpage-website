# 🚀 Nathan Lopes | Professional Landing Page & Digital Solutions

A premium, high-performance landing page designed to showcase professional digital services, engineering expertise, and custom technological solutions. It serves as a converting business presence that details real-world services, automations, web applications, and proven credentials with a seamless bilingual user experience.

---

## 🌐 Live Preview & Purpose

This landing page acts as a modern digital portal to bridge business demands with bespoke software engineering solutions. It enables prospective clients and partners to explore tailored service models, inspect a detailed projects catalog, review academic certifications, and start direct consultations.

---

## ✨ Features & Architecture

* **🌐 Dual-Language Support (i18n)**: Full real-time translation between English and Portuguese (`pt-BR`) with language state detection using `i18next`.
* **🌊 Ultra-Smooth Motion**: Engineered with **Lenis Smooth Scroll** and **GSAP (GreenSock)** for a premium scroll-animation experience and tactile micro-interactions.
* **⚡ High-End Performance**: Powered by **Vite** and **React** for ultra-fast Hot Module Replacement (HMR) and optimized light-weight production bundles.
* **🔧 Component-Driven Design**: Structured using **Tailwind CSS** and **shadcn/ui** (Radix UI primitives) to ensure absolute responsiveness, modern aesthetics, and full accessibility.
* **📊 Data-Driven Proof**: Built-in interactive modules showing certified credentials, project catalogs, and structured categories (Commercial, Academic, Personal).
* **📝 Secure & Validated Contacts**: Solid lead-capture flow backed by **React Hook Form** and **Zod** schema validations.

---

## 🛠️ Technology Stack

This landing page is built using industry-grade tools and clean architecture guidelines:

* **Core Framework**: [React](https://react.dev/) (v18) + [Vite](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Styling & Theme**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Next Themes](https://github.com/pacocoursey/next-themes)
* **Motion & Physics**: [GSAP](https://gsap.com/) + [Lenis Scroll](https://lenis.darkroom.engineering/) + [Lottie React](https://github.com/rosslh/lottie-react)
* **Localization**: [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)
* **Forms & Schema Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
* **Router**: [React Router DOM](https://reactrouter.com/) (v6)

---

## 🚀 Getting Started

Follow these steps to set up the landing page development environment locally.

### Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [npm](https://www.npmjs.com/) 

### Installation & Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/nlopesr/personal-mylandingpage-website.git
   cd personal-mylandingpage-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the local development server**
   ```bash
   npm run dev
   ```

4. **Launch the Application**
   Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite in the terminal output).

---

## 📂 Project Structure

The codebase is organized cleanly for long-term scalability and ease of extension:

```
personal-mylandingpage-website/
├── src/
│   ├── components/       # Reusable UI components & layouts
│   │   ├── layout/       # Structural pieces (Navbar, Footer, EndCredit)
│   │   ├── sections/     # Modular Landing Page sections (Hero, About, Services, etc.)
│   │   └── ui/           # Atomic shadcn UI components
│   ├── hooks/            # Custom React hooks (state and lifecycle)
│   ├── lib/              # Shared utility functions (Tailwind merge, etc.)
│   ├── locales/          # Bilingual translation bundles (en.json, pt.json)
│   ├── pages/            # Page view controllers (Index, Projects, NotFound)
│   ├── App.tsx           # Application route definitions
│   └── main.tsx          # Application entrypoint
├── public/               # Static assets & document links
├── tailwind.config.ts    # Tailwind styling configurations
└── vite.config.ts        # Vite execution configurations
```

---

## 📜 Available Scripts

In the project directory, you can run:

* `npm run dev`: Runs the app in development mode with HMR.
* `npm run build`: Compiles and optimizes the application into a production-ready `./dist` bundle.
* `npm run preview`: Previews the production build locally.
* `npm run lint`: Performs static analysis checking for code quality and lint errors via ESLint.

---

## 📄 License & Contact

This project is proprietary and for personal use. All rights reserved.

Created by **Nathan Lopes**. For business inquiries or service discussions, please reach out via:
* **Email**: [nathanlpsr@gmail.com](mailto:nathanlpsr@gmail.com)
* **LinkedIn/WhatsApp**: Available directly on the live landing page.
