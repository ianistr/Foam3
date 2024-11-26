
import { Coffee as CoffeeIcon, Clock, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function PreFooter() {
  return (
    <>
      <section id="location" className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center space-x-4">
            <Clock className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Opening Hours</h3>
              <p>Mon-Sun: 8am - 12pm</p>
              
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <a className='underline'
              href="https://maps.app.goo.gl/9rw4hTAaxuEp4pnZ8"
              target="_blank"
              rel="noopener noreferrer">
              Tomis 67
              </a>
              
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-8 h-8 cursor-pointer hover:text-blue-200 transition" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-8 h-8 cursor-pointer hover:text-blue-200 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-8 h-8 cursor-pointer hover:text-blue-200 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CoffeeIcon className="h-6 w-6 text-blue-900" />
            <span className="text-xl font-bold text-blue-900">foam</span>
          </div>
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Foam Coffee Shop. All rights reserved.</p>
          <p className="text-gray-600 mt-4">Developed by <a className='underline'
              href="https://ianistr.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
              ianistr.
              </a></p>
        </div>
      </footer>
    </>
  );
}