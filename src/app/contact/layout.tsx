import ContactNav from './ContactNav';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ContactNav />
        <main className="mt-8">{children}</main>
      </div>
    </div>
  );
}