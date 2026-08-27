// ==========================================================================
// PORTFOLIO TYPES (นิยามโครงสร้างชนิดข้อมูล TypeScript)
// ไฟล์นี้ใช้กำหนด Type ของโปรเจกต์ ทักษะ และข้อมูลทั้งหมดเพื่อความปลอดภัยของโค้ด
// ==========================================================================

// นิยามข้อมูลของแต่ละโปรเจกต์ (Project Data Structure)
export interface Project {
    id: number;
    title: string;                                           // ชื่อโปรเจกต์
    category: 'fullstack' | 'frontend' | 'backend';          // หมวดหมู่โปรเจกต์
    image?: string;                                         // รูปภาพพรีวิวผลงาน
    icon?: string;                                          // ไอคอนสำรองกรณีไม่มีรูป
    description: string;                                    // คำอธิบายโปรเจกต์
    tags: string[];                                         // แท็กเทคโนโลยีที่ใช้ (เช่น React, Node.js)
    github?: string;                                        // ลิงก์ไปยัง GitHub Repository
    demo?: string;                                          // ลิงก์ไปยัง Live Demo เว็บไซต์จริง
    demoText?: string;                                      // ข้อความบนปุ่มกด (เช่น Live Demo)
}

// นิยามข้อมูลของแต่ละทักษะ (Skill Item Data Structure)
export interface SkillItem {
    name: string;                                           // ชื่อทักษะ/เครื่องมือ
    iconUrl?: string;                                       // ลิงก์รูปไอคอน SVG
    boxIcon?: string;                                       // ชื่อไอคอนจาก Boxicons
    iconColor?: string;                                     // สีของไอคอน
}

// นิยามหมวดหมู่ทักษะความสามารถ (Skill Category Data Structure)
export interface SkillCategory {
    title: string;                                           // ชื่อหมวดหมู่ (เช่น Frontend, Backend)
    icon: string;                                           // ไอคอนประจำหมวดหมู่
    skills: SkillItem[];                                    // รายการทักษะในหมวดหมู่นี้
}

// โครงสร้างข้อมูลรวมทั้งหมดของ Portfolio (Main Portfolio Data Structure)
export interface PortfolioData {
    typingStrings: string[];                                 // ชุดข้อความพิมพ์สลับอัตโนมัติในส่วน Hero
    projects: Project[];                                     // รายการโปรเจกต์ทั้งหมด
    skillCategories: SkillCategory[];                        // รายการหมวดหมู่ทักษะทั้งหมด
}
