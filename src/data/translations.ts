export type Language = 'en' | 'th';

export interface TranslationStructure {
    nav: {
        home: string;
        about: string;
        skills: string;
        projects: string;
        education: string;
    };
    hero: {
        roleBadge: string;
        passionateAbout: string;
        typingStrings: string[];
        bio: string;
        exploreBtn: string;
        resumeBtn: string;
        availableBadge: string;
        stats: {
            gpaxLabel: string;
            projectsLabel: string;
            internshipLabel: string;
        };
    };
    about: {
        badge: string;
        titlePart1: string;
        titlePart2: string;
        subtitle: string;
        generalTitle: string;
        nicknameLabel: string;
        nicknameValue: string;
        ageLabel: string;
        ageValue: string;
        birthDateLabel: string;
        birthDateValue: string;
        statusLabel: string;
        statusValue: string;
        contactTitle: string;
        emailLabel: string;
        phoneLabel: string;
        copyTooltip: string;
    };
    skills: {
        badge: string;
        titlePart1: string;
        titlePart2: string;
        subtitle: string;
        categoryFrontend: string;
        categoryBackend: string;
        categoryTools: string;
    };
    projects: {
        badge: string;
        titlePart1: string;
        titlePart2: string;
        subtitle: string;
        detailsBtn: string;
        quickViewBtn: string;
        liveDemoBtn: string;
        modalOverviewTitle: string;
        modalFeaturesTitle: string;
        modalTechTitle: string;
        items: {
            [key: number]: {
                title: string;
                description: string;
                longDescription: string;
                features: string[];
            };
        };
    };
    education: {
        badge: string;
        titlePart1: string;
        titlePart2: string;
        subtitle: string;
        internBadge: string;
        internRole: string;
        internLoc: string;
        internDesc: string;
        eduBadge: string;
        eduDegree: string;
        eduLoc: string;
        gpaxLabel: string;
    };
    footer: {
        builtWith: string;
        designedWith: string;
    };
}

