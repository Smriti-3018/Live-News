import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
 
      <div className="bg-[#cc0000] text-white text-xs py-1 px-4 text-center">
        Breaking: Sensex jumps 500 points | Weather Update: Rain in Delhi
      </div>
    
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 cursor-pointer md:hidden" />
          <Link href="/" className="text-2xl font-bold text-[#cc0000]">
            Live<span className="text-black">News</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 font-semibold text-gray-700">
          <Link href="/" className="hover:text-[#cc0000]">Home</Link>
          <Link href="#" className="hover:text-[#cc0000]">Nation</Link>
          <Link href="#" className="hover:text-[#cc0000]">World</Link>
          <Link href="#" className="hover:text-[#cc0000]">Cricket</Link>
          <Link href="#" className="hover:text-[#cc0000]">Entertainment</Link>
        </nav>

        <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
}