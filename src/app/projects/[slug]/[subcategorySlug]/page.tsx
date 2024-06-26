"use client";
import { useParams } from 'next/navigation';
import { projects, Project, SubCategory } from '../../ProjectsData/projectsData';
import Image from 'next/image';

export default function ProjectDetailSinglePage() {
  const { slug, subcategorySlug } = useParams();
  const project = projects.find((project: Project) => project.id === slug);
  if (!project) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white font-playfair">Project not found</div>;
  }
  const subcategory = project.subCategories.find((subcategory: SubCategory) => subcategory.subtitle === subcategorySlug);
  if (!subcategory) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white font-playfair">Subcategory not found</div>;
  }
  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white">{subcategory.SEOTitle}</h1>
        <Image src={subcategory.image} alt={subcategory.subtitle} width={800} height={500} className="mb-8 w-full h-auto rounded-lg" />
        <p className="text-lg mb-4 text-gray-300">{subcategory.descriptionsummary}</p>
        <p className="text-lg mb-4 text-gray-300">{subcategory.description1}</p>
      </div>
    </div>
  );
}