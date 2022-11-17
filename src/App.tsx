import { useState } from "react";
import AppHeader from "./AppHeader";
import reactLogo from "./assets/react.svg";
import HeroSection from "./HeroSection";
import SkillSection from "./SkillSection";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-black p-6 text-white">
        {/* Header */}
        <AppHeader />

        {/* Hero image */}
        <HeroSection />
        <div className="h-[2px] w-full bg-tc-grey"> </div>
        {/* Skills listing */}
        <SkillSection />

        {/* Projects listing */}

        {/* Footer */}
      </main>
    </>
  );
}

export default App;
