import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingGears from "@/components/FloatingGears";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/**
 * Main page — assembles all sections for the single-page
 * "Mecánica de Jorge" mobile mechanic landing page.
 *
 * Section order:
 *   #hero → #servicios → #sobre-jorge → #contacto → Footer
 */
export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global scroll-driven gear animations (fixed, behind everything) */}
      <FloatingGears />

      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <Hero />
      <Services />
      <About />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button (appears after scroll) */}
      <WhatsAppFloat />
    </main>
  );
}
