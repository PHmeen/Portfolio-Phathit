// ==========================================================================
// PORTFOLIO DATA CONFIGURATION (ภาษาไทย)
// สามารถแก้ไขข้อความ ผลงาน (Projects) และ ทักษะ (Skills) ได้ที่ไฟล์นี้
// ==========================================================================

const portfolioData = {
    // ----------------------------------------------------------------------
    // 1. TYPED.JS TEXTS (ข้อความตัวหนังสือพิมพ์อัตโนมัติในหน้าแรก)
    // ----------------------------------------------------------------------
    typingStrings: [
        "Full Stack Web Applications", 
    ],

    // ----------------------------------------------------------------------
    // 2. PROJECTS (ผลงานทั้งหมด)
    // category: 'fullstack' | 'frontend' | 'backend'
    // ----------------------------------------------------------------------
    projects: [
        {
            title: "ระบบจัดการร้านค้าออนไลน์ (E-Commerce)",
            category: "fullstack",
            icon: "bx-shopping-bag",
            description: "แพลตฟอร์มบริหารจัดการร้านค้าออนไลน์แบบ Full Stack มีระบบสมัครสมาชิก/เข้าสู่ระบบ แค็ตตาล็อกสินค้า ตะกร้าสินค้า และหน้า Dashboard สำหรับผู้ดูแลระบบ",
            tags: ["Node.js", "Express", "MySQL", "Vanilla JS"],
            github: "https://github.com/PHmeen",
            demo: "#projects",
            demoText: "ทดลองใช้งาน"
        },
        {
            title: "เว็บไซต์ Portfolio สำหรับนักพัฒนา",
            category: "frontend",
            icon: "bx-layout",
            description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่รองรับทุกอุปกรณ์ ทำงานได้รวดเร็ว พัฒนาด้วย HTML5, CSS3 Glassmorphism และ JavaScript แบบไร้ Framework",
            tags: ["HTML5", "CSS3", "JavaScript", "Typed.js"],
            github: "https://github.com/PHmeen",
            demo: "#home",
            demoText: "หน้าปัจจุบัน"
        },
        {
            title: "บริการ RESTful API & ระบบยืนยันตัวตน",
            category: "backend",
            icon: "bx-cloud-upload",
            description: "ระบบ Backend REST API สำหรับการยืนยันตัวตนความปลอดภัยสูง รองรับ JWT Token การเข้ารหัสรหัสผ่าน และการตอบกลับข้อมูลในรูปแบบ JSON",
            tags: ["Node.js", "Express.js", "MongoDB", "Postman"],
            github: "https://github.com/PHmeen",
            demo: "#projects",
            demoText: "เอกสาร API"
        }
    ]
};
