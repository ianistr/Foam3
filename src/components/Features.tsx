
import { Coffee, Star, ChefHat } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description: "Sourced from the finest coffee regions around the world"
  },
  {
    icon: ChefHat,
    title: "Expert Baristas",
    description: "Crafting the perfect cup with passion and precision"
  },
  {
    icon: Star,
    title: "Cozy Atmosphere",
    description: "A perfect blend of comfort and style"
  }
];

export default function Features() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
            <feature.icon className="w-12 h-12 text-blue-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}