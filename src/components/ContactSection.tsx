import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center gap-4">
          <Clock className="h-8 w-8 text-blue-600" />
          <div>
            <h3 className="font-semibold mb-1 text-blue-900">Hours</h3>
            <p className="text-gray-600">Mon-Fri: 7am - 7pm</p>
            <p className="text-gray-600">Sat-Sun: 8am - 6pm</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="h-8 w-8 text-blue-600" />
          <div>
            <h3 className="font-semibold mb-1 text-blue-900">Location</h3>
            <p className="text-gray-600">456 Barista Avenue</p>
            <p className="text-gray-600">Seattle, WA 98101</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="h-8 w-8 text-blue-600" />
          <div>
            <h3 className="font-semibold mb-1 text-blue-900">Contact</h3>
            <p className="text-gray-600">(555) 234-5678</p>
            <p className="text-gray-600">hello@foamcoffee.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}