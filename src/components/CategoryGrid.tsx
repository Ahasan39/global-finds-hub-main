import { Smartphone, Shirt, Home, Sparkles, Dumbbell, Gamepad2, Car, BookOpen } from "lucide-react";
import { categories } from "@/data/mockData";

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6" />,
  Shirt: <Shirt className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
};

const CategoryGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Browse by Category
        </h2>
        <p className="mt-2 text-muted-foreground">
          Explore products across global marketplaces
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="group flex flex-col items-center gap-3 p-5 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {iconMap[cat.icon]}
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-card-foreground">{cat.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{cat.count.toLocaleString()} items</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
