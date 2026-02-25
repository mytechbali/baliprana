import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDrawer = ({ open, onOpenChange }: BookingDrawerProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2500);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-light">
            Quick <span className="font-semibold">Inquiry</span>
          </SheetTitle>
          <SheetDescription>
            Tell us about your dream Bali trip and we'll craft a personalized itinerary within 24 hours.
          </SheetDescription>
        </SheetHeader>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <CheckCircle size={48} className="text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-foreground mb-2">Inquiry Sent!</h3>
              <p className="text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Preferred Dates</label>
                <Input type="text" placeholder="e.g., March 15 – 22, 2026" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tell Us More</label>
                <Textarea
                  placeholder="Interests, group size, special requests..."
                  rows={4}
                />
              </div>
              <Button type="submit" variant="accent" className="w-full gap-2" size="lg">
                <Send size={16} />
                Send Inquiry
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
};

export default BookingDrawer;
