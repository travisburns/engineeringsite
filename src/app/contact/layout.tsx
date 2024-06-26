import ContactNav from './ContactNav';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900  px-8 sm:px-12 lg:px-16 py-28">
    
      <ContactNav />
      <main>{children}</main>
    </div>
  );
}