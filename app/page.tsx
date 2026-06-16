import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PhilosophySection from "@/components/PhilosophySection";
import ApproachSection from "@/components/ApproachSection";
import StructureSection from "@/components/StructureSection";
import FounderSection from "@/components/FounderSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <PhilosophySection />
        <ApproachSection />
        <StructureSection />
        <FounderSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
}
