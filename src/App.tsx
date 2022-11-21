import { useState } from "react";
import AppHeader from "./AppHeader";
import reactLogo from "./assets/react.svg";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { ProjectSection } from "./ProjectSection";
import SkillSection from "./SkillSection";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="bg-black p-6 text-white relative z-10">
        {/* Header */}
        <AppHeader />
      </header>
      <main className="bg-black p-6 text-white">
        {/* Hero image */}
        <HeroSection />
        <div className="h-[2px] w-full bg-tc-grey"> </div>
        {/* Skills listing */}
        <SkillSection />
        <div className="mt-10 h-[2px] w-full bg-tc-grey"> </div>
        {/* Projects listing */}
        <ProjectSection />
        {/* Footer */}
      </main>
      <footer className="bg-tc-dark-grey p-6 text-white">
        <ContactSection />
        <div className="#divider mt-10 mb-10 h-[2px] w-full bg-tc-grey"> </div>
        <AppHeader />
      </footer>
    </>
  );
}

export default App;
