import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import DestinationSlider from "@/components/DestinationSlider";
import QuickFilters from "@/components/QuickFilters";
import EscapesGrid from "@/components/EscapesGrid";
import WhyUsSection from "@/components/WhyUsSection";
import BookingDrawer from "@/components/BookingDrawer";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const gridRef = useRef<HTMLElement>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [filters, setFilters] = useState({ region: "All", vibe: "All", duration: "All" });

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onExplore={scrollToGrid} />
      <DestinationSlider />
      <QuickFilters filters={filters} onFilterChange={setFilters} />
      <EscapesGrid ref={gridRef} filters={filters} onBooking={() => setBookingOpen(true)} />
      <WhyUsSection />
      <Footer />
      <BookingDrawer open={bookingOpen} onOpenChange={setBookingOpen} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
