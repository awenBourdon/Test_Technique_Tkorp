'use client'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  // Mobile menu visibility
  const [isOpen, setIsOpen] = useState(false)

  // Function to open or close the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen)

  // Makes the links reusable with desktop and mobile version of the menu to avoid repeatation
  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li className="w-full sm:w-auto">
      <Link 
        href={href} 
        className="block" 

        // Closes menu when a link is clicked on mobile
        onClick={() => setIsOpen(false)}
      >
        <div className="
          px-4 py-2 text-lg md:text-xl font-bold tracking-wider 
          bg-[#FD9745] border-4 border-black 
          transition-transform duration-200 
          hover:translate-x-1 hover:-translate-y-1 
          active:translate-x-0 active:translate-y-0 
          hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]
        ">
          {children}
        </div>
      </Link>
    </li>
  )

  return (
    <nav className="border-b-4 border-black p-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center">

          {/* Responsiv menu button */}
          <button
            className="
              sm:hidden mb-4 
              px-4 py-2 text-lg font-bold tracking-wider 
              bg-[#FD9745] border-4 border-black 
              transition-transform duration-200 
              hover:translate-x-1 hover:-translate-y-1 
              active:translate-x-0 active:translate-y-0 
              hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]
            "
            onClick={toggleMenu}
            >

            {isOpen ? 'X' : 'Menu'}
          </button>

          {/* Responsiv layout */}
          <ul
            className={`
              flex flex-col sm:flex-row 
              justify-center items-center 
              space-y-4 sm:space-y-0 sm:space-x-8 
              w-full 
              ${isOpen ? 'flex' : 'hidden sm:flex'}
            `}
          >
  
            <NavItem href="/">Accueil</NavItem>
            <NavItem href="/persons">Propriétaires</NavItem>
            <NavItem href="/animals">Animaux</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



