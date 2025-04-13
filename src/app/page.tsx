import Categories from "@/components/Categories";
import DiscountedBooks from "@/components/DiscountedBooks";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <Categories />
          <FeaturedBooks />
          <DiscountedBooks />
          <HowItWorks />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
}
