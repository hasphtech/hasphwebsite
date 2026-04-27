'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
})

const metrics = [
  { num: '1', sup: '+',    label: 'Saas Live' },
  { num: '1', sup: 'K+',  label: 'Global Users' },
  { num: '99', sup: '.9%', label: 'Platform Uptime' },
  { num: '∞',  sup: '',    label: 'Possibilities' },
]

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: '100dvh', paddingTop: 70 }}
    >

      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(184,240,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,240,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      {/* ── Orb (contained) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '100%',
          maxWidth: 600,
          aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(184,240,0,0.18) 0%, transparent 70%)',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(90px)',
          animation: 'drift1 13s ease-in-out infinite',
        }}
      />

      {/* ── Main hero body: centered ── */}
      <div className="flex-1 flex items-center justify-center relative z-10 w-full">
        <div className="w-full max-w-[800px] mx-auto px-6 md:px-16 text-center flex flex-col items-center">

          {/* Badge */}
          <motion.div {...fadeUp(0)} className="mb-8 md:mb-12">
            <span
              className="inline-flex items-center gap-[10px] px-4 md:px-5 py-2 rounded-full text-[11px] md:text-[12px] font-[400] tracking-[0.1em] uppercase text-[#b8f000]"
              style={{
                border: '1px solid rgba(184,240,0,0.25)',
                background: 'rgba(184,240,0,0.08)',
              }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full bg-[#b8f000] flex-shrink-0"
                style={{ animation: 'blink 1.6s ease-in-out infinite' }}
              />
              Virtual Software Company
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-bebas leading-[0.92] tracking-[0.04em] text-[#f2f2f0] w-full"
            style={{ fontSize: 'clamp(56px, 12vw, 160px)' }}
          >
            BUILD<br />
            <span className="text-[#b8f000]">SMARTER</span><br />
            <span
              style={{
                WebkitTextStroke: '1.5px rgba(255,255,255,0.18)',
                color: 'transparent',
              }}
            >
              FUTURES
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.25)}
            className="mt-6 md:mt-9 mb-10 md:mb-14 text-[15px] md:text-[18px] leading-[1.75] text-[#5a5a5a] font-[300] max-w-[540px] px-2"
          >
            Hasph intelligent software that solves real‑world problems at scale — from productivity to platform services, talent to transformation.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.4)}>
            <a
              href="#"
              className="inline-block px-8 md:px-11 py-4 bg-[#b8f000] text-[#0a0a0a] rounded-[6px] font-[700] text-[14px] tracking-[0.06em] uppercase transition-all duration-200 hover:-translate-y-1 select-none"
              style={{ transition: 'all 0.25s ease' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(184,240,0,0.3)'
                ;(e.currentTarget as HTMLElement).style.background = '#cdf533'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.background = '#b8f000'
              }}
            >
              Explore Platform
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Metrics strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="grid grid-cols-2 md:grid-cols-4 relative z-10 w-full"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        {metrics.map(({ num, sup, label }, i) => (
          <div
            key={label}
            className="px-4 md:px-10 py-5 md:py-8 text-center transition-colors duration-300 hover:bg-[rgba(184,240,0,0.05)]"
            style={{
              borderRight: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="font-bebas text-[32px] md:text-[48px] tracking-[0.05em] text-[#f2f2f0] leading-none">
              {num}<span className="text-[#b8f000]">{sup}</span>
            </div>
            <div className="text-[9px] md:text-[11px] tracking-[0.15em] uppercase text-[#5a5a5a] mt-[6px]">
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
