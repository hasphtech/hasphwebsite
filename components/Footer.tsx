'use client'

import HaspLogo from './HaspLogo'

const links = ['About', 'Products', 'Careers', 'Privacy', 'Contact']
const hrefs: Record<string, string> = { About: '#about', Products: '#products', Careers: '#careers', Privacy: '#', Contact: '#contact' }

export default function Footer() {
  return (
    <footer className="w-full" style={{ borderTop: '1px solid #E6E3F7', background: '#fff' }}>
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <HaspLogo fontSize={22} />
          <p className="text-[13px] mt-3 text-[#8A8FA8]">© 2026 Hasph</p>
        </div>
        <nav className="flex flex-wrap gap-6 md:gap-8">
          {links.map(l => (
            <a key={l} href={hrefs[l]} className="text-[14px] font-[500] no-underline text-[#5B6078] transition-colors duration-200 hover:text-[#4F35D2]">{l}</a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
