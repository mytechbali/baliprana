import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, MapPin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

import imgWellness from "@/assets/card-wellness.jpg";

const JoinUs = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", destination: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", destination: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[50vh] overflow-hidden">
        <img src={imgWellness} alt="Join Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-foreground/40 to-foreground/60" />
        <div className="relative z-10 flex flex-col justify-end h-full section-padding pb-12">
          <Link to="/" className="absolute top-6 left-5 md:left-8 lg:left-16 z-20">
            <Button variant="ghost" size="sm" className="text-primary-foreground/90 hover:text-primary-foreground gap-2">
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/70 mb-2">Start Your Journey</p>
            <h1 className="text-5xl md:text-7xl font-light text-primary-foreground">Join Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding py-16 max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Tell us about your dream Bali escape. Our concierge team will craft a personalized itinerary just for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="pl-11 h-12"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="pl-11 h-12"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Preferred Destination (e.g. Ubud, Uluwatu)"
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="pl-11 h-12"
              />
            </div>
            <Textarea
              placeholder="Tell us about your ideal trip — group size, dates, interests..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
            />
            <Button type="submit" variant="accent" size="lg" className="w-full gap-2">
              <Send className="w-4 h-4" /> Send Request
            </Button>
          </form>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default JoinUs;
