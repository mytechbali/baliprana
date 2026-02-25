import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import QuickFilters from "@/components/QuickFilters";
import EscapesGrid from "@/components/EscapesGrid";
import WhyUsSection from "@/components/WhyUsSection";
import BookingDrawer from "@/components/BookingDrawer";
import Footer from "@/components/Footer";

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
      <QuickFilters filters={filters} onFilterChange={setFilters} />
      <EscapesGrid ref={gridRef} filters={filters} onBooking={() => setBookingOpen(true)} />
      <WhyUsSection />
      <Footer />
      <BookingDrawer open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
