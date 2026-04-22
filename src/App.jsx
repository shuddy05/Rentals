import { Home, Search, Heart, MapPin, BedDouble, Bath, Square } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const listings = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    location: 'Lekki, Lagos',
    price: '₦85,000,000',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    id: 2,
    title: 'Contemporary Apartment',
    location: 'Victoria Island, Lagos',
    price: '₦45,000,000',
    beds: 3,
    baths: 2,
    sqft: '1,800',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
  },
  {
    id: 3,
    title: 'Elegant Family Home',
    location: 'Ikoyi, Lagos',
    price: '₦120,000,000',
    beds: 5,
    baths: 4,
    sqft: '4,500',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <Home size={24} />
            <span>Homes</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-gray-600 text-sm font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Buy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Rent</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Sell</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Agents</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            List Property
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-blue-100 text-lg mb-10">Thousands of properties across Nigeria, curated just for you.</p>
        <div className="max-w-2xl mx-auto bg-white rounded-full flex items-center gap-3 px-5 py-3 shadow-lg">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by city, neighbourhood, or listing..."
            className="flex-1 outline-none text-gray-700 text-sm bg-transparent"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            Search
          </button>
        </div>
      </section>

      {/* Listings */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((home) => (
            <div key={home.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative overflow-hidden h-56">
                <img
                  src={home.image}
                  alt={home.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:bg-red-50 transition-colors">
                  <Heart size={16} className="text-gray-500 hover:text-red-500 transition-colors" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-1">
                  <MapPin size={14} />
                  <span>{home.location}</span>
                </div>
                <h3 className="text-gray-800 font-bold text-lg mb-1">{home.title}</h3>
                <p className="text-blue-600 font-semibold text-xl mb-4">{home.price}</p>
                <div className="flex items-center gap-4 text-gray-500 text-sm border-t pt-4">
                  <span className="flex items-center gap-1"><BedDouble size={15} /> {home.beds} Beds</span>
                  <span className="flex items-center gap-1"><Bath size={15} /> {home.baths} Baths</span>
                  <span className="flex items-center gap-1"><Square size={15} /> {home.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-10 px-6 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Home size={20} />
            <span>Homes</span>
          </div>
          <p>© {new Date().getFullYear()} Homes. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-white cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  )
}
