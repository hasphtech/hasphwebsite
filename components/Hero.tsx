'use client'

import { motion } from 'framer-motion'
import { HaspMark } from './HaspLogo'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]
const up = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: d, ease },
})

const bars = [40, 58, 46, 74, 56, 88, 68, 100]

export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(180deg,#F4F2FF 0%,#FFFFFF 100%)' }}>
      {/* dotted backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CFC7F5 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 25%, black 20%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 25%, black 20%, transparent 75%)',
        }}
      />

      <div className="relative max-w-[1180px] mx-auto px-5 md:px-8 pt-[130px] md:pt-[170px] pb-[70px] md:pb-[100px] text-center">
        <motion.div {...up(0)} className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full text-[13px] font-[600]" style={{ background: '#fff', border: '1px solid #E6E3F7', color: '#4F35D2', boxShadow: '0 2px 10px rgba(79,53,210,0.08)' }}>
          <span className="w-[7px] h-[7px] rounded-full bg-[#4F35D2]" style={{ animation: 'blink 1.8s infinite' }} />
          Virtual-first AI software company
        </motion.div>

        <motion.h1
          {...up(0.1)}
          className="mt-7 mx-auto font-[800] tracking-[-0.045em] leading-[1.02] max-w-[900px]"
          style={{ fontSize: 'clamp(32px, 7.2vw, 92px)', color: '#0F1226' }}
        >
          Smarter software for a{' '}
          <span style={{ background: 'linear-gradient(95deg,#4F35D2,#8B6BFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            connected world
          </span>
        </motion.h1>

        <motion.p {...up(0.22)} className="mt-6 mx-auto text-[17px] md:text-[19px] leading-[1.65] max-w-[600px] text-[#5B6078]">
          Hasph designs and ships AI-native products that solve real problems at scale — from planning and wellbeing to talent and play.
        </motion.p>

        <motion.div {...up(0.34)} className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#products" className="inline-flex items-center gap-2 px-8 py-[15px] rounded-full text-[15px] font-[600] no-underline text-white transition-all duration-200 hover:-translate-y-[2px]" style={{ background: '#4F35D2', boxShadow: '0 12px 28px rgba(79,53,210,0.3)' }}>
            Explore products →
          </a>
          <a href="#careers" className="inline-flex items-center px-8 py-[15px] rounded-full text-[15px] font-[600] no-underline text-[#0F1226] transition-all duration-200 hover:-translate-y-[2px]" style={{ background: '#fff', border: '1px solid #DDD8F5' }}>
            Join the team
          </a>
        </motion.div>

        {/* Dashboard showcase */}
        <motion.div {...up(0.5)} className="relative mt-16 md:mt-24 mx-auto max-w-[980px] text-left">
          <div className="rounded-[26px] p-3 md:p-4" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid #E6E3F7', boxShadow: '0 40px 90px rgba(79,53,210,0.16)' }}>
            <div className="rounded-[18px] overflow-hidden" style={{ background: '#fff', border: '1px solid #EEEAFB' }}>
              {/* window bar */}
              <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid #EEEAFB', background: '#FBFAFF' }}>
                {['#FF8A8A', '#FFD27A', '#8EE3A5'].map(c => <span key={c} className="w-[10px] h-[10px] rounded-full" style={{ background: c }} />)}
                <span className="ml-3 text-[12px] text-[#8A8FA8]">hasph.com / planning-suite</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[210px_1fr]">
                <div className="hidden md:flex flex-col gap-1 p-5" style={{ borderRight: '1px solid #EEEAFB' }}>
                  <div className="mb-4"><HaspMark size={30} /></div>
                  {['Overview', 'Goals', 'Insights', 'Team', 'Settings'].map((t, i) => (
                    <div key={t} className="px-3 py-[9px] rounded-[10px] text-[13px] font-[500]" style={i === 0 ? { background: '#EDE9FE', color: '#4F35D2' } : { color: '#5B6078' }}>{t}</div>
                  ))}
                </div>

                <div className="p-5 md:p-7">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[12px] text-[#8A8FA8]">Intelligent Planning Suite</div>
                      <div className="text-[22px] md:text-[26px] font-[700] tracking-[-0.03em] text-[#0F1226]">Weekly outcomes</div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[12px] font-[600]" style={{ background: '#E7F8EE', color: '#1B8A4B' }}>● Live</span>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[['Goals on track', '87%'], ['AI suggestions', '24'], ['Time saved', '6.5h']].map(([l, v]) => (
                      <div key={l} className="rounded-[14px] p-4" style={{ background: '#F7F5FF', border: '1px solid #EEEAFB' }}>
                        <div className="text-[11px] md:text-[12px] text-[#8A8FA8]">{l}</div>
                        <div className="text-[20px] md:text-[26px] font-[700] tracking-[-0.03em] text-[#0F1226] mt-1">{v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-end gap-2 md:gap-3 h-[130px]">
                    {bars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.9, delay: 0.9 + i * 0.07, ease }}
                        className="flex-1 rounded-[8px]"
                        style={{ background: i === bars.length - 1 ? 'linear-gradient(180deg,#8B6BFF,#4F35D2)' : '#E4DEFB' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="hidden md:flex absolute -left-10 top-[34%] items-center gap-3 px-4 py-3 rounded-[16px]" style={{ background: '#fff', border: '1px solid #E6E3F7', boxShadow: '0 18px 40px rgba(79,53,210,0.15)', animation: 'float 6s ease-in-out infinite' }}>
            <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-white text-[16px]" style={{ background: '#4F35D2' }}>✦</div>
            <div>
              <div className="text-[13px] font-[600] text-[#0F1226]">AI insight ready</div>
              <div className="text-[11px] text-[#8A8FA8]">Plan adjusted for next week</div>
            </div>
          </div>
          <div className="hidden md:flex absolute -right-8 bottom-[12%] items-center gap-3 px-4 py-3 rounded-[16px]" style={{ background: '#fff', border: '1px solid #E6E3F7', boxShadow: '0 18px 40px rgba(79,53,210,0.15)', animation: 'float 7s ease-in-out infinite 1s' }}>
            <div className="text-[22px]">🌍</div>
            <div>
              <div className="text-[13px] font-[600] text-[#0F1226]">1K+ global users</div>
              <div className="text-[11px] text-[#8A8FA8]">99.9% uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
