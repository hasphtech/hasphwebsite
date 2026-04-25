'use client'

const links = ['Platform |','Products |','Careers |','Privacy |','Contact |']

export default function Footer() {
  return (
    <footer
      className="px-16 py-12 flex justify-between items-center"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div>
        <div className="flex items-center font-bebas text-[26px] tracking-[0.12em] text-[#f2f2f0]">
          HASPH
          <span
            className="inline-block w-[7px] h-[7px] rounded-full bg-[#b8f000] ml-1"
            style={{ animation: 'limePulse 2.5s ease-in-out infinite' }}
          />
        </div>
        <p className="text-[12px] text-[#5a5a5a] mt-[6px]">
          © 2025 Hasph Technologies. Global AI Software Company.
        </p>
      </div>

      <div className="flex gap-7">
        {links.map(link => (
          <a
            key={link}
            href="#"
            className="text-[12px] text-[#5a5a5a] no-underline tracking-[0.08em] uppercase transition-colors duration-200 hover:text-[#b8f000]"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}
