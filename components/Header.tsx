import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#18435a] text-white shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* We assume the user saves the uploaded logo as /logo.png */}
          <Image 
            src="/logo.png" 
            alt="Viesa AI Automations Logo" 
            width={200} 
            height={60} 
            className="h-14 w-auto object-contain bg-white rounded-md p-1.5 shadow-sm"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8 items-center font-medium">
          <Link href="#about" className="hover:text-[#3e92cc] transition-colors">Over Ons</Link>
          <Link href="#services" className="hover:text-[#3e92cc] transition-colors">Diensten</Link>
          <Link href="#case-studies" className="hover:text-[#3e92cc] transition-colors">Cases</Link>
          <Link 
            href="#contact" 
            className="bg-[#2a628f] text-white px-5 py-2 rounded-md hover:bg-[#3e92cc] transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
