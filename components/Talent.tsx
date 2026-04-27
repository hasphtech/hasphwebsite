'use client'

import { motion } from 'framer-motion'

const roles = [
  { icon: '⚙️', title: 'QA Engineers',       sub: 'Test Engineers',              status: 'Open', open: true },
  { icon: '🎓', title: 'Interns & Fellows',   sub: 'All domains · Learn & build', status: 'Open', open: true },
]

export default function Talent() {
  return (
    <section className="w-full overflow-hidden px-5 md:px-16 mb-[60px] md:mb-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[8px]"
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Left — blue panel */}
        <div
          className="relative px-6 py-10 md:px-[60px] md:py-[80px] flex flex-col justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)' }}
        >
          {/* Decorative circle */}
          <div
            className="hidden md:block absolute rounded-full pointer-events-none"
            style={{
              width: 320, height: 320,
              background: 'rgba(255,255,255,0.06)',
              bottom: -80, right: -80,
            }}
          />

          <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(255,255,255,0.55)] font-[700] mb-4">
            Talent Hub
          </p>
          <h2
            className="font-bebas leading-none tracking-[0.06em] text-white mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            WORK<br />WITH US
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-[rgba(255,255,255,0.72)] font-[400] max-w-[360px] mb-8 md:mb-10">
            Hasph is a virtual‑first AI company. We collaborate with the world&apos;s most talented builders, designers, analysts, and thinkers — wherever they are.
          </p>
          <a
            href="#"
            className="inline-block self-start px-6 md:px-9 py-[12px] md:py-[14px] rounded-[6px] font-[600] text-[13px] md:text-[14px] tracking-[0.04em] text-[#2563EB] transition-all duration-200 hover:-translate-y-[2px] select-none"
            style={{ background: '#ffffff' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8f0fe' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#ffffff' }}
          >
            Explore Opportunities
          </a>
        </div>

        {/* Right — cards */}
        <div
          className="px-5 py-6 md:px-[60px] md:py-[60px] flex flex-col gap-3 md:gap-4 justify-center"
          style={{ background: '#141414' }}
        >
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 md:gap-5 px-4 md:px-[26px] py-4 md:py-[22px] rounded-[8px] transition-colors duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(37,99,235,0.3)'
                el.style.background = 'rgba(37,99,235,0.05)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.background = 'transparent'
              }}
            >
              {/* Icon */}
              <div
                className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-[10px] flex items-center justify-center text-[18px] md:text-[20px] flex-shrink-0"
                style={{ background: '#1c1c1c', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {role.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-[13px] md:text-[15px] font-[500] text-[#f2f2f0] mb-[2px] truncate">{role.title}</div>
                <div className="text-[11px] md:text-[12px] text-[#5a5a5a] truncate">{role.sub}</div>
              </div>

              {/* Badge */}
              <span
                className="px-2 md:px-3 py-1 rounded-full text-[9px] md:text-[10px] font-[600] tracking-[0.08em] uppercase flex-shrink-0"
                style={
                  role.open
                    ? { background: 'rgba(37,99,235,0.1)', color: '#2563EB', border: '1px solid rgba(37,99,235,0.25)' }
                    : { background: 'transparent', color: '#5a5a5a', border: '1px solid rgba(255,255,255,0.13)' }
                }
              >
                {role.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
