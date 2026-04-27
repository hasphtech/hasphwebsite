'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Platform', 'Products', 'Talent', 'Company']

// Exact "p" geometry from master hasph-p.svg
// Original: circle cx=128 cy=110 r=60 sw=14 | rect x=118 y=120 w=20 h=70 rx=10
// viewBox crops to the visible p bounds: x[61..195] y[43..190]
function PIcon({ size = 30 }: { size?: number }) {
  const w = size * (134 / 147)
  return (
    <svg
      width={w}
      height={size}
      viewBox="61 43 134 147"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <circle cx="128" cy="110" r="60" stroke="#3B82F6" strokeWidth="14" fill="none" />
      <rect x="118" y="120" width="20" height="70" rx="10" fill="#3B82F6" />
    </svg>
  )
}

function HaspLogo({ fontSize = 26 }: { fontSize?: number }) {
  return (
    <div
      className="flex items-center"
      style={{
        fontFamily: 'Inter, Arial, sans-serif',
        fontSize,
        fontWeight: 700,
        color: '#FFFFFF',
        letterSpacing: '-0.01em',
        lineHeight: 1,
        gap: 1,
      }}
    >
      <span>has</span>
      <PIcon size={fontSize * 1.2} />
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
        className={`fixed top-0 left-0 z-[500] w-full flex justify-between items-center h-[70px] transition-all duration-300 px-5 md:px-16
          ${scrolled ? 'border-b border-[rgba(255,255,255,0.12)]' : ''}`}
        style={{
          background: scrolled ? 'rgba(13,27,62,0.75)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
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
                className="no-underline text-[13px] font-[500] tracking-[0.03em] transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="px-6 py-[9px] rounded-[4px] text-[13px] font-[600] tracking-[0.03em] transition-all duration-200"
              style={{
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#FFFFFF',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.15)'
                el.style.borderColor = 'rgba(255,255,255,0.8)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.borderColor = 'rgba(255,255,255,0.5)'
              }}
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
          <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
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
            className="fixed top-[70px] left-0 w-full z-[499] border-b border-[rgba(255,255,255,0.12)] md:hidden"
            style={{
              background: 'rgba(13,27,62,0.92)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <ul className="flex flex-col gap-2 p-6 list-none">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 no-underline text-[15px] font-[500] tracking-[0.03em] transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-6 py-[10px] text-white rounded-[4px] text-[13px] font-[600] tracking-[0.03em] transition-all duration-200"
                  style={{
                    border: '1px solid rgba(255,255,255,0.5)',
                    background: 'rgba(255,255,255,0.1)',
                  }}
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
