'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HaspLogo from './HaspLogo'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Process',  href: '#process' },
  { label: 'Careers',  href: '#careers' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 w-full z-[500] transition-all duration-300"
      style={{
        background: scrolled || open ? 'rgba(255,255,255,0.86)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #E6E3F7' : '1px solid transparent',
      }}
    >
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1180px] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between"
      >
        <a href="#top" aria-label="Hasph home"><HaspLogo fontSize={24} /></a>

        <ul className="hidden md:flex items-center gap-9 list-none">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className="text-[14px] font-[500] no-underline transition-colors duration-200 text-[#5B6078] hover:text-[#4F35D2]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-[11px] rounded-full text-[14px] font-[600] no-underline text-white transition-all duration-200 hover:-translate-y-[1px]"
            style={{ background: '#4F35D2', boxShadow: '0 8px 20px rgba(79,53,210,0.25)' }}
          >
            Request access
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-[5px] w-10 h-10 items-center justify-center bg-transparent border-none"
          >
            <span className={`block w-[20px] h-[2px] bg-[#0F1226] transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-[20px] h-[2px] bg-[#0F1226] transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-[20px] h-[2px] bg-[#0F1226] transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: '1px solid #E6E3F7' }}
          >
            <ul className="flex flex-col p-5 list-none">
              {[...links, { label: 'Request access', href: '#contact' }].map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[16px] font-[500] text-[#0F1226] no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
