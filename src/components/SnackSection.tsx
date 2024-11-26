
import { cookieMenu } from '../data/menu';

export default function SnackSection() {
  return (
    <section className="py-12 px-4 md:px-8 bg-blue-50">
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">House-Made Cookies</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cookieMenu.map((cookie, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{cookie.name}</h3>
            <p className="text-gray-600 mb-4">{cookie.description}</p>
            <p className="text-blue-600 font-semibold">${cookie.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}