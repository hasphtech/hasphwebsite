'use client'

import { motion } from 'framer-motion'

const products = [
  {
    num: '01',
    name: 'Intelligent Planning Suite',
    desc: 'AI-driven decision tools that help individuals and teams plan, track, and optimise outcomes with precision.',
    tags: [{ label: 'Live', live: true }, { label: 'SaaS' }, { label: 'AI' }],
  },
  {
    num: '02',
    name: 'Health Care & Wellness Platform',
    desc: 'Next-generation software for managing health, wellbeing, and care coordination — intelligently connected.',
    tags: [{ label: 'Coming Soon' }, { label: 'Platform' }],
  },
  {
    num: '03',
    name: 'Gaming',
    desc: 'Planning for entering into Gaming space for kids and adults focused single and multiplayer games.',
    tags: [{ label: 'Coming Soon' }, { label: 'Game' }],
  },
  {
    num: '04',
    name: 'Talent & Opportunity Network',
    desc: 'Smart matching between organisations and world-class freelancers, interns, and specialists — globally.',
    tags: [{ label: 'Coming Soon' }, { label: 'Network' }],
  },
  {
    num: '05',
    name: 'Expanding Horizon',
    desc: 'More AI products on the roadmap. Hasph is a platform company — new verticals launch regularly.',
    tags: [{ label: 'Roadmap' }],
  },
]

export default function Products() {
  return (
    <section className="w-full overflow-hidden px-5 md:px-16 py-[60px] md:py-[120px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 md:mb-16"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#2563EB] font-[700] mb-4">
          What We Build
        </p>
        <h2
          className="font-bebas leading-none tracking-[0.06em] text-[#0A0F1C]"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
        >
          OUR<br />
          <span style={{ color: '#CBD5E1' }}>PORTFOLIO</span>
        </h2>
      </motion.div>

      {/* Rows */}
      <div className="flex flex-col gap-[2px] w-full">
        {products.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-[4px] transition-all duration-300"
            style={{
              border: '1px solid rgba(37,99,235,0.12)',
              background: '#FFFFFF',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#F0F5FF'
              el.style.borderColor = 'rgba(37,99,235,0.28)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#FFFFFF'
              el.style.borderColor = 'rgba(37,99,235,0.12)'
            }}
          >
            {/* Accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2563EB] origin-bottom transition-transform duration-300 scale-y-0 group-hover:scale-y-100" />

            {/* ── Desktop layout ── */}
            <div className="hidden md:grid items-center gap-8 px-10 py-9" style={{ gridTemplateColumns: '60px 1fr auto auto' }}>
              <div className="font-bebas text-[42px] tracking-[0.06em] leading-none text-[#CBD5E1]">
                {p.num}
              </div>
              <div className="min-w-0">
                <h3 className="font-bebas text-[26px] tracking-[0.08em] text-[#0A0F1C] mb-[6px]">{p.name}</h3>
                <p className="text-[13px] text-[#64748B] leading-[1.65] font-[400]">{p.desc}</p>
              </div>
              <div className="flex gap-2 flex-wrap flex-shrink-0">
                {p.tags.map(t => (
                  <span
                    key={t.label}
                    className="px-[14px] py-[5px] rounded-full text-[10px] font-[600] tracking-[0.08em] whitespace-nowrap"
                    style={
                      t.live
                        ? { border: '1px solid rgba(37,99,235,0.35)', color: '#2563EB', background: 'rgba(37,99,235,0.07)' }
                        : { border: '1px solid rgba(37,99,235,0.15)', color: '#94A3B8', background: 'transparent' }
                    }
                  >
                    {t.label}
                  </span>
                ))}
              </div>
              <div className="text-[24px] text-[#CBD5E1] transition-colors duration-300 group-hover:text-[#2563EB]">→</div>
            </div>

            {/* ── Mobile layout ── */}
            <div className="flex md:hidden flex-col gap-3 px-5 py-5">
              <h3 className="font-bebas text-[20px] tracking-[0.08em] text-[#0A0F1C]">{p.name}</h3>
              <p className="text-[13px] text-[#64748B] leading-[1.65] font-[400]">{p.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map(t => (
                  <span
                    key={t.label}
                    className="px-[12px] py-[4px] rounded-full text-[10px] font-[600] tracking-[0.08em]"
                    style={
                      t.live
                        ? { border: '1px solid rgba(37,99,235,0.35)', color: '#2563EB', background: 'rgba(37,99,235,0.07)' }
                        : { border: '1px solid rgba(37,99,235,0.15)', color: '#94A3B8', background: 'transparent' }
                    }
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
