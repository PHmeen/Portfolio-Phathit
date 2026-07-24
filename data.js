// ==========================================================================
// PORTFOLIO DATA CONFIGURATION
// สามารถแก้ไขข้อความ ผลงาน (Projects) และ ทักษะ (Skills) ได้ที่ไฟล์นี้
// ==========================================================================

const portfolioData = {
    // ----------------------------------------------------------------------
    // 1. TYPED.JS TEXTS (ข้อความตัวหนังสือพิมพ์อัตโนมัติในหน้าแรก)
    // ----------------------------------------------------------------------
    typingStrings: [
        "Full Stack Web Development",
        "Frontend & UI/UX Design",
        "Backend & Database Architecture"
    ],

    // ----------------------------------------------------------------------
    // 2. PROJECTS (ผลงานทั้งหมด)
    // ----------------------------------------------------------------------
    projects: [
        {
            title: "เว็บไซต์ Portfolio ส่วนตัว",
            icon: "bx-layout",
            description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวแบบ Responsive ทำงานได้รวดเร็ว พัฒนาด้วย HTML5, CSS3 และ JavaScript",
            tags: ["HTML5", "CSS3", "JavaScript"],
            github: "https://github.com/PHmeen",
            demo: "#home",
            demoText: "หน้าปัจจุบัน"
        },
        {
            title: "RSP-South-Catering",
            icon: "bx-shopping-bag",
            description: "ระบบจองอาหารและเครื่องดื่มสำหรับผู้ใช้บริการห้องประชุม ณ อุทยานวิทยาศาสตร์ภูมิภาค ภาคใต้",
            tags: ["Next.js", "TypeScript", "Tailwind CSS"],
            demo: "https://rsp-south-catering.vercel.app",
            demoText: "ชมเว็บไซต์"
        },
        {
            title: "STSP INNOMART",
            icon: "bx-cloud-upload",
            description: "ระบบดูแลและปรับปรุงสินค้าในเว็บไซต์ STSP INNOMART ",
            tags: ["PHP", "Node.js", "SQLite3"],
            demo: "https://stsp-innomart.freehosting.dev/",
            demoText: "ชมเว็บไซต์"
        }
    ]
};
