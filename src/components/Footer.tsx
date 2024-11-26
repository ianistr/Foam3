
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6" />
            <span className="text-xl font-bold">foam</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-200 transition-colors"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-blue-200 transition-colors"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="hover:text-blue-200 transition-colors"><Twitter className="h-6 w-6" /></a>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-8">
          <p className="text-center text-sm">© 2024 foam coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}