'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const LUDO_FOX_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.hasphgames.ludo'

function PlayButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Ludo Fox on Google Play"
      className="mt-6 inline-flex items-center gap-3 pl-6 pr-3 py-[10px] rounded-full no-underline text-white transition-all duration-200 hover:-translate-y-[2px]"
      style={{ background: '#4F35D2', boxShadow: '0 12px 28px rgba(79,53,210,0.3)' }}
    >
      <span className="text-left leading-tight">
        <span className="block text-[15px] font-[700] tracking-[-0.01em]">Download now</span>
        <span className="block text-[11px] font-[500]" style={{ color: 'rgba(255,255,255,0.78)' }}>on Google Play</span>
      </span>
      <span className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
        <svg width="18" height="20" viewBox="0 0 24 26" aria-hidden="true">
          <path d="M1.5 1.2 13 13 1.5 24.8c-.3-.3-.5-.8-.5-1.4V2.6c0-.6.2-1.1.5-1.4Z" fill="#00D7FE" />
          <path d="m16.9 9.1-3.9 3.9L1.5 1.2C2 .8 2.8.7 3.6 1.2L16.9 9.1Z" fill="#00F076" />
          <path d="m16.9 16.9-13.3 7.9c-.8.5-1.6.4-2.1 0L13 13l3.9 3.9Z" fill="#FF3A44" />
          <path d="m22.3 11.6-5.4-2.5L13 13l3.9 3.9 5.4-2.5c1.1-.7 1.1-2.1 0-2.8Z" fill="#FFD500" />
        </svg>
      </span>
    </a>
  )
}

function VisitButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 px-6 py-[12px] rounded-full text-[14px] font-[600] no-underline text-[#4F35D2] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#EDE9FE]"
      style={{ border: '1px solid #CFC7F5' }}
    >
      {label} <span>↗</span>
    </a>
  )
}

const small = [
  { name: 'EMI24', desc: 'Free financial calculators for India — EMI, loan, salary, income tax, GST and SIP — plus a personal wealth tracker. Developed by Hasph.', tag: 'Live', icon: '₹', siteUrl: 'https://emi24.com' },
  { name: 'Health & Wellness', desc: 'Care coordination and wellbeing software, intelligently connected.', tag: 'Coming soon', icon: '✚' },
  { name: 'Ludo Fox', desc: 'A modern take on the classic board game, developed by Hasph. Part of our growing gaming portfolio for kids and adults.', tag: 'Game', icon: '🦊', playUrl: LUDO_FOX_PLAY_URL },
  { name: 'Talent Network', desc: 'Smart matching between organisations and world-class specialists.', tag: 'Coming soon', icon: '⬡' },
  { name: 'Expanding Horizon', desc: 'New AI verticals launch regularly. More on the roadmap.', tag: 'Roadmap', icon: '∞' },
]

export default function Products() {
  return (
    <section id="products" style={{ background: '#F4F2FF' }}>
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-[80px] md:py-[120px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="text-center mx-auto max-w-[680px] mb-12 md:mb-16">
          <p className="text-[13px] font-[700] tracking-[0.14em] uppercase mb-4 text-[#4F35D2]">Products</p>
          <h2 className="font-[800] tracking-[-0.04em] leading-[1.05] text-[#0F1226]" style={{ fontSize: 'clamp(28px, 4.6vw, 58px)' }}>
            One platform, many ways to build smarter.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="md:col-span-2 relative overflow-hidden rounded-[28px] p-7 md:p-12 grid md:grid-cols-2 gap-10 items-center text-white"
            style={{ background: 'linear-gradient(135deg,#4F35D2 0%,#6B4DF0 60%,#8B6BFF 100%)', boxShadow: '0 30px 70px rgba(79,53,210,0.3)' }}
          >
            <div className="absolute pointer-events-none" style={{ width: 460, height: 460, right: -140, top: -160, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-[6px] rounded-full text-[12px] font-[600]" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <span className="w-[6px] h-[6px] rounded-full bg-[#7CF2A8]" style={{ animation: 'blink 1.8s infinite' }} /> Live now
              </span>
              <h3 className="mt-5 font-[800] tracking-[-0.04em] leading-[1.05]" style={{ fontSize: 'clamp(28px, 3.8vw, 46px)' }}>Intelligent Planning Suite</h3>
              <p className="mt-4 text-[16px] leading-[1.65] max-w-[440px]" style={{ color: 'rgba(255,255,255,0.82)' }}>
                AI-driven decision tools that help individuals and teams plan, track and optimise outcomes with precision.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['SaaS', 'AI', 'Productivity'].map(t => (
                  <span key={t} className="px-3 py-[5px] rounded-full text-[12px] font-[600]" style={{ background: 'rgba(255,255,255,0.16)' }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-3">
              {[['Plan', 'Set goals with AI guidance'], ['Track', 'Live progress, zero friction'], ['Optimise', 'Weekly adjustments'], ['Share', 'Team-wide visibility']].map(([t, d]) => (
                <div key={t} className="rounded-[18px] p-5" style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.18)' }}>
                  <div className="text-[16px] font-[700] mb-1">{t}</div>
                  <div className="text-[13px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.78)' }}>{d}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {small.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className={`rounded-[24px] p-7 md:p-9 bg-white transition-all duration-300 hover:-translate-y-[4px] ${i === small.length - 1 ? 'md:col-span-2' : ''}`}
              style={{ border: '1px solid #E6E3F7', boxShadow: '0 10px 30px rgba(79,53,210,0.06)' }}
            >
              <div className="flex items-start justify-between mb-10">
                <div className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center text-[22px] text-[#4F35D2]" style={{ background: '#EDE9FE' }}>{p.icon}</div>
                <span className="px-3 py-[5px] rounded-full text-[12px] font-[600] text-[#5B6078]" style={{ background: '#F4F2FF' }}>{p.tag}</span>
              </div>
              <h3 className="text-[24px] font-[700] tracking-[-0.03em] text-[#0F1226] mb-2">{p.name}</h3>
              <p className="text-[15px] leading-[1.65] text-[#5B6078]">{p.desc}</p>
              {'playUrl' in p && p.playUrl && <PlayButton href={p.playUrl} />}
              {'siteUrl' in p && p.siteUrl && <VisitButton href={p.siteUrl} label="Visit emi24.com" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
