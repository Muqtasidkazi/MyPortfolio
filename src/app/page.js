'use client'
import { useRef } from "react";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
// import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from "./components/Carousel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection  />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectSection />
        <EmailSection/>
      </div>
        <Footer/>
    </main>
  );
}
