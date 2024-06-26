import AboutNav from "./components/AboutNav/AboutNav"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-900  px-8 sm:px-12 lg:px-16 py-28">
      <AboutNav />
      <main className="mt-8">{children}</main>
    </div>
  )
}