'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ContactNavItems = [
  { name: 'Contact Us', path: '/contact/contactUs' },
  { name: 'Covid-19 Practices', path: '/contact/Covid19' },
  { name: 'R&W Operations', path: '/contact/Operations' },
];

export default function ContactNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-center md:justify-start gap-2">
      {ContactNavItems.map((item) => (
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
  );
}