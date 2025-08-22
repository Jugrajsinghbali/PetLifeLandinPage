import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const links = [
    { name: "About Us", href: "#" },
    { name: "Our Businesses", href: "#" },
    { name: "Investor Relations", href: "#" },
    { name: "Impact", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Newsroom", href: "#" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
            <nav className="flex items-center justify-between p-4 lg:px-12">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo1.png" alt="Logo" className="h-8 w-auto" />
                    <span className="text-white font-bold text-lg tracking-wide">PETLIFE</span>
                </div>

                {/* Desktop links */}
                <div className="hidden lg:flex lg:gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white text-sm font-medium hover:text-gray-300 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right side (only Global + Language) */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="px-3 py-1 text-white border border-white rounded hover:bg-white hover:text-black transition">
                        Global
                    </button>
                    <button className="text-white hover:text-gray-300">EN</button>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button onClick={() => setOpen(!open)} className="text-white">
                        {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu dropdown */}
            {open && (
                <div className="lg:hidden bg-black/90 text-white px-6 py-4 space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-base font-medium hover:text-gray-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="block w-full text-left text-base font-medium mt-4 border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">
                        Global
                    </button>
                </div>
            )}
        </header>
    )
}
