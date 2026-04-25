'use client'

import { motion } from 'framer-motion'

const roles = [
  // { icon: '⚙️', title: 'Engineers & Developers', sub: 'Full-stack · AI/ML · Infrastructure',status: 'Open', open: false },
  // { icon: '🎨', title: 'Designers',              sub: 'Product · Brand · Motion',           status: 'Open', open: false },
  // { icon: '📊', title: 'Analysts & Strategists', sub: 'Data · Research · Growth',           status: 'Soon', open: false },
  { icon: '⚙️', title: 'QA Engineers',           sub: 'Test Engineers',                     status: 'Open', open: true },
  { icon: '🎓', title: 'Interns & Fellows',       sub: 'All domains · Learn & build',       status: 'Open', open: true },
]

export default function Talent() {
  return (
    <section className="mx-16 mb-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 overflow-hidden rounded-[8px]"
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Left — lime panel */}
        <div
          className="relative px-[60px] py-[80px] flex flex-col justify-center overflow-hidden"
          style={{ background: '#b8f000' }}
        >
          {/* Decorative circle */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 320, height: 320,
              background: 'rgba(0,0,0,0.06)',
              bottom: -80, right: -80,
            }}
          />

          <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(0,0,0,0.4)] font-[700] mb-4">
            Talent Hub
          </p>
          <h2
            className="font-bebas leading-none tracking-[0.06em] text-[#0a0a0a] mb-5"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            WORK<br />WITH US
          </h2>
          <p className="text-[15px] leading-[1.75] text-[rgba(0,0,0,0.55)] font-[400] max-w-[360px] mb-10">
            Hasph is a virtual‑first AI company. We collaborate with the world's most talented builders, designers, analysts, and thinkers — wherever they are.
          </p>
          <a
            href="#"
            className="inline-block px-9 py-[14px] rounded-[6px] font-[600] text-[14px] tracking-[0.04em] text-[#b8f000] transition-all duration-250 hover:-translate-y-[2px] select-none"
            style={{ background: '#0a0a0a' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1c1c1c' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a' }}
          >
            Explore Opportunities
          </a>
        </div>

        {/* Right — cards */}
        <div
          className="px-[60px] py-[60px] flex flex-col gap-4 justify-center"
          style={{ background: '#141414', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
        >
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 px-[26px] py-[22px] rounded-[8px] transition-all duration-300 cursor-none"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(184,240,0,0.3)'
                el.style.background = 'rgba(184,240,0,0.05)'
                el.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.background = 'transparent'
                el.style.transform = 'translateX(0)'
              }}
            >
              {/* Icon */}
              <div
                className="w-[46px] h-[46px] rounded-[10px] flex items-center justify-center text-[20px] flex-shrink-0"
                style={{ background: '#1c1c1c', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {role.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="text-[15px] font-[500] text-[#f2f2f0] mb-1">{role.title}</div>
                <div className="text-[12px] text-[#5a5a5a]">{role.sub}</div>
              </div>

              {/* Badge */}
              <span
                className="px-3 py-1 rounded-full text-[10px] font-[600] tracking-[0.08em] uppercase flex-shrink-0"
                style={
                  role.open
                    ? {
                        background: 'rgba(184,240,0,0.1)',
                        color: '#b8f000',
                        border: '1px solid rgba(184,240,0,0.25)',
                      }
                    : {
                        background: 'transparent',
                        color: '#5a5a5a',
                        border: '1px solid rgba(255,255,255,0.13)',
                      }
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
