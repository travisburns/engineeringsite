"use client";
import { useParams } from 'next/navigation';
import { projects, Project, SubCategory } from '../../ProjectsData/projectsData';
import Image from 'next/image';

export default function ProjectDetailSinglePage() {
  const { slug, subcategorySlug } = useParams();
  const project = projects.find((project: Project) => project.id === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const subcategory = project.subCategories.find((subcategory: SubCategory) => subcategory.subtitle === subcategorySlug);

  if (!subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-28">
      <h1 className="text-4xl font-bold mb-8">{subcategory.SEOTitle}</h1>
      <Image src={subcategory.image} alt={subcategory.subtitle} width={800} height={500} className="mb-8 w-full h-auto rounded-lg" />
      <p className="text-lg mb-4">{subcategory.descriptionsummary}</p>
      <p className="text-lg mb-4">{subcategory.description1}</p>
    </div>
  );
}