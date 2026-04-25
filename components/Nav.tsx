'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = ['Platform', 'Products', 'Talent', 'Company']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[500] flex justify-between items-center px-16 h-[70px] transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.92)] border-b border-[rgba(255,255,255,0.08)]'
          : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(24px)' : 'none' }}
    >
      {/* Logo */}
      <div className="flex items-center font-bebas text-[28px] tracking-[0.12em] text-[#f2f2f0]">
        HASPH
        <span
          className="inline-block w-[7px] h-[7px] rounded-full bg-[#b8f000] ml-1"
          style={{
            animation: 'limePulse 2.5s ease-in-out infinite',
          }}
        />
      </div>

      {/* Links */}
      <ul className="flex items-center gap-[38px] list-none">
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
            className="px-6 py-[9px] border border-[rgba(184,240,0,0.25)] text-[#b8f000] rounded-[4px] text-[13px] font-[500] tracking-[0.05em] transition-all duration-200 hover:bg-[#b8f000] hover:text-[#0a0a0a] hover:border-[#b8f000]"
          >
            Request Access
          </a>
        </li>
      </ul>

      <style jsx global>{`
        @keyframes limePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,240,0,0.7); }
          50%       { box-shadow: 0 0 10px 4px rgba(184,240,0,0.15); }
        }
      `}</style>
    </motion.nav>
  )
}
