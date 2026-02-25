import { motion } from "framer-motion";
import { Compass, Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Local Expertise",
    description: "Our Balinese team crafts every detail with insider knowledge you won't find in guidebooks.",
  },
  {
    icon: Truck,
    title: "Seamless Logistics",
    description: "From airport to villa, every transfer and reservation handled so you never wait.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "A dedicated concierge reachable anytime — because the best trips flow without friction.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding py-16 md:py-24 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light text-center mb-16"
        >
          Why <span className="font-semibold">Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
                <feat.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
