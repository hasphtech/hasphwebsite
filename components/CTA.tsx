'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="max-w-[1180px] mx-auto px-5 md:px-8 py-[80px] md:py-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[32px] px-7 py-14 md:px-16 md:py-24 text-center text-white"
        style={{ background: 'linear-gradient(135deg,#2A1B8F 0%,#4F35D2 55%,#7B5CFF 100%)', boxShadow: '0 40px 90px rgba(79,53,210,0.35)' }}
      >
        <div className="absolute pointer-events-none" style={{ width: 520, height: 520, left: -160, bottom: -260, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div className="absolute pointer-events-none" style={{ width: 380, height: 380, right: -100, top: -180, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <div className="relative">
          <h2 className="font-[800] tracking-[-0.045em] leading-[1.04] mx-auto max-w-[760px]" style={{ fontSize: 'clamp(30px, 5vw, 66px)' }}>
            Ready to build something smarter?
          </h2>
          <p className="mt-5 text-[17px] leading-[1.65] mx-auto max-w-[500px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Request early access to our products, or tell us about the problem you want solved.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="mailto:hasphtech@gmail.com?subject=Request%20access" className="px-8 py-[15px] rounded-full text-[15px] font-[700] no-underline text-[#3B26B0] bg-white transition-transform duration-200 hover:-translate-y-[2px]">
              Request access
            </a>
            <a href="mailto:hasphtech@gmail.com" className="px-6 sm:px-8 py-[15px] rounded-full text-[14px] sm:text-[15px] font-[600] no-underline text-white break-all sm:break-normal max-w-full transition-transform duration-200 hover:-translate-y-[2px]" style={{ border: '1px solid rgba(255,255,255,0.4)' }}>
              hasphtech@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
