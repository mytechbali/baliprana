import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import imgUbud from "@/assets/card-ubud.jpg";
import imgUluwatu from "@/assets/card-uluwatu.jpg";
import imgCanggu from "@/assets/card-canggu.jpg";
import imgDining from "@/assets/card-dining.jpg";

const slides = [
  {
    image: imgUbud,
    title: "Ubud",
    subtitle: "The Cultural Heart",
    description: "Lush rice terraces, ancient temples, and artisan villages nestled in Bali's spiritual highlands.",
  },
  {
    image: imgUluwatu,
    title: "Uluwatu",
    subtitle: "Cliffside Paradise",
    description: "Dramatic ocean cliffs, world-class surf breaks, and sunset temples perched above the Indian Ocean.",
  },
  {
    image: imgCanggu,
    title: "Canggu",
    subtitle: "Bohemian Coastline",
    description: "A vibrant blend of beach culture, creative cafés, and laid-back luxury on Bali's southwest coast.",
  },
  {
    image: imgDining,
    title: "Seminyak",
    subtitle: "Refined Indulgence",
    description: "Upscale dining, boutique shopping, and golden-sand beaches where elegance meets island ease.",
  },
];

const DestinationSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={slide.title} className="relative flex-[0_0_100%] min-w-0 h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />

              <div className="relative z-10 flex items-center h-full section-padding">
                <motion.div
                  key={selectedIndex === i ? `active-${i}` : `idle-${i}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={selectedIndex === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="max-w-xl"
                >
                  <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-primary-foreground/70 mb-2">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg text-primary-foreground/80 font-light leading-relaxed max-w-md">
                    {slide.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-primary-foreground/90 hover:scale-110 transition-transform"
        aria-label="Previous destination"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-primary-foreground/90 hover:scale-110 transition-transform"
        aria-label="Next destination"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === i ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationSlider;
