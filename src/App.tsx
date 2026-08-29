import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

// Interactive Glassmorphism Components
import { GlassBackground } from './components/GlassBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Toast } from './components/Toast';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './types/portfolio';
import { translations, type Language } from './data/translations';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = translations[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    const successMsg = lang === 'th' ? `คัดลอก ${label} เรียบร้อยแล้ว! ✨` : `${label} copied to clipboard! ✨`;
    setToastMessage(successMsg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#060a14] text-slate-100 selection:bg-[var(--primary)] selection:text-[#040814] relative overflow-x-hidden">
      <ScrollProgress />
      <GlassBackground />
      <CustomCursor />
      <Navbar lang={lang} onToggleLang={handleToggleLang} t={t} />

      <main className="relative z-10">
        <Hero onCopy={handleCopy} t={t} />
        <About onCopy={handleCopy} t={t} />
        <Skills t={t} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} t={t} />
        <Education t={t} />
      </main>

      <Footer t={t} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        t={t}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
