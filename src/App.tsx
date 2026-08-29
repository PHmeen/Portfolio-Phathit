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

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${label} copied to clipboard! ✨`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#060a14] text-slate-100 selection:bg-[var(--primary)] selection:text-[#040814] relative overflow-x-hidden">
      <ScrollProgress />
      <GlassBackground />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero onCopy={handleCopy} />
        <About onCopy={handleCopy} />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
