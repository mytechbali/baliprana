import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import imgUbud from "@/assets/card-ubud.jpg";
import imgUluwatu from "@/assets/card-uluwatu.jpg";
import imgCanggu from "@/assets/card-canggu.jpg";
import imgDining from "@/assets/card-dining.jpg";

const destinations: Record<string, {
  image: string; title: string; subtitle: string;
  description: string; highlights: string[]; duration: string; rating: string;
}> = {
  ubud: {
    image: imgUbud, title: "Ubud", subtitle: "The Cultural Heart",
    description: "Ubud is Bali's artistic and spiritual epicenter. Surrounded by lush rice terraces and deep river valleys, it offers a serene escape into Balinese culture. Explore ancient temples, visit world-class art galleries, and discover traditional craft villages. From sunrise yoga sessions to evening dance performances at the Royal Palace, Ubud invites you to slow down and connect with the island's soul.",
    highlights: ["Tegallalang Rice Terraces", "Sacred Monkey Forest", "Tirta Empul Temple", "Traditional Art Markets"],
    duration: "3–5 days recommended", rating: "4.9",
  },
  uluwatu: {
    image: imgUluwatu, title: "Uluwatu", subtitle: "Cliffside Paradise",
    description: "Perched on Bali's southern limestone cliffs, Uluwatu is where dramatic ocean panoramas meet world-class surf breaks. The iconic Uluwatu Temple sits 70 meters above the sea, offering breathtaking sunset views accompanied by traditional Kecak fire dance performances. Below the cliffs, hidden beaches like Padang Padang and Suluban beckon with crystal-clear waters and golden sand.",
    highlights: ["Uluwatu Temple Sunset", "Padang Padang Beach", "Single Fin Cliff Bar", "World-Class Surf Breaks"],
    duration: "2–4 days recommended", rating: "4.8",
  },
  canggu: {
    image: imgCanggu, title: "Canggu", subtitle: "Bohemian Coastline",
    description: "Canggu embodies Bali's modern bohemian spirit. This once-quiet fishing village has evolved into a vibrant coastal hub where surf culture meets creative entrepreneurship. Spend mornings catching waves at Echo Beach, afternoons exploring trendy cafés and co-working spaces, and evenings enjoying beachfront sundowners. Canggu perfectly balances laid-back island life with contemporary luxury.",
    highlights: ["Echo Beach Surf", "Tanah Lot Temple", "Beach Club Scene", "Creative Café Culture"],
    duration: "3–5 days recommended", rating: "4.7",
  },
  seminyak: {
    image: imgDining, title: "Seminyak", subtitle: "Refined Indulgence",
    description: "Seminyak is Bali's most sophisticated coastal destination. Its golden-sand beach stretches for miles, lined with upscale resorts, world-renowned restaurants, and chic boutiques. From Michelin-inspired dining to exclusive beach clubs, Seminyak caters to those who appreciate the finer things. As the sun sets, the beachfront transforms into a magical scene of lanterns and live music.",
    highlights: ["Potato Head Beach Club", "Fine Dining Scene", "Boutique Shopping", "Spectacular Sunsets"],
    duration: "2–4 days recommended", rating: "4.8",
  },
};

const Destination = () => {
  const { slug } = useParams();
  const dest = destinations[slug || ""];

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Destination not found</h1>
          <Link to="/"><Button variant="accent">Back to Home</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={dest.image} alt={dest.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-foreground/30 to-foreground/50" />
        <div className="relative z-10 flex flex-col justify-end h-full section-padding pb-12">
          <Link to="/" className="absolute top-6 left-5 md:left-8 lg:left-16 z-20">
            <Button variant="ghost" size="sm" className="text-primary-foreground/90 hover:text-primary-foreground gap-2">
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/70 mb-2">{dest.subtitle}</p>
            <h1 className="text-5xl md:text-7xl font-light text-primary-foreground mb-4">{dest.title}</h1>
            <div className="flex items-center gap-6 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Bali, Indonesia</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {dest.duration}</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-accent text-accent" /> {dest.rating}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-16 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-semibold mb-6">About {dest.title}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">{dest.description}</p>

          <h3 className="text-xl font-semibold mb-4">Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {dest.highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-foreground">{h}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/join">
              <Button variant="accent" size="lg" className="px-8">Join Us — Plan Your Trip</Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg" className="px-8">Explore Other Destinations</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Destination;
