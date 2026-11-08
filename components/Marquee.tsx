'use client'

const items = [
  'AI-Native SaaS', 'Global Platform', 'Intelligent Automation', 'Talent Network',
  'EMI24 Finance Tools', 'Ludo Fox Games', 'Virtual Company', 'Scalable Infrastructure', 'Human-Centred Design', 'Future-Ready Software',
]

export default function Marquee() {
  const tripled = [...items, ...items, ...items]
  return (
    <div className="relative w-full overflow-hidden py-5" style={{ background: '#4F35D2' }}>
      <div className="flex whitespace-nowrap" style={{ animation: 'marqueeScroll 36s linear infinite' }}>
        {tripled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 md:px-10 text-[14px] md:text-[16px] font-[600] tracking-[-0.01em] text-white flex-shrink-0 select-none">
            {item}
            <span className="text-[#B9A9FF]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
