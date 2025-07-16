import { ArrowDown } from "lucide-react";
import { BackgroundParticles } from "./BackgroundParticles.jsx";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* 🔹 Background color layer to ensure particles are visible on light theme */}
      <div className="absolute inset-0 bg-[#0e0e1c] opacity-80 -z-20 pointer-events-none" />
      
      {/* 🔹 Particle animation layer */}
      <BackgroundParticles />

      {/* 🔹 Main content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Hetvi
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Patel
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I turn ideas into interactive web experiences, blending clean design
            with powerful functionality. From sleek user interfaces to intelligent content personalization, I build digital products that not only work — they connect.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
      
    </section>
  );
};
