'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const roles = [
  { title: 'QA Engineer', team: 'Engineering', type: 'Remote · Full-time', open: true },
  { title: 'Intern / Fellow', team: 'All domains', type: 'Remote · Learn & build', open: true },
  { title: 'Product Designer', team: 'Design', type: 'Remote', open: false },
  { title: 'AI / ML Engineer', team: 'Engineering', type: 'Remote', open: false },
]

export default function Talent() {
  return (
    <section id="careers" style={{ background: '#F4F2FF' }}>
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-[80px] md:py-[120px] grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="lg:sticky lg:top-[120px]">
          <p className="text-[13px] font-[700] tracking-[0.14em] uppercase mb-4 text-[#4F35D2]">Careers</p>
          <h2 className="font-[800] tracking-[-0.04em] leading-[1.05] text-[#0F1226]" style={{ fontSize: 'clamp(28px, 4.6vw, 54px)' }}>
            Build the future with us, from anywhere.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-[#5B6078] max-w-[380px]">
            We collaborate with talented builders, designers, analysts and thinkers wherever they are.
          </p>
          <a href="mailto:hasphtech@gmail.com?subject=Careers" className="mt-8 inline-flex px-7 py-[14px] rounded-full text-[15px] font-[600] no-underline text-white transition-all duration-200 hover:-translate-y-[2px]" style={{ background: '#4F35D2', boxShadow: '0 12px 28px rgba(79,53,210,0.28)' }}>
            Send your CV →
          </a>
        </motion.div>

        <div className="flex flex-col gap-3">
          {roles.map((r, i) => (
            <motion.a
              key={r.title}
              href="mailto:hasphtech@gmail.com?subject=Careers"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
              className="group flex items-center justify-between gap-4 rounded-[20px] px-6 md:px-8 py-6 bg-white no-underline transition-all duration-300 hover:-translate-y-[3px]"
              style={{ border: '1px solid #E6E3F7', boxShadow: '0 8px 24px rgba(79,53,210,0.05)' }}
            >
              <div>
                <div className="text-[18px] md:text-[20px] font-[700] tracking-[-0.025em] text-[#0F1226]">{r.title}</div>
                <div className="text-[13px] mt-1 text-[#5B6078]">{r.team} · {r.type}</div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span
                  className="px-3 py-[5px] rounded-full text-[12px] font-[600]"
                  style={r.open ? { background: '#E7F8EE', color: '#1B8A4B' } : { background: '#F4F2FF', color: '#8A8FA8' }}
                >
                  {r.open ? 'Open' : 'Soon'}
                </span>
                <span className="text-[20px] text-[#4F35D2] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
