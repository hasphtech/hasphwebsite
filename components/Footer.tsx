'use client'

const links = ['Platform', 'Products', 'Careers', 'Privacy', 'Contact']

function HaspLogoFooter() {
  return (
    <svg width="96" height="30" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <text x="10" y="105" fontFamily="Inter, Arial, sans-serif" fontSize="80" fill="#f2f2f0">has</text>
      <g transform="translate(210,20)">
        <circle cx="40" cy="60" r="30" stroke="url(#blueGradFooter)" strokeWidth="10" fill="none" />
        <rect x="32" y="70" width="16" height="40" rx="8" fill="url(#blueGradFooter)" />
      </g>
      <text x="280" y="105" fontFamily="Inter, Arial, sans-serif" fontSize="80" fill="#f2f2f0">h</text>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      className="w-full px-5 md:px-16 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="flex-shrink-0">
        <HaspLogoFooter />
        <p className="text-[11px] md:text-[12px] text-[#5a5a5a] mt-[6px]">
          © 2025 Hasph Technologies. Global AI Software Company.
        </p>
      </div>

      <div className="flex gap-4 md:gap-7 flex-wrap">
        {links.map(link => (
          <a
            key={link}
            href="#"
            className="text-[11px] md:text-[12px] text-[#5a5a5a] no-underline tracking-[0.08em] uppercase transition-colors duration-200 hover:text-[#2563EB]"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}
