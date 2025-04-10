import { Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Johnson",
    role: "Book Lover",
    content: "BookSwap transformed how I buy books! I've found so many rare titles at amazing prices. The seller ratings helped me choose reliable sellers every time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "College Student",
    content: "As a student, I've saved hundreds on textbooks through BookSwap. The exchange feature is genius - I trade books I've finished for new ones I need.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Maya Patel",
    role: "Book Seller",
    content: "I've cleared my shelves and made extra income by selling my old books. The platform is intuitive and makes listing books so easy! 😊",
    rating: 4,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonial = ({ name, role, content, rating, image }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">&quot;{content}&quot;</p>
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
          width={48}
          height={48}
        />
        <div>
          <h4 className="font-bold text-[#333333]">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-2">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of book lovers who are already buying, selling, and swapping books on our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;