"use client";
import { useParams } from 'next/navigation';
import { projects, Project, SubCategory } from '../ProjectsData/projectsData';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((project: Project) => project.id === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.subCategories.map((subcategory: SubCategory, index: number) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <Image src={subcategory.image} alt={subcategory.subtitle} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
            <h2 className="text-xl font-semibold mb-2">{subcategory.subtitle}</h2>
            <p className="text-gray-600 mb-4">{subcategory.location}</p>
            <h3 className="text-lg font-semibold mb-2">Services Provided</h3>
            <ul className="list-disc list-inside mb-4">
              {subcategory.service1 && <li>{subcategory.service1}</li>}
              {subcategory.service2 && <li>{subcategory.service2}</li>}
              {subcategory.service3 && <li>{subcategory.service3}</li>}
              {subcategory.service4 && <li>{subcategory.service4}</li>}
              {subcategory.service5 && <li>{subcategory.service5}</li>}
            </ul>
            <Link href={`/projects/${project.id}/${subcategory.subtitle}`} className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}