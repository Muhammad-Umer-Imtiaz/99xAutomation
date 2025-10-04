import ChatbotBuilder from "@/Components/LandingPage/ChatbotBuilder";
import HeroSection from "@/Components/LandingPage/HeroSection";
import Industries from "@/Components/LandingPage/Industries";
import Navbar from "@/Components/LandingPage/Navbar";
import WhyChoose from "@/Components/LandingPage/WhyChoose";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <ChatbotBuilder/>
      <Industries/>
    </div>
  );
}
