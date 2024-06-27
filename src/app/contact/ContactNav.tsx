'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const ContactNavItems = [
  { name: 'Contact Us', path: '/contact/contactUs' },
  { name: 'Covid-19 Practices', path: '/contact/Covid19' },
  { name: 'R&W Operations', path: '/contact/Operations' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactNav() {
  const pathname = usePathname();

  return (
    <motion.nav 
      className="flex flex-wrap justify-center md:justify-start gap-2"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {ContactNavItems.map((item) => (
        <motion.div key={item.name} variants={fadeInUp}>
          <Link
            href={item.path}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === item.path
                ? 'bg-yellow-500 text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
}