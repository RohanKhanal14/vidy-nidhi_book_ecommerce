import Categories from "@/components/Categories";
import DiscountedBooks from "@/components/DiscountedBooks";
import FeaturedBooks from "@/components/FeaturedBooks";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <HeroSection />
          <Categories />
          <FeaturedBooks />
          <DiscountedBooks />
          <HowItWorks />
          <Testimonials />
        </main>
      </div>
    </>
  );
}
