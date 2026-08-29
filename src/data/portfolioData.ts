// ==========================================================================
// PORTFOLIO DATA CONFIGURATION (คลังข้อมูลหลักของเว็บไซต์)
// หากต้องการแก้ไขข้อความ เพิ่มโปรเจกต์ หรือเปลี่ยนทักษะ สามารถแก้ไขในไฟล์นี้ได้เลย
// ==========================================================================

import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
    // ----------------------------------------------------------------------
    // 1. TYPED.JS TEXTS (ชุดข้อความพิมพ์สลับในส่วนต้อนรับ Hero Section)
    // ----------------------------------------------------------------------
    typingStrings: [
        "Full Stack Web Development",
        "Software engineer"
    ],

    // ----------------------------------------------------------------------
    // 2. PROJECTS (รายการผลงานทั้งหมดที่แสดงในส่วน Featured Projects)
    // ----------------------------------------------------------------------
    projects: [
        {
            id: 1,
            title: "Personal Portfolio Website",
            category: "frontend",
            image: "imgportfolio/portfolio.png",
            icon: "bx-layout",
            description: "A responsive modern glassmorphism portfolio website built with React, TypeScript, and Tailwind CSS.",
            longDescription: "A high-performance personal portfolio engineered with React 19, TypeScript, Vite 8, and Tailwind CSS v4. Designed with ultra-modern Glassmorphism UI tokens, interactive background particles, glow cursor follower, project category filters, and real-time color theme switching.",
            features: [
                "Full Glassmorphism UI with multi-layered blur & sheen effects",
                "Real-time Accent Theme Glow Switcher (Emerald, Purple, Cyan)",
                "Interactive floating glass particle canvas background",
                "Project filter tabs and detail modal popup",
                "One-click contact copy with glass toast notifications"
            ],
            tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            github: "https://github.com/PHmeen/Portfolio-Phathit",
            demo: "https://phmeen.github.io/Portfolio-Phathit/",
            demoText: "Live Demo"
        },
        {
            id: 2,
            title: "RSP-South-Catering",
            category: "fullstack",
            image: "imgportfolio/RSP CAT.png",
            icon: "bx-dish",
            description: "A comprehensive meeting room food & beverage reservation web application for Southern Regional Science Park.",
            longDescription: "An end-to-end full-stack web application created for the Southern Regional Science Park (PSU) to streamline meeting room catering operations. Built using Next.js App Router, TypeScript, and Tailwind CSS for real-time room booking and food catering management.",
            features: [
                "Meeting room reservation with automated catering menu selection",
                "Admin dashboard for managing orders, schedules, and room status",
                "Dynamic responsive UI customized for desktop and tablet users",
                "Automated status updates and clean TypeScript architecture"
            ],
            tags: ["Next.js", "TypeScript", "Tailwind CSS"],
            github: "",
            demo: "https://rsp-south-catering.vercel.app",
            demoText: "Live Demo"
        },
        {
            id: 3,
            title: "STSP INNOMART",
            category: "backend",
            image: "imgportfolio/stsp inno.png",
            icon: "bx-store-alt",
            description: "A product management and real-time inventory update portal for the STSP INNOMART platform.",
            longDescription: "A robust inventory control and ecommerce product management system developed using PHP and SQLite3. Designed to simplify product cataloging, stock tracking, and supplier operations for STSP INNOMART.",
            features: [
                "Real-time stock inventory tracking & product CRUD management",
                "Fast database queries with SQLite3 lightweight architecture",
                "Secure session-based authentication & admin panel",
                "Lightweight server deployment compatibility"
            ],
            tags: ["PHP", "SQLite3"],
            github: "",
            demo: "https://stsp-innomart.freehosting.dev/",
            demoText: "Live Demo"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. SKILL CATEGORIES (รายการหมวดหมู่ทักษะความสามารถในส่วน Skills)
    // ----------------------------------------------------------------------
    skillCategories: [
        {
            title: "Frontend",
            icon: "laptop",
            skills: [
                { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                { name: "JavaScript ES6+", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" }
            ]
        },
        {
            title: "Backend & Database",
            icon: "server",
            skills: [
                { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
                { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
                { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "SQLite3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
                { name: "Prisma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" }
            ]
        },
        {
            title: "Tools & Soft Skills",
            icon: "wrench",
            skills: [
                { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
                { name: "AntigravityIDE", boxIcon: "code-block", iconColor: "#38bdf8" },
                { name: "Design Thinking", boxIcon: "lightbulb", iconColor: "#ffb703" },
                { name: "Growth Mindset", boxIcon: "trending-up", iconColor: "#38bdf8" },
                { name: "Collaboration", boxIcon: "group", iconColor: "#38bdf8" }
            ]
        }
    ]
};
