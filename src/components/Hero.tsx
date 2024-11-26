
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Welcome foam</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-50">Where your heart is</p>
        <Link 
          to="/menu" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          View Menu
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}