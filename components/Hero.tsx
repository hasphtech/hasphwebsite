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
      {/* ── Subtle white grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      {/* ── Radial light bloom ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '100%',
          maxWidth: 700,
          aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(80px)',
          animation: 'drift1 13s ease-in-out infinite',
        }}
      />

      {/* ── Main hero body ── */}
      <div className="flex-1 flex items-center justify-center relative z-10 w-full">
        <div className="w-full max-w-[800px] mx-auto px-6 md:px-16 text-center flex flex-col items-center">

          {/* Badge */}
          <motion.div {...fadeUp(0)} className="mb-8 md:mb-12">
            <span
              className="inline-flex items-center gap-[10px] px-4 md:px-5 py-2 rounded-full text-[11px] md:text-[12px] font-[600] tracking-[0.1em] uppercase text-white"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.1)',
              }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full bg-white flex-shrink-0"
                style={{ animation: 'blink 1.6s ease-in-out infinite' }}
              />
              Virtual Software Company
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-bebas leading-[0.92] tracking-[0.04em] text-white w-full"
            style={{ fontSize: 'clamp(56px, 12vw, 160px)' }}
          >
            BUILD<br />
            <span
              style={{
                background: 'linear-gradient(90deg, #FFFFFF, #BAE6FD)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SMARTER
            </span><br />
            <span
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.45), rgba(255,255,255,0.2), rgba(255,255,255,0.08))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              FUTURES
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.25)}
            className="mt-6 md:mt-9 mb-10 md:mb-14 text-[15px] md:text-[18px] leading-[1.75] font-[400] max-w-[540px] px-2"
            style={{ color: 'rgba(255,255,255,0.72)' }}
          >
            Hasph intelligent software that solves real‑world problems at scale — from productivity to platform services, talent to transformation.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.4)}>
            <a
              href="#"
              className="inline-block px-8 md:px-11 py-4 rounded-[6px] font-[700] text-[14px] tracking-[0.06em] uppercase select-none text-[#1E3A8A]"
              style={{
                background: '#FFFFFF',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = '0 12px 40px rgba(255,255,255,0.25)'
                el.style.background = '#EFF6FF'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                el.style.background = '#FFFFFF'
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
        style={{
          borderTop: '1px solid rgba(255,255,255,0.14)',
          background: 'rgba(0,0,0,0.15)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {metrics.map(({ num, sup, label }, i) => (
          <div
            key={label}
            className="px-4 md:px-10 py-5 md:py-8 text-center transition-colors duration-300"
            style={{
              borderRight: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.14)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,0.14)',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
          >
            <div className="font-bebas text-[32px] md:text-[48px] tracking-[0.05em] text-white leading-none">
              {num}<span style={{ color: '#BAE6FD' }}>{sup}</span>
            </div>
            <div className="text-[9px] md:text-[11px] tracking-[0.15em] uppercase mt-[6px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
