import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import OurOffice from "@/components/ouroffice";
import Specialities from "@/components/Specialities";
import SplitOne from "@/components/SplitOne";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SplitSection />
      <OurOffice />
      <Specialities />
      <SplitOne />
      <About />
      <FAQ />
      <ProfessionalBackground />
      <CTA />
      <Footer />
    </>
  );
}
