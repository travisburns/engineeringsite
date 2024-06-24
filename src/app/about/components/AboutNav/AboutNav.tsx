'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/about/team' },
  { name: 'Registrations', path: '/about/registrations' },
  { name: 'Affiliates', path: '/about/affiliates' },
  { name: 'Careers', path: '/about/careers' },
]

export default function AboutNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap justify-center md:justify-start gap-2">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === item.path
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}