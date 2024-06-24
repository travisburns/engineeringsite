'use client'
import Image from 'next/image'
import HomeContactImg from './contactImg.png'

const HomeContact = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-12 text-center">
          Get in touch with our engineering experts today!
        </h2>
        <div className="flex flex-col lg:flex-row bg-black rounded-lg overflow-hidden shadow-2xl">
          <div className="lg:w-1/2">
            <div className="relative h-64 lg:h-full">
              <Image
                src={HomeContactImg}
                alt="Engineering team"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
            <div className="text-white font-playfair mb-8">
              <p className="text-xl md:text-2xl mb-2">9615 SW Allen Blvd., Suite 107</p>
              <p className="text-xl md:text-2xl mb-2">Beaverton, OR 97005</p>
              <p className="text-xl md:text-2xl">Phone: 503.292.6000</p>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-500 focus:outline-none"
              ></textarea>
              <button className="w-full bg-yellow-500 text-black font-playfair py-3 px-6 rounded hover:bg-yellow-600 transition duration-300 text-lg">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContact