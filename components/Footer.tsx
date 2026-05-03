'use client'

import HaspLogo from './HaspLogo'

const links = ['Platform', 'Products', 'Careers', 'Privacy', 'Contact']

export default function Footer() {
  return (
    <footer
      className="w-full px-5 md:px-16 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.14)',
        background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="flex-shrink-0">
        <HaspLogo fontSize={22} textColor="#FFFFFF" />
        <p className="text-[11px] md:text-[12px] mt-[6px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
          © 2026 Hasph Technologies. Global AI Software Company.
        </p>
      </div>

      <div className="flex gap-4 md:gap-7 flex-wrap">
        {links.map(link => (
          <a
            key={link}
            href="#"
            className="text-[11px] md:text-[12px] no-underline tracking-[0.08em] uppercase transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}
