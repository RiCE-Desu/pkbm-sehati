import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Facility from '@/components/Facility';
import Footer from '@/components/Footer';
import { About } from '@/components/About';
import Program from '@/components/Program';
import Activity from '@/components/Activity';

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <header>
        <Navbar />
      </header>
      {/* Hero Section */}
      <main>
        <Hero />
        <About />
        <Facility />
        <Program />
        <Activity />
      </main>
      {/* Footer */}
        <Footer />
        
      </>
  )}