export const translations: Record<Language, TranslationStructure> = {
    en: {
        nav: {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            education: "Education"
        },
        hero: {
            roleBadge: "ICT STUDENT & DEVELOPER",
            passionateAbout: "Interested in",
            typingStrings: [
                "Full-Stack Web Development",
                "Software engineer"
            ],
            bio: "4th-year ICT student at Prince of Songkla University looking for internship and career opportunities in web development. Eager to learn new technologies and apply my skills in real-world projects.",
            exploreBtn: "View Projects",
            resumeBtn: "View Resume",
            availableBadge: "Ready for Internship / Work",
            stats: {
                gpaxLabel: "GPAX",
                projectsLabel: "Projects Built",
                internshipLabel: "Internship Exp."
            }
        },
        about: {
            badge: "ABOUT ME",
            titlePart1: "About",
            titlePart2: "Me",
            subtitle: "4th-Year ICT Student at Prince of Songkla University",
            generalTitle: "General Information",
            nicknameLabel: "Nickname",
            nicknameValue: "Meen",
            ageLabel: "Age",
            ageValue: "21 years old",
            birthDateLabel: "Birth Date",
            birthDateValue: "March 15, 2005",
            statusLabel: "Status",
            statusValue: "Undergraduate Senior",
            contactTitle: "Contact Information",
            emailLabel: "Email",
            phoneLabel: "Phone",
            copyTooltip: "Click to copy"
        },
        skills: {
            badge: "MY SKILLS",
            titlePart1: "Technical",
            titlePart2: "Skills",
            subtitle: "Languages, frameworks, and tools used in coursework and practice projects",
            categoryFrontend: "Frontend",
            categoryBackend: "Backend & Database",
            categoryTools: "Tools & Soft Skills"
        },
        projects: {
            badge: "MY PROJECTS",
            titlePart1: "Featured",
            titlePart2: "Projects",
            subtitle: "Web development projects built during university coursework, self-practice, and internship",
            detailsBtn: "Details",
            quickViewBtn: "View Details",
            liveDemoBtn: "Live Demo",
            modalOverviewTitle: "Project Overview",
            modalFeaturesTitle: "Key Functions",
            modalTechTitle: "Technologies Used",
            items: {
                1: {
                    title: "Personal Portfolio Website",
                    description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my projects and skills for internship applications.",
                    longDescription: "A personal portfolio website developed with React 19, TypeScript, Vite 8, and Tailwind CSS v4 to present my projects, technical skills, and resume for internship applications.",
                    features: [
                        "Responsive glassmorphism UI design",
                        "Bilingual (EN/TH) language switcher",
                        "Interactive project detail popup modals",
                        "One-click contact copy with notification toast"
                    ]
                },
                2: {
                    title: "RSP-South-Catering",
                    description: "A meeting room and catering reservation web application developed for Southern Regional Science Park.",
                    longDescription: "A web application developed during my internship at Southern Regional Science Park (PSU) to streamline meeting room reservations and catering orders using Next.js App Router, TypeScript, and Tailwind CSS.",
                    features: [
                        "Meeting room food & beverage reservation system",
                        "Responsive layout for desktop and tablet users"
                    ]
                },
                3: {
                    title: "STSP INNOMART",
                    description: "A product catalog and inventory management portal for STSP INNOMART.",
                    longDescription: "An inventory control and product management web portal developed with PHP and SQLite3 to catalog products and manage stock updates for the STSP INNOMART platform.",
                    features: [
                        "Product CRUD management",
                        "Fast database operations with SQLite3",
                        "Admin authentication and inventory update panel"
                    ]
                }
            }
        },
        education: {
            badge: "MY EDUCATION",
            titlePart1: "Education &",
            titlePart2: "Experience",
            subtitle: "My academic background and internship experience",
            internBadge: "Internship Experience",
            internRole: "Full-Stack Developer Intern",
            internLoc: "Southern Regional Science Park, Prince of Songkla University",
            internDesc: "Assisted in web application development, responsive UI design, database management (SQLite / PostgreSQL), and supporting software tools.",
            eduBadge: "2022 - Present (Senior Year)",
            eduDegree: "B.Sc. in Information and Communication Technology (ICT)",
            eduLoc: "Prince of Songkla University (Hat Yai Campus)",
            gpaxLabel: "Cumulative GPAX:"
        },
        footer: {
            builtWith: "Built with React 19, TypeScript & Tailwind CSS",
            designedWith: "Created for Internship & Job Applications"
        }
    },
    th: {
        nav: {
            home: "หน้าหลัก",
            about: "เกี่ยวกับฉัน",
            skills: "ทักษะความสามารถ",
            projects: "ผลงานโปรเจกต์",
            education: "ประวัติการศึกษา"
        },
        hero: {
            roleBadge: "นักศึกษา ICT & WEB DEVELOPER",
            passionateAbout: "สนใจด้าน",
            typingStrings: [
                "การพัฒนาเว็บแอปพลิเคชัน (Full-Stack)",
                "การพัฒนา Frontend & Backend"
            ],
            bio: "นักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยสงขลานครินทร์ กำลังมองหาโอกาสฝึกงานและทำงานในสายงาน Web Development พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และมุ่งมั่นพัฒนาโปรเจกต์จริง",
            exploreBtn: "ดูผลงานโปรเจกต์",
            resumeBtn: "ดูเรซูเม่",
            availableBadge: "พร้อมเริ่มงาน / ฝึกงาน",
            stats: {
                gpaxLabel: "เกรดเฉลี่ยสะสม",
                projectsLabel: "โปรเจกต์ที่เคยทำ",
                internshipLabel: "ประสบการณ์ฝึกงาน"
            }
        },
        about: {
            badge: "ABOUT ME",
            titlePart1: "เกี่ยวกับ",
            titlePart2: "ตัวฉัน",
            subtitle: "นักศึกษาชั้นปีที่ 4 สาขา ICT มหาวิทยาลัยสงขลานครินทร์ (วิทยาเขตหาดใหญ่)",
            generalTitle: "ข้อมูลทั่วไป",
            nicknameLabel: "ชื่อเล่น",
            nicknameValue: "มีน (Meen)",
            ageLabel: "อายุ",
            ageValue: "21 ปี",
            birthDateLabel: "วันเกิด",
            birthDateValue: "15 มีนาคม 2548",
            statusLabel: "สถานะปัจจุบัน",
            statusValue: "นักศึกษาชั้นปีที่ 4",
            contactTitle: "ช่องทางการติดต่อ",
            emailLabel: "อีเมล",
            phoneLabel: "เบอร์โทรศัพท์",
            copyTooltip: "คลิกเพื่อคัดลอก"
        },
        skills: {
            badge: "MY SKILLS",
            titlePart1: "ทักษะทางเทคนิค",
            titlePart2: "และเครื่องมือ",
            subtitle: "ภาษาโปรแกรม เฟรมเวิร์ก และเครื่องมือที่เคยเรียนรู้และใช้งานในการทำโปรเจกต์",
            categoryFrontend: "ฝั่งหน้าบ้าน (Frontend)",
            categoryBackend: "ฝั่งหลังบ้านและฐานข้อมูล",
            categoryTools: "เครื่องมือและทักษะอื่นๆ"
        },
        projects: {
            badge: "MY PROJECTS",
            titlePart1: "โปรเจกต์ที่เคย",
            titlePart2: "พัฒนา",
            subtitle: "รวบรวมโปรเจกต์เว็บแอปพลิเคชันที่เคยพัฒนาในวิชาเรียน การฝึกฝนตนเอง และการฝึกงาน",
            detailsBtn: "รายละเอียด",
            quickViewBtn: "ดูรายละเอียดโปรเจกต์",
            liveDemoBtn: "ทดลองใช้งาน (Live Demo)",
            modalOverviewTitle: "ภาพรวมโปรเจกต์",
            modalFeaturesTitle: "ฟังก์ชันหลักของระบบ",
            modalTechTitle: "เทคโนโลยีที่ใช้พัฒนา",
            items: {
                1: {
                    title: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว",
                    description: "เว็บพอร์ตโฟลิโอรองรับการแสดงผลทุกหน้าจอ พัฒนาด้วย React, TypeScript และ Tailwind CSS สำหรับรวบรวมผลงานและยื่นฝึกงาน",
                    longDescription: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว พัฒนาด้วย React 19, TypeScript, Vite 8 และ Tailwind CSS v4 ออกแบบเพื่อนำเสนอผลงาน ทักษะทางเทคนิค และเรซูเม่สำหรับการยื่นสมัครฝึกงานและทำงาน",
                    features: [
                        "ดีไซน์ Responsive รองรับการใช้งานบนทุกอุปกรณ์",
                        "ปุ่มสลับภาษาไทย-อังกฤษ (EN/TH)",
                        "ป๊อปอัปแสดงรายละเอียดโปรเจกต์และฟังก์ชันหลัก",
                        "ปุ่มคัดลอกอีเมลและเบอร์โทรศัพท์พร้อมการแจ้งเตือน"
                    ]
                },
                2: {
                    title: "ระบบจองห้องประชุมและอาหาร RSP-South",
                    description: "เว็บแอปพลิเคชันจองห้องประชุมและเลือกรายการอาหาร พัฒนาในช่วงฝึกงาน ณ อุทยานวิทยาศาสตร์ภาคใต้",
                    longDescription: "เว็บแอปพลิเคชันที่พัฒนาในช่วงฝึกงาน ณ อุทยานวิทยาศาสตร์ภาคใต้ (มอ.) เพื่อช่วยอำนวยความสะดวกในการจองห้องประชุมและเลือกรายการอาหาร/เครื่องดื่ม พัฒนาด้วย Next.js App Router, TypeScript และ Tailwind CSS",
                    features: [
                        "ระบบจองห้องประชุมพร้อมเลือกรายการอาหารและเครื่องดื่ม",
                        "ดีไซน์ Responsive รองรับการใช้งานบนคอมพิวเตอร์และแท็บเล็ต"
                    ]
                },
                3: {
                    title: "ระบบจัดการคลังสินค้า STSP INNOMART",
                    description: "ระบบจัดการรายการสินค้าและอัปเดตสต็อกสินค้า สำหรับแพลตฟอร์ม STSP INNOMART",
                    longDescription: "ระบบจัดการคลังสินค้าและลงรายการสินค้า พัฒนาด้วย PHP และ SQLite3 เพื่อช่วยจัดการข้อมูลสินค้า ตรวจสอบสต็อก และอำนวยความสะดวกในการใช้งานของ STSP INNOMART",
                    features: [
                        "ระบบจัดการข้อมูลสินค้า",
                        "ประมวลผลฐานข้อมูลด้วย SQLite3",
                        "ระบบเข้าสู่ระบบสำหรับแอดมินในการอัปเดตข้อมูลสินค้า"
                    ]
                }
            }
        },
        education: {
            badge: "MY EDUCATION",
            titlePart1: "ประวัติการศึกษา &",
            titlePart2: "ประสบการณ์",
            subtitle: "ประวัติการศึกษาระดับมหาวิทยาลัยและประสบการณ์ฝึกงาน",
            internBadge: "ประสบการณ์ฝึกงาน",
            internRole: "Full-Stack Developer Intern",
            internLoc: "อุทยานวิทยาศาสตร์ภูมิภาค ภาคใต้ มหาวิทยาลัยสงขลานครินทร์",
            internDesc: "ช่วยพัฒนาเว็บแอปพลิเคชัน ออกแบบ UI ฝั่ง Frontend รองรับทุกหน้าจอ ทำงานร่วมกับฐานข้อมูล (SQLite / PostgreSQL) และสนับสนุนเครื่องมือซอฟต์แวร์สำหรับกิจกรรมของอุทยานวิทยาศาสตร์",
            eduBadge: "2565 - ปัจจุบัน (ชั้นปีที่ 4)",
            eduDegree: "วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
            eduLoc: "มหาวิทยาลัยสงขลานครินทร์ (วิทยาเขตหาดใหญ่)",
            gpaxLabel: "เกรดเฉลี่ยสะสม (GPAX):"
        },
        footer: {
            builtWith: "พัฒนาด้วย React 19, TypeScript & Tailwind CSS",
            designedWith: "จัดทำขึ้นเพื่อนำเสนอผลงานยื่นสมัครฝึกงานและทำงาน"
        }
    }
};
