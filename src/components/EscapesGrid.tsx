import { forwardRef } from "react";
import { motion } from "framer-motion";
import EscapeCard from "./EscapeCard";

import cardUbud from "@/assets/card-ubud.jpg";
import cardUluwatu from "@/assets/card-uluwatu.jpg";
import cardCanggu from "@/assets/card-canggu.jpg";
import cardWellness from "@/assets/card-wellness.jpg";
import cardAdventure from "@/assets/card-adventure.jpg";
import cardDining from "@/assets/card-dining.jpg";

const escapes = [
  { title: "Sacred Temples & Rice Terraces", region: "Ubud", vibe: "Wellness", price: "$1,290", duration: "5 Days", image: cardUbud },
  { title: "Clifftop Sunset Retreat", region: "Uluwatu", vibe: "Luxury", price: "$2,450", duration: "7 Days", image: cardUluwatu },
  { title: "Surf & Soul Weekend", region: "Canggu", vibe: "Adventure", price: "$890", duration: "3 Days", image: cardCanggu },
  { title: "Holistic Healing Journey", region: "Ubud", vibe: "Wellness", price: "$1,750", duration: "5 Days", image: cardWellness },
  { title: "Jungle Waterfall Explorer", region: "Ubud", vibe: "Adventure", price: "$980", duration: "3 Days", image: cardAdventure },
  { title: "Private Beach Dining", region: "Uluwatu", vibe: "Luxury", price: "$3,200", duration: "7 Days", image: cardDining },
];

interface EscapesGridProps {
  filters: { region: string; vibe: string; duration: string };
  onBooking: () => void;
}

const EscapesGrid = forwardRef<HTMLElement, EscapesGridProps>(({ filters, onBooking }, ref) => {
  const filtered = escapes.filter((e) => {
    if (filters.region !== "All" && e.region !== filters.region) return false;
    if (filters.vibe !== "All" && e.vibe !== filters.vibe) return false;
    if (filters.duration !== "All" && e.duration !== filters.duration) return false;
    return true;
  });

  return (
    <section ref={ref} className="section-padding py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">
            Exclusive <span className="font-semibold">Escapes</span>
          </h2>
          <p className="text-muted-foreground">
            {filtered.length} curated {filtered.length === 1 ? "experience" : "experiences"} available
          </p>
        </motion.div>

        {filtered.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-16"
          >
            No experiences match your filters. Try adjusting your selection.
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((escape, i) => (
              <EscapeCard
                key={escape.title}
                {...escape}
                index={i}
                onFastView={onBooking}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
});

EscapesGrid.displayName = "EscapesGrid";
export default EscapesGrid;
