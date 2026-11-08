'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const pillars = [
  { icon: '◎', title: 'AI-native', body: 'Intelligence is designed into every product from day one, not bolted on later.' },
  { icon: '◈', title: 'Human-centred', body: 'Calm, clear interfaces that respect people’s time and attention.' },
  { icon: '◐', title: 'Global by default', body: 'A virtual-first team and platform that works wherever our users are.' },
]

const stats = [['2+', 'Products live'], ['1K+', 'Global users'], ['99.9%', 'Platform uptime'], ['5+', 'Products in pipeline']]

export default function About() {
  return (
    <section id="about" className="max-w-[1180px] mx-auto px-5 md:px-8 py-[90px] md:py-[130px]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 lg:gap-20 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
          <p className="text-[13px] font-[700] tracking-[0.14em] uppercase mb-4 text-[#4F35D2]">About Hasph</p>
          <h2 className="font-[800] tracking-[-0.04em] leading-[1.05] text-[#0F1226]" style={{ fontSize: 'clamp(28px, 4.6vw, 56px)' }}>
            We build intelligent products that make life feel effortless.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-[#5B6078] max-w-[480px]">
            Hasph is a virtual software company. A small, global team turning real-world problems into focused, AI-powered platforms.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 max-w-[460px]">
            {stats.map(([n, l]) => (
              <div key={l} className="rounded-[18px] p-5" style={{ background: '#F4F2FF' }}>
                <div className="text-[30px] font-[800] tracking-[-0.04em] text-[#4F35D2]">{n}</div>
                <div className="text-[13px] text-[#5B6078] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="flex gap-5 rounded-[22px] p-6 md:p-8 bg-white transition-all duration-300 hover:-translate-y-[3px]"
              style={{ border: '1px solid #E6E3F7', boxShadow: '0 10px 30px rgba(79,53,210,0.06)' }}
            >
              <div className="w-[48px] h-[48px] flex-shrink-0 rounded-[14px] flex items-center justify-center text-[22px] text-[#4F35D2]" style={{ background: '#EDE9FE' }}>{p.icon}</div>
              <div>
                <h3 className="text-[20px] font-[700] tracking-[-0.025em] text-[#0F1226] mb-1">{p.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[#5B6078]">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
