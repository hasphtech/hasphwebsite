'use client'

const links = ['Platform', 'Products', 'Careers', 'Privacy', 'Contact']

// Exact "p" geometry — same master spec as Nav
function PIconFooter({ size = 26 }: { size?: number }) {
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

function HaspLogoFooter() {
  return (
    <div
      className="flex items-center"
      style={{
        fontFamily: 'Inter, Arial, sans-serif',
        fontSize: 22,
        fontWeight: 700,
        color: '#FFFFFF',
        letterSpacing: '-0.01em',
        lineHeight: 1,
        gap: 1,
      }}
    >
      <span>has</span>
      <PIconFooter size={26} />
      <span>h</span>
    </div>
  )
}

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
        <HaspLogoFooter />
        <p className="text-[11px] md:text-[12px] mt-[6px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
          © 2025 Hasph Technologies. Global AI Software Company.
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
