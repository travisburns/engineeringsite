import Link from 'next/link';
import { services, Service } from './servicesData/ServicesData';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white"> Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Image src={service.img} alt={service.title} width={80} height={80} className="mr-4" />
                  <h2 className="text-xl font-semibold text-yellow-500">{service.title}</h2>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}