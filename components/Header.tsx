import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md text-[#18435a] border-b border-slate-100/50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="Viesa AI Automations Logo"
            width={180}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8 items-center font-semibold">
          <Link href="#about" className="text-[#13293d] hover:text-[#3e92cc] transition-colors">Over Ons</Link>
          <Link href="#services" className="text-[#13293d] hover:text-[#3e92cc] transition-colors">Diensten</Link>
          <Link href="#case-studies" className="text-[#13293d] hover:text-[#3e92cc] transition-colors">Cases</Link>
          <Link
            href="#contact"
            className="bg-[#18435a] text-white px-6 py-2.5 rounded-full hover:bg-[#3e92cc] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
