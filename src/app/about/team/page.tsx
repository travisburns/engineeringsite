import TeamData from './TeamData/TeamData'
import Image from 'next/image'

export default function TeamPage() {
  return (
    <div className="text-white font-playfair">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold">Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TeamData.map((member, index) => (
          <div key={index} className="bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="relative w-full h-64 mb-4">
              <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-500">{member.name}</h2>
            <p className="text-gray-300 mb-2">{member.title}</p>
            {member.title2 && <p className="text-gray-300 mb-2">{member.title2}</p>}
            <p className="text-blue-400">{member.contact}</p>
          </div>
        ))}
      </div>
    </div>
  )
}