'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Platform', 'Products', 'Talent', 'Company']

function PIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size * 0.72}
      height={size}
      viewBox="0 0 58 80"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="blueGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <circle cx="29" cy="28" r="20" stroke="url(#blueGradNav)" strokeWidth="8" fill="none" />
      <rect x="21" y="36" width="16" height="36" rx="8" fill="url(#blueGradNav)" />
    </svg>
  )
}

function HaspLogo({ fontSize = 26 }: { fontSize?: number }) {
  return (
    <div
      className="flex items-center"
      style={{
        fontFamily: 'Epilogue, sans-serif',
        fontSize,
        fontWeight: 700,
        color: '#0A0F1C',
        letterSpacing: '-0.01em',
        lineHeight: 1,
        gap: 2,
      }}
    >
      <span>has</span>
      <PIcon size={fontSize * 1.15} />
      <span>h</span>
    </div>
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
            ? 'bg-[rgba(248,250,255,0.92)] border-b border-[rgba(37,99,235,0.12)]'
            : 'bg-transparent'
          }`}
        style={{ backdropFilter: scrolled ? 'blur(24px)' : 'none' }}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <HaspLogo fontSize={26} />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-[38px] list-none">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[#64748B] no-underline text-[13px] font-[500] tracking-[0.03em] transition-colors duration-200 hover:text-[#0A0F1C]"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="px-6 py-[9px] border border-[rgba(37,99,235,0.35)] text-[#2563EB] rounded-[4px] text-[13px] font-[600] tracking-[0.03em] transition-all duration-200 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB]"
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
          <span className={`block w-[22px] h-[1.5px] bg-[#0A0F1C] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#0A0F1C] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#0A0F1C] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
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
            className="fixed top-[70px] left-0 w-full z-[499] bg-[rgba(248,250,255,0.97)] border-b border-[rgba(37,99,235,0.12)] md:hidden"
            style={{ backdropFilter: 'blur(24px)' }}
          >
            <ul className="flex flex-col gap-2 p-6 list-none">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-[#475569] no-underline text-[15px] font-[500] tracking-[0.03em] transition-colors duration-200 hover:text-[#0A0F1C]"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-6 py-[10px] border border-[rgba(37,99,235,0.35)] text-[#2563EB] rounded-[4px] text-[13px] font-[600] tracking-[0.03em] transition-all duration-200 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB]"
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
