// app/services/[slug]/page.tsx
"use client"
import { useParams } from 'next/navigation';
import { services, Service, SubCategory } from '../servicesData/ServicesData';
import Image from 'next/image';
import ServicesAccordion from './ServicesAccordion';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((service: Service) => service.id === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen flex justify-center bg-cover bg-center bg-gray-900" >
      <div className="max-w-[80%] py-28">
        <h1 className="text-4xl font-bold mb-8 text-white">{service.title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.subCategories.map((subcategory: SubCategory, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              {subcategory.image && (
                <Image src={subcategory.image} alt={subcategory.subtitle} width={200} height={200} className="mb-4" />
              )}
              <h2 className="text-xl font-semibold mb-2">{subcategory.subtitle}</h2>
              {Object.keys(subcategory)
                .filter((key) => key.startsWith('subCategory'))
                .map((key) => (
                  <p key={key} className="text-gray-600 mb-1">
                    {subcategory[key as keyof SubCategory]}
                  </p>
                ))}
              {subcategory.accordionContent && (
                <ServicesAccordion title="View Details" content={subcategory.accordionContent} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}