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
        style={{ border: '1px solid rgba(255,255,255,0.16)' }}
      >
        {/* Left — deep translucent dark panel */}
        <div
          className="relative px-6 py-10 md:px-[60px] md:py-[80px] flex flex-col justify-center overflow-hidden"
          style={{
            background: 'rgba(0,0,0,0.28)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div
            className="hidden md:block absolute rounded-full pointer-events-none"
            style={{
              width: 320, height: 320,
              background: 'rgba(255,255,255,0.04)',
              bottom: -80, right: -80,
            }}
          />
          <p className="text-[10px] tracking-[0.3em] uppercase font-[700] mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Talent Hub
          </p>
          <h2
            className="font-bebas leading-none tracking-[0.06em] text-white mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            WORK<br />WITH US
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.75] font-[400] max-w-[360px] mb-8 md:mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Hasph is a virtual‑first AI company. We collaborate with the world&apos;s most talented builders, designers, analysts, and thinkers — wherever they are.
          </p>
          <a
            href="#"
            className="inline-block self-start px-6 md:px-9 py-[12px] md:py-[14px] rounded-[6px] font-[600] text-[13px] md:text-[14px] tracking-[0.04em] text-white transition-all duration-200 hover:-translate-y-[2px] select-none"
            style={{
              border: '1px solid rgba(255,255,255,0.5)',
              background: 'rgba(255,255,255,0.12)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.22)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)' }}
          >
            Explore Opportunities
          </a>
        </div>

        {/* Right — glass cards */}
        <div
          className="px-5 py-6 md:px-[60px] md:py-[60px] flex flex-col gap-3 md:gap-4 justify-center"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 md:gap-5 px-4 md:px-[26px] py-4 md:py-[22px] rounded-[8px] transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.14)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.35)'
                el.style.background = 'rgba(255,255,255,0.08)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.14)'
                el.style.background = 'transparent'
              }}
            >
              {/* Icon */}
              <div
                className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-[10px] flex items-center justify-center text-[18px] md:text-[20px] flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                {role.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-[13px] md:text-[15px] font-[600] text-white mb-[2px] truncate">{role.title}</div>
                <div className="text-[11px] md:text-[12px] truncate" style={{ color: 'rgba(255,255,255,0.5)' }}>{role.sub}</div>
              </div>

              {/* Badge */}
              <span
                className="px-2 md:px-3 py-1 rounded-full text-[9px] md:text-[10px] font-[600] tracking-[0.08em] uppercase flex-shrink-0"
                style={
                  role.open
                    ? { background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.4)' }
                    : { background: 'transparent', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.2)' }
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
