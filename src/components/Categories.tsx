import {
  BookOpen,
  GraduationCap,
  BookUser,
  BookmarkCheck,
  BookIcon,
  Heart,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "fiction",
    name: "Fiction",
    description: "Novels, Short Stories, and Fantasy",
    icon: BookOpen,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "non-fiction",
    name: "Non-Fiction",
    description: "Biographies, History, and Self-Help",
    icon: BookmarkCheck,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "academic",
    name: "Academic",
    description: "Textbooks and Reference Materials",
    icon: GraduationCap,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: "children",
    name: "Children",
    description: "Picture Books and Young Adult",
    icon: BookUser,
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    id: "rare",
    name: "Rare Books",
    description: "First Editions and Collectibles",
    icon: BookIcon,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "deals",
    name: "Best Deals",
    description: "Discounted and Budget Finds",
    icon: Heart,
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-2">
            Browse Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of books across different genres and
            categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.id}`} key={category.id}>
              <div
                className={`category-card ${category.color} rounded-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all cursor-pointer hover:shadow-md`}
              >
                <div
                  className={`w-12 h-12 ${category.iconColor} mb-4 flex items-center justify-center`}
                >
                  <category.icon size={30} />
                </div>
                <h3 className="font-bold text-[#333333] mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
