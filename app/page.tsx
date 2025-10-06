import ChatbotBuilder from "@/Components/LandingPage/ChatbotBuilder";
import FAQS from "@/Components/LandingPage/FAQS";
import FinalCTA from "@/Components/LandingPage/FinalCTA";
import Footer from "@/Components/LandingPage/Footer";
import HeroSection from "@/Components/LandingPage/HeroSection";
import Industries from "@/Components/LandingPage/Industries";
import Navbar from "@/Components/LandingPage/Navbar";
import Performance from "@/Components/LandingPage/Performance";
import Testimonial from "@/Components/LandingPage/Testimonial";
import Try from "@/Components/LandingPage/Try";
import WhyChoose from "@/Components/LandingPage/WhyChoose";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <ChatbotBuilder />
      <Try />
      <Industries />
      <Testimonial />
      <Performance />
      <FAQS />
      <FinalCTA />
      <Footer />
    </div>
  );
}
