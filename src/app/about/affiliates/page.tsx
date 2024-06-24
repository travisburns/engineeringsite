// affiliates/page.tsx
import AffiliatesData from './affiliatesData/AffiliatesData'
import Image from 'next/image'

export default function AffiliatesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 font-bold mb-12 text-center">Affiliates</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {AffiliatesData.map((affiliate, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="relative w-full h-40 mb-4">
              <Image src={affiliate.image} alt={affiliate.name} layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
            <a href={affiliate.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:underline">
              {affiliate.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}