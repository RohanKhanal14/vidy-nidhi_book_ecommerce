import { Search, BookOpen, ShoppingCart, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Find Books",
    description: "Search our extensive collection of new and used books from various sellers.",
    color: "bg-blue-100",
    textColor: "text-blue-700"
  },
  {
    icon: BookOpen,
    title: "Choose Condition",
    description: "Select from new, like-new, or used books at different price points.",
    color: "bg-green-100",
    textColor: "text-green-700"
  },
  {
    icon: ShoppingCart,
    title: "Add to Cart",
    description: "Add your selected books to cart and proceed to checkout securely.",
    color: "bg-yellow-100",
    textColor: "text-yellow-700"
  },
  {
    icon: Truck,
    title: "Get Delivered",
    description: "Receive your books right at your doorstep with our fast shipping. 😊",
    color: "bg-purple-100",
    textColor: "text-purple-700"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-2">How BookSwap Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started in just a few simple steps and find your next favorite book
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <step.icon className={`${step.textColor} w-8 h-8`} />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#8B4513] text-white flex items-center justify-center mx-auto -mt-10 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
