'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const steps = [
  { n: '01', title: 'Discover', body: 'We start with a real problem and the people living it — research before roadmap.' },
  { n: '02', title: 'Design', body: 'Rapid prototypes, tested early, shaped into calm and intuitive experiences.' },
  { n: '03', title: 'Build', body: 'AI-native engineering on scalable infrastructure, shipped in small, fast iterations.' },
  { n: '04', title: 'Scale', body: 'Measure, learn and expand — turning one product into a platform.' },
]

export default function Process() {
  return (
    <section id="process" className="max-w-[1180px] mx-auto px-5 md:px-8 py-[80px] md:py-[120px]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="max-w-[640px] mb-12 md:mb-16">
        <p className="text-[13px] font-[700] tracking-[0.14em] uppercase mb-4 text-[#4F35D2]">How we work</p>
        <h2 className="font-[800] tracking-[-0.04em] leading-[1.05] text-[#0F1226]" style={{ fontSize: 'clamp(28px, 4.6vw, 58px)' }}>
          From idea to platform in four moves.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
            className="relative rounded-[24px] p-7 bg-white"
            style={{ border: '1px solid #E6E3F7', boxShadow: '0 10px 30px rgba(79,53,210,0.06)' }}
          >
            <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-[14px] font-[700] text-white mb-8" style={{ background: i === steps.length - 1 ? '#4F35D2' : '#8B6BFF' }}>{s.n}</div>
            <h3 className="text-[24px] font-[700] tracking-[-0.03em] text-[#0F1226] mb-2">{s.title}</h3>
            <p className="text-[15px] leading-[1.65] text-[#5B6078]">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
