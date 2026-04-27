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
      {/* ── Subtle grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      {/* ── Soft blue orb ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '100%',
          maxWidth: 700,
          aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
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
              className="inline-flex items-center gap-[10px] px-4 md:px-5 py-2 rounded-full text-[11px] md:text-[12px] font-[600] tracking-[0.1em] uppercase text-[#2563EB]"
              style={{
                border: '1px solid rgba(37,99,235,0.25)',
                background: 'rgba(37,99,235,0.06)',
              }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full bg-[#2563EB] flex-shrink-0"
                style={{ animation: 'blink 1.6s ease-in-out infinite' }}
              />
              Virtual Software Company
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-bebas leading-[0.92] tracking-[0.04em] text-[#0A0F1C] w-full"
            style={{ fontSize: 'clamp(56px, 12vw, 160px)' }}
          >
            BUILD<br />
            <span
              style={{
                background: 'linear-gradient(90deg, #2563EB, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SMARTER
            </span><br />
            <span
              style={{
                WebkitTextStroke: '1.5px rgba(37,99,235,0.2)',
                color: 'transparent',
              }}
            >
              FUTURES
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.25)}
            className="mt-6 md:mt-9 mb-10 md:mb-14 text-[15px] md:text-[18px] leading-[1.75] text-[#64748B] font-[400] max-w-[540px] px-2"
          >
            Hasph intelligent software that solves real‑world problems at scale — from productivity to platform services, talent to transformation.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.4)}>
            <a
              href="#"
              className="inline-block px-8 md:px-11 py-4 bg-[#2563EB] text-white rounded-[6px] font-[700] text-[14px] tracking-[0.06em] uppercase select-none"
              style={{ transition: 'all 0.25s ease' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(37,99,235,0.35)'
                ;(e.currentTarget as HTMLElement).style.background = '#1d4ed8'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.background = '#2563EB'
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
        className="grid grid-cols-2 md:grid-cols-4 relative z-10 w-full bg-white"
        style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}
      >
        {metrics.map(({ num, sup, label }, i) => (
          <div
            key={label}
            className="px-4 md:px-10 py-5 md:py-8 text-center transition-colors duration-300 hover:bg-[rgba(37,99,235,0.04)]"
            style={{
              borderRight: i < metrics.length - 1 ? '1px solid rgba(37,99,235,0.12)' : 'none',
              borderBottom: '1px solid rgba(37,99,235,0.12)',
            }}
          >
            <div className="font-bebas text-[32px] md:text-[48px] tracking-[0.05em] text-[#0A0F1C] leading-none">
              {num}<span className="text-[#2563EB]">{sup}</span>
            </div>
            <div className="text-[9px] md:text-[11px] tracking-[0.15em] uppercase text-[#94A3B8] mt-[6px]">
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
