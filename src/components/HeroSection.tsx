import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-bali-video.mp4";
import heroBali from "@/assets/hero-bali.jpg";

const HeroSection = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBali}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base font-medium tracking-[0.25em] uppercase text-primary-foreground/80 mb-4"
        >
          Curated Luxury Experiences
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground tracking-tight mb-6"
        >
          Bali, <span className="font-semibold italic">Refined.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-lg text-primary-foreground/80 font-light max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Handpicked villas, hidden temples, and bespoke itineraries — 
          designed for the discerning traveler.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            variant="accent"
            size="lg"
            onClick={onExplore}
            className="text-base px-8 py-6"
          >
            Explore Curated Trips
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
