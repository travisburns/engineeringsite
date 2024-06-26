import Link from 'next/link';
import { projects, Project } from './ProjectsData/projectsData';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-28">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-6">
            <Image src={project.img} alt={project.title} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
            <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
            <Link href={`/projects/${project.id}`} className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}