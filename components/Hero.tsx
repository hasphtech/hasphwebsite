'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

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
    <section className="relative min-h-screen flex flex-col" style={{ paddingTop: 70 }}>

      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
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

      {/* ── Orbs ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(184,240,0,0.18) 0%, transparent 70%)',
          top: -120, left: -120,
          filter: 'blur(90px)',
          animation: 'drift1 13s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(138,184,0,0.12) 0%, transparent 70%)',
          bottom: 80, right: -80,
          filter: 'blur(90px)',
          animation: 'drift2 16s ease-in-out infinite',
        }}
      />

      {/* ── Main hero body: text left, 3D right ── */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full max-w-[1400px] mx-auto px-16 grid grid-cols-2 gap-0 items-center min-h-[calc(100vh-140px)]">

          {/* Left — copy */}
          <div className="flex flex-col justify-center pr-12">
            <motion.div {...fadeUp(0)} className="mb-12">
              <span
                className="inline-flex items-center gap-[10px] px-5 py-2 rounded-full text-[12px] font-[400] tracking-[0.1em] uppercase text-[#b8f000]"
                style={{
                  border: '1px solid rgba(184,240,0,0.25)',
                  background: 'rgba(184,240,0,0.08)',
                }}
              >
                <span
                  className="w-[6px] h-[6px] rounded-full bg-[#b8f000]"
                  style={{ animation: 'blink 1.6s ease-in-out infinite' }}
                />
                Virtual Software Company
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-bebas leading-[0.92] tracking-[0.04em] text-[#f2f2f0]"
              style={{ fontSize: 'clamp(80px, 10vw, 148px)' }}
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

            <motion.p
              {...fadeUp(0.25)}
              className="mt-9 mb-14 text-[18px] leading-[1.75] text-[#5a5a5a] font-[300] max-w-[480px]"
            >
              Hasph intelligent software that solves real‑world problems at scale — from productivity to platform services, talent to transformation.
            </motion.p>

            <motion.div {...fadeUp(0.4)}>
              <a
                href="#"
                className="inline-block px-11 py-4 bg-[#b8f000] text-[#0a0a0a] rounded-[6px] font-[700] text-[14px] tracking-[0.06em] uppercase transition-all duration-250 hover:-translate-y-1 select-none"
                style={{
                  boxShadow: '0 0 0 0 rgba(184,240,0,0)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(184,240,0,0.3)'
                  ;(e.currentTarget as HTMLElement).style.background = '#cdf533'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(184,240,0,0)'
                  ;(e.currentTarget as HTMLElement).style.background = '#b8f000'
                }}
              >
                Explore Platform
              </a>
            </motion.div>
          </div>

          {/* Right — 3D canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] w-full"
          >
            <HeroCanvas />
          </motion.div>
        </div>
      </div>

      {/* ── Metrics strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="grid grid-cols-4 relative z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        {metrics.map(({ num, sup, label }) => (
          <div
            key={label}
            className="px-10 py-8 text-center transition-colors duration-300 hover:bg-[rgba(184,240,0,0.05)]"
            style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="font-bebas text-[48px] tracking-[0.05em] text-[#f2f2f0] leading-none">
              {num}<span className="text-[#b8f000]">{sup}</span>
            </div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-[#5a5a5a] mt-[6px]">
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      <style jsx global>{`
        @keyframes drift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(60px,40px)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-40px,-60px)} }
        @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0.2} }
      `}</style>
    </section>
  )
}
