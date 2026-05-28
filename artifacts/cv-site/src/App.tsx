import { useEffect } from "react";
import { Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navigation />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:px-12 md:py-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  // Force dark class on document element
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
