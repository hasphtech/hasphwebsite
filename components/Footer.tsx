'use client'

const links = ['Platform', 'Products', 'Careers', 'Privacy', 'Contact']

function PIconFooter({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size * 0.72}
      height={size}
      viewBox="0 0 58 80"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="blueGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <circle cx="29" cy="28" r="20" stroke="url(#blueGradFooter)" strokeWidth="8" fill="none" />
      <rect x="21" y="36" width="16" height="36" rx="8" fill="url(#blueGradFooter)" />
    </svg>
  )
}

function HaspLogoFooter() {
  return (
    <div
      className="flex items-center"
      style={{
        fontFamily: 'Epilogue, sans-serif',
        fontSize: 22,
        fontWeight: 600,
        color: '#f2f2f0',
        letterSpacing: '-0.01em',
        lineHeight: 1,
        gap: 2,
      }}
    >
      <span>has</span>
      <PIconFooter size={25} />
      <span>h</span>
    </div>
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
