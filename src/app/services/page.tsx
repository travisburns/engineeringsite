// app/services/page.tsx
import Link from 'next/link';
import { services, Service } from './servicesData/ServicesData';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex justify-center bg-cover bg-center bg-gray-900" >
      <div className="max-w-[80%] py-20">
        <h1 className="text-4xl font-bold mb-8 text-white">Explore our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Image src={service.img} alt={service.title} width={80} height={80} className="mr-4" />
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}