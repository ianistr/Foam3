
import { coffeeMenu } from '../data/menu';

export default function MenuSection() {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Drinks Menu</h2>
      <div className="max-w-4xl mx-auto">
        {coffeeMenu.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">{category.category}</h3>
            <div className="grid gap-6">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex justify-between items-start p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div>
                    <h4 className="text-lg font-medium text-blue-900">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-blue-600 font-semibold">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}