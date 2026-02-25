import { motion } from "framer-motion";
import { Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EscapeCardProps {
  title: string;
  region: string;
  vibe: string;
  price: string;
  duration: string;
  image: string;
  index: number;
  onFastView: () => void;
}

const EscapeCard = ({ title, region, vibe, price, duration, image, index, onFastView }: EscapeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500 bg-card"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
        
        {/* Vibe badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full glass text-foreground">
          {vibe}
        </span>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <p className="text-2xl font-semibold text-primary-foreground">{price}</p>
          <p className="text-xs text-primary-foreground/70">per person</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-card-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{region}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock size={13} />
            {duration}
          </span>
          <Button variant="outline" size="sm" onClick={onFastView} className="text-xs gap-1.5">
            <Eye size={13} />
            Fast View
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EscapeCard;
