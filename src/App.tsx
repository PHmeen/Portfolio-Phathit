// ==========================================================================
// MAIN APP COMPONENT (คอมโพเนนต์หลักที่นำคอมโพเนนต์ย่อยทั้งหมดมารวมกัน)
// ==========================================================================

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 selection:bg-[#18f7b8] selection:text-[#051410]">
      {/* แถบเมนูด้านบน */}
      <Navbar />

      {/* เนื้อหาหลักแต่ละส่วนของเว็บไซต์ */}
      <main>
        {/* ส่วนต้อนรับต้อนรับหลัก (Hero Section) */}
        <Hero />

        {/* ส่วนข้อมูลส่วนตัวและการ์ดติดต่อ (About Me Section) */}
        <About />

        {/* ส่วนรายการทักษะความสามารถ (Skills Section) */}
        <Skills />

        {/* ส่วนรายการโปรเจกต์ผลงาน (Featured Projects Section) */}
        <Projects />

        {/* ส่วนประวัติการศึกษาและประสบการณ์ (Education Section) */}
        <Education />
      </main>

      {/* ส่วนท้ายเว็บไซต์ (Footer Section) */}
      <Footer />
    </div>
  );
}

export default App;
