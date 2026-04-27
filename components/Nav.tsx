'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Platform', 'Products', 'Talent', 'Company']

function HaspLogo({ width = 110 }: { width?: number }) {
  const height = Math.round(width / 3.25)
  return (
    <svg width={width} height={height} viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <text x="10" y="105" fontFamily="Inter, Arial, sans-serif" fontSize="80" fill="#f2f2f0">has</text>
      <g transform="translate(210,20)">
        <circle cx="40" cy="60" r="30" stroke="url(#blueGradNav)" strokeWidth="10" fill="none" />
        <rect x="32" y="70" width="16" height="40" rx="8" fill="url(#blueGradNav)" />
      </g>
      <text x="280" y="105" fontFamily="Inter, Arial, sans-serif" fontSize="80" fill="#f2f2f0">h</text>
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 z-[500] w-full flex justify-between items-center h-[70px] transition-all duration-300
          px-5 md:px-16
          ${scrolled
            ? 'bg-[rgba(10,10,10,0.92)] border-b border-[rgba(255,255,255,0.08)]'
            : 'bg-transparent'
          }`}
        style={{ backdropFilter: scrolled ? 'blur(24px)' : 'none' }}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <HaspLogo width={110} />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-[38px] list-none">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[#5a5a5a] no-underline text-[13px] font-[400] tracking-[0.05em] transition-colors duration-200 hover:text-[#f2f2f0]"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="px-6 py-[9px] border border-[rgba(37,99,235,0.35)] text-[#2563EB] rounded-[4px] text-[13px] font-[500] tracking-[0.05em] transition-all duration-200 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB]"
            >
              Request Access
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col justify-center items-center w-[40px] h-[40px] gap-[6px] bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[1.5px] bg-[#f2f2f0] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#f2f2f0] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#f2f2f0] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[70px] left-0 w-full z-[499] bg-[rgba(10,10,10,0.97)] border-b border-[rgba(255,255,255,0.08)] md:hidden"
            style={{ backdropFilter: 'blur(24px)' }}
          >
            <ul className="flex flex-col gap-2 p-6 list-none">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-[#a0a0a0] no-underline text-[15px] font-[400] tracking-[0.05em] transition-colors duration-200 hover:text-[#f2f2f0]"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-6 py-[10px] border border-[rgba(37,99,235,0.35)] text-[#2563EB] rounded-[4px] text-[13px] font-[500] tracking-[0.05em] transition-all duration-200 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB]"
                >
                  Request Access
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
